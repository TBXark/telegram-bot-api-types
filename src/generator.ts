import type {TelegramField, TypesFileGenerator} from "./type";

export function uppercaseFirstChar(s: string): string {
    return s[0].toUpperCase() + s.slice(1);
}

export function lowercaseFirstChar(s: string): string {
    return s[0].toLowerCase() + s.slice(1);
}

export function anchorLink(name: string): string {
    return `https://core.telegram.org/bots/api#${name.toLowerCase()}`
}

export class DtsGenerator implements TypesFileGenerator {
    private readonly typeMapping: Record<string, Record<string, string>>;
    private readonly requestSuffix: string;
    private readonly responseType: string;

    constructor(typeMapping: Record<string, Record<string, string>>, requestSuffix: string, responseType: string) {
        this.typeMapping = typeMapping;
        this.requestSuffix = requestSuffix;
        this.responseType = responseType;
    }

    type(name: string, description: string, fields: TelegramField[], template?: string): string {
        let typeDef = description === '' ? '' : `/** ${description} */`;
        typeDef += `\nexport interface ${uppercaseFirstChar(name)} {`
        for (const field of fields) {
            typeDef += field.description === '' ? '' : `\n    /** ${field.raw_type} | ${field.description} */`
            typeDef += `\n    ${field.name}${field.optional ? '?' : ''}: ${this.typeMapping[name]?.[field.name] || field.type};`
        }
        typeDef += `\n}`
        return typeDef;
    }

    union(name: string, description: string, types: string[], separator: string): string {
        let unionDef = description === '' ? '' : `/** ${description} */`;
        unionDef += `\nexport type ${uppercaseFirstChar(name)} = ${types.join(separator)};`
        return unionDef;
    }

    enum(name: string, description: string, values: string[]): string {
        return this.union(name, description, values.map(v => `'${v}'`), ' | ');
    }

    method(name: string, description: string, params: TelegramField[], returns: string, template?: string): string {

        const isAllOptional = params.every(p => p.optional);
        const reqParams = `(${params.length > 0 ? `params${isAllOptional ? '?' : ''}: ${uppercaseFirstChar(name)}Params` : ''})`

        let methodDef = ''
        methodDef += `\nexport interface ${uppercaseFirstChar(name)}Request${this.requestSuffix} {`
        methodDef += `\n    /** ${description}  ${anchorLink(name)} */`
        methodDef += `\n    ${lowercaseFirstChar(name)}: ${reqParams} => Promise<${this.responseType}>;`
        if (returns && returns !== 'ResponseWithOutData') {
            methodDef += `\n    ${lowercaseFirstChar(name)}WithReturns: ${reqParams} => Promise<${returns}>;`
        }
        methodDef += `\n}`
        return methodDef;
    }
}

export class JsDocGenerator implements TypesFileGenerator {
    private readonly typeMapping: Record<string, Record<string, string>>;
    private readonly requestSuffix: string;
    private readonly responseType: string;

    constructor(typeMapping: Record<string, Record<string, string>>, requestSuffix: string, responseType: string) {
        this.typeMapping = typeMapping;
        this.requestSuffix = requestSuffix;
        this.responseType = responseType;
    }


    toCommonBlock(text: string): string {
        return `/**\n${text.trim().split('\n').map(line => ` * ${line}`).join('\n')}\n */`
    }

    type(name: string, description: string, fields: TelegramField[], template?: string): string {
        let typeDef = description;
        if (template) {
            typeDef += `\n@template ${template}`;
        }
        typeDef += `\n@typedef {Object} ${uppercaseFirstChar(name)}`;
        for (const field of fields) {
            let fieldLine = `@property {${this.typeMapping[name]?.[field.name] || field.type}} `;
            if (field.optional) {
                fieldLine += `[${field.name}]`;
            } else {
                fieldLine += field.name;
            }
            fieldLine += ` ${field.description}`;
            typeDef += `\n${fieldLine}`;
        }
        return this.toCommonBlock(typeDef);

    }

    union(name: string, description: string, types: string[], separator: string): string {
        return this.toCommonBlock(`@typedef {${types.join(separator)}} ${uppercaseFirstChar(name)} ${description}`);
    }

    enum(name: string, description: string, values: string[]): string {
        return this.toCommonBlock(`@typedef {(${values.map(v => `'${v}'`).join(' | ')})} ${uppercaseFirstChar(name)} ${description}`);
    }

    method(name: string, description: string, params: TelegramField[], returns: string, template?: string): string {

        const paramsName = params.every(p => p.optional) ? '[params]' : 'params';
        const reqParams = `${uppercaseFirstChar(name)}Params`

        let methodDef = ''
        if (template) {
            methodDef += `@template ${template}\n`
        }

        const methodName = `${uppercaseFirstChar(name)}Request`
        methodDef += `@interface ${methodName}\n\n`
        methodDef += `${description}  ${anchorLink(name)}`
        methodDef += `\n@function ${lowercaseFirstChar(name)}\n`
        methodDef += `@memberof ${methodName}\n`
        methodDef += params.length > 0 ? `@param {${reqParams}} ${paramsName}\n` : '';
        methodDef += `@returns {Promise<${this.responseType}>}\n`

        if (returns && returns !== 'ResponseWithOutData') {
            methodDef += `\n@function ${lowercaseFirstChar(name)}WithReturns\n`
            methodDef += `@memberof ${methodName}\n`
            methodDef += params.length > 0 ? `@param {${reqParams}} ${paramsName}\n` : '';
            methodDef += `@returns {Promise<${returns}>}\n`
        }

        return this.toCommonBlock(methodDef);
    }

}