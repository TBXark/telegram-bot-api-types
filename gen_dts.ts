import type { TelegramTypes, TelegramField, TelegramMethod } from './type';
import * as fs from 'node:fs';


const types: TelegramTypes[] = JSON.parse(fs.readFileSync('types.json', 'utf8'));
const methods: TelegramMethod[] = JSON.parse(fs.readFileSync('methods.json', 'utf8'));


const typeGen = (t: string): string => {
    switch (t) {
        case 'Integer':
            return 'number';
        case 'String':
            return 'string';
        case 'Boolean':
        case 'True':
        case 'False':
        case 'Float':
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

const genType = (name: string, description: string, fields: TelegramField[]): string => {
    let typeDef = `// ${description}`
    typeDef += `\nexport interface ${name} {`
    for (const field of fields) {
        typeDef += `\n    // ${field.description}`
        typeDef += `\n    ${field.name}${field.optional ? '?' : ''}: ${typeGen(field.type)};`
    }
    typeDef += `\n}\n\n`
    return typeDef;
}

let typedts = types.map(type => genType(type.name, type.description, type.fields)).join('\n');

let methoddts = ``
const upcaseFirstChar = (s: string) => s[0].toUpperCase() + s.slice(1);

methods.forEach(method => {
    let methodDef = `\n// ${method.description}`
    let methodReqParams = ''
    methodDef += `\nexport interface ${upcaseFirstChar(method.name)}Request {`
    methodDef += `\n    ${method.name}?: (`
    if (method.parameters.length > 0) {
        const name = `${upcaseFirstChar(method.name)}Params`
        methodReqParams = genType(name, method.description, method.parameters)
        methodDef += `params: ${name}) => Promise<Response>;`  
    }   else {
        methodDef += `) => Promise<Response>;`
    }
    methodDef += `\n}\n\n`
    if (methodReqParams) {
        methoddts += methodReqParams;
    }
    methoddts += methodDef;
})

const allMethods = `export type TelegramBotMethod = ${methods.map(method => `'${method.name}'`).join(' | ')};`


fs.writeFileSync('index.d.ts', typedts + methoddts + allMethods);