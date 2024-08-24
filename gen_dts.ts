import type { TelegramTypes, TelegramField, TelegramMethod } from './type';
import * as fs from 'node:fs';


const types: TelegramTypes[] = JSON.parse(fs.readFileSync('types.json', 'utf8'));
const methods: TelegramMethod[] = JSON.parse(fs.readFileSync('methods.json', 'utf8'));


const typeGen = (t: string): string => {
    switch (t) {
        case 'Integer':
        case 'Float':
            return 'number';
        case 'String':
            return 'string';
        case 'Boolean':
        case 'True':
        case 'False':
            return 'boolean';
        default:
            if (t.includes(' or ')) {
                return t.split(' or ').map(typeGen).join(' | ');
            }
            if (t.includes(' and ')) {
                return t.split(' and ').map(typeGen).join(' | ');
            }
            if (t.startsWith('Array of ')) {
                const arrayT = typeGen(t.slice(9))
                if (arrayT.includes(', ')) {
                    return arrayT.split(', ').map(typeGen).map(t => `Array<${t}>`).join(' | ');
                }
                return `Array<${typeGen(t.slice(9))}>`;
            }
            return t;
    }
}

const genType = (name: string, anchor: string, description: string, fields: TelegramField[]): string => {
    let typeDef = `/** ${description ? description + ' ' : '' } https://core.telegram.org/bots/api#${anchor.toLowerCase()} */`
    typeDef += `\nexport interface ${name} {`
    for (const field of fields) {
        typeDef += `\n    /** ${field.description} */`
        typeDef += `\n    ${field.name}${field.optional ? '?' : ''}: ${typeGen(field.type)};`
    }
    typeDef += `\n}\n\n`
    return typeDef;
}

let output = ''

output += types.map(type => genType(type.name, type.name, type.description, type.fields)).join('\n');

const upcaseFirstChar = (s: string) => s[0].toUpperCase() + s.slice(1);

methods.forEach(method => {
    let methodDef = ''
    let methodReqParams = ''
    methodDef += `\nexport interface ${upcaseFirstChar(method.name)}Request {`
    methodDef += `\n    /** ${method.description} https://core.telegram.org/bots/api#${method.name.toLowerCase()} */`
    methodDef += `\n    ${method.name}: (`
    if (method.parameters.length > 0) {
        const name = `${upcaseFirstChar(method.name)}Params`
        methodReqParams = genType(name, method.name, '', method.parameters)
        methodDef += `params: ${name}) => Promise<Response>;`  
    }   else {
        methodDef += `) => Promise<Response>;`
    }
    if (methodReqParams) {
        output += methodReqParams;
    }
    methodDef += `\n}\n\n\n`
    output += methodDef;
})


output += `export type BotMethod = ${methods.map(method => `'${method.name}'`).join(' | ')};`;

output += `\n\n\nexport type AllBotMethods = ${methods.map(method => `${upcaseFirstChar(method.name)}Request`).join(' & ')};`;

output += `


export interface ResponseSuccess<T> {
    ok: true;
    result: T;
}


export interface ResponseError {
    ok: false;
    error_code: number;
    description: string;
}
`

fs.writeFileSync('index.d.ts', output);