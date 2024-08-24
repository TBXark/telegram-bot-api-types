import type { TelegramTypes, TelegramField, TelegramMethod } from './type';
import * as fs from 'node:fs';


const types: TelegramTypes[] = JSON.parse(fs.readFileSync('types.json', 'utf8'));
const methods: TelegramMethod[] = JSON.parse(fs.readFileSync('methods.json', 'utf8'));



const genType = (name: string, anchor: string, description: string, fields: TelegramField[]): string => {
    let typeDef = `/** ${description ? description + ' ' : ''} https://core.telegram.org/bots/api#${anchor.toLowerCase()} */`
    typeDef += `\nexport interface ${name} {`
    for (const field of fields) {
        typeDef += `\n    /** ${field.description} */`
        typeDef += `\n    ${field.name}${field.optional ? '?' : ''}: ${field.type};`
    }
    typeDef += `\n}\n\n`
    return typeDef;
}

let output = ''

output += types.map(type => genType(type.name, type.name, type.description, type.fields)).join('\n');


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


export type SuccessWithOutData = true;


export type ResponseWithOutData = ResponseSuccess<SuccessWithOutData>;

export type ResponseWithMessage = ResponseSuccess<Message>;


`

const upcaseFirstChar = (s: string) => s[0].toUpperCase() + s.slice(1);

methods.forEach(method => {
    let methodDef = ''
    const paramsName = `${upcaseFirstChar(method.name)}Params`
    methodDef += `\nexport interface ${upcaseFirstChar(method.name)}Request {`
    methodDef += `\n    /** ${method.description} https://core.telegram.org/bots/api#${method.name.toLowerCase()} */`
    methodDef += `\n    ${method.name}: (${method.parameters.length > 0 ? `params: ${paramsName}` : ''}) => Promise<Response>;`
    if (method.parameters.length > 0) {
        output += genType(paramsName, method.name, '', method.parameters);
    }
    if (method.returns) {
        let returns = ''
        if (method.returns === 'true') {
            returns = 'ResponseWithOutData';
        } else if (method.returns === 'Message') {
            returns = 'ResponseWithMessage';
        } else {
            returns = `ResponseSuccess<${method.returns}>`;
        }
        if (returns && returns !== 'ResponseWithOutData') {
            methodDef += `\n    ${method.name}WithReturns: (${method.parameters.length > 0 ? `params: ${paramsName}` : ''}) => Promise<${returns}>;`
        }
        output += `\nexport type ${upcaseFirstChar(method.name)}Response = ${returns};\n\n`
    }
    methodDef += `\n}\n\n\n`
    output += methodDef;
})


output += `export type BotMethod = ${methods.map(method => `'${method.name}'`).join(' | ')};`;

output += `\n\n\nexport type AllBotMethods = ${methods.map(method => `${upcaseFirstChar(method.name)}Request`).join(' & ')};`;


fs.writeFileSync('index.d.ts', output);