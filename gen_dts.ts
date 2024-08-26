import type { TelegramTypes, TelegramField, TelegramMethod, TelegramUnions } from './type';
import * as fs from 'node:fs';


const types: TelegramTypes[] = JSON.parse(fs.readFileSync('types.json', 'utf8'));
const methods: TelegramMethod[] = JSON.parse(fs.readFileSync('methods.json', 'utf8'));
const unions: TelegramUnions[] = JSON.parse(fs.readFileSync('unions.json', 'utf8'));


const typeMapping: Record<string, Record<string, string>> = {
    'Chat': {
        'type': 'ChatType',
    },
    'ChatFullInfo': {
        'type': 'ChatType',
    },
    'InlineQuery': {
        'type': 'ChatType',
    },
    'MessageEntity': {
        'type': 'MessageEntityType',
    },
    'SendMessageParams': {
        'parse_mode': 'ParseMode',
    },
    'SendChatActionParams': {
        'action': 'ChatAction',
    }   
}

const genAnchor = (name: string) => `https://core.telegram.org/bots/api#${name.toLowerCase()}`; 

const genType = (name: string, anchor: string, description: string, fields: TelegramField[]): string => {
    let typeDef = `/** ${description ? description + ' ' : ''} ${genAnchor(anchor)} */`
    typeDef += `\nexport interface ${name} {`
    for (const field of fields) {
        const tf = typeMapping[name]?.[field.name] || field.type;
        typeDef += `\n    /** ${field.raw_type} | ${field.description} */`
        typeDef += `\n    ${field.name}${field.optional ? '?' : ''}: ${tf};`
    }
    typeDef += `\n}\n\n`
    return typeDef;
}

const genUnion = (name: string, description: string, types: string[]): string => {
    let unionDef = `/** ${description ? description + ' ' : ''} ${genAnchor(name)} */`
    unionDef += `\nexport type ${name} = ${types.join(' | ')};`
    unionDef += `\n\n`
    return unionDef;
}

let output = `
export type ChatType = "private" | "group" | "supergroup" | "channel";


export type ChatAction = "typing"| "upload_photo"| "record_video"| "upload_video"| "record_voice"| "upload_voice"| "upload_document"| "find_location"| "record_video_note"| "upload_video_note";


export type MessageEntityType = "mention"| "hashtag"| "cashtag"| "bot_command"| "url"| "email"| "phone_number"| "bold"| "italic"| "underline"| "strikethrough"| "code"| "pre"| "text_link"| "text_mention"| "spoiler"| "custom_emoji";


export type ParseMode = "Markdown" | "MarkdownV2" | "HTML";


`

output += types.map(type => genType(type.name, type.name, type.description, type.fields)).join('\n');
output += unions.map(union => genUnion(union.name, union.description, union.types)).join('\n');



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


const uppercaseFirstChar = (s: string) => s[0].toUpperCase() + s.slice(1);

methods.forEach(method => {
    let methodDef = ''
    
    const paramsName = `${uppercaseFirstChar(method.name)}Params`
    const isParamsOptional = method.parameters.find(field => !field.optional) ? false : true;
    const functionParams = `(${method.parameters.length > 0 ? `params${isParamsOptional ? '?' : ''}: ${paramsName}` : ''})`

    methodDef += `\nexport interface ${uppercaseFirstChar(method.name)}Request<R> {`
    methodDef += `\n    /** ${method.description} ${genAnchor(method.name)} */`
    methodDef += `\n    ${method.name}: ${functionParams} => Promise<R>;`

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
            methodDef += `\n    ${method.name}WithReturns: ${functionParams} => Promise<${returns}>;`
        }
        output += `\nexport type ${uppercaseFirstChar(method.name)}Response = ${returns};\n\n`
    }
    methodDef += `\n}\n\n\n`
    output += methodDef;
})


output += `export type BotMethod = ${methods.map(method => `'${method.name}'`).join(' | ')};`;

output += `\n\n\nexport type AllBotMethods<R> = ${methods.map(method => `${uppercaseFirstChar(method.name)}Request<R>`).join(' & ')};`;


fs.writeFileSync('index.d.ts', output);