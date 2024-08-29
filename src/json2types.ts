import type {TelegramMethod, TelegramTypes, TelegramUnions, TypesFileGenerator} from './type';
import * as fs from 'node:fs';
import * as process from 'node:process';
import {anchorLink, DtsGenerator, JsDocGenerator, uppercaseFirstChar} from "./generator";

const UNION_AND = ' & ';
const UNION_OR = ' | ';
const isGenericEnable = process.env.GENERIC_MODE === 'true';
const requestSuffix = isGenericEnable ? '<R>' : '';
const responseType = isGenericEnable ? 'R' : 'Response'

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

function runGen(gen: TypesFileGenerator): string[] {

    const output: string[] = [];
// 添加常量
    output.push(gen.enum('ChatType', '', ['private', 'group', 'supergroup', 'channel']))
    output.push(gen.enum('ChatAction', '', ['typing', 'upload_photo', 'record_video', 'upload_video', 'record_voice', 'upload_voice', 'upload_document', 'find_location', 'record_video_note', 'upload_video_note']))
    output.push(gen.enum('MessageEntityType', '', ['mention', 'hashtag', 'cashtag', 'bot_command', 'url', 'email', 'phone_number', 'bold', 'italic', 'underline', 'strikethrough', 'code', 'pre', 'text_link', 'text_mention', 'spoiler', 'custom_emoji']))
    output.push(gen.enum('ParseMode', '', ['Markdown', 'MarkdownV2', 'HTML']))

// 添加类型
    output.push(...types.map(type => gen.type(uppercaseFirstChar(type.name), `${type.description}  ${anchorLink(type.name)}`, type.fields)))

// 添加联合类型
    output.push(...unions.map(union => gen.union(uppercaseFirstChar(union.name), `${union.description}  ${anchorLink(union.name)}`, union.types, UNION_OR)))

// 添加通用请求和返回类型
    output.push(gen.type('ResponseSuccess<T>', '', [
        {name: 'ok', type: 'true', raw_type: 'true', optional: false, description: ''},
        {name: 'result', type: 'T', raw_type: 'T', optional: false, description: ''},
    ], 'T'))

    output.push(gen.type('ResponseError', '', [
        {name: 'ok', type: 'false', raw_type: 'false', optional: false, description: ''},
        {name: 'error_code', type: 'number', raw_type: 'number', optional: false, description: ''},
        {name: 'description', type: 'string', raw_type: 'string', optional: false, description: ''},
    ]))

    output.push(gen.union('SuccessWithOutData', '', ['true'], UNION_OR))
    output.push(gen.union('ResponseWithOutData', '', ['ResponseSuccess<SuccessWithOutData>'], UNION_OR))
    output.push(gen.union('ResponseWithMessage', '', ['ResponseSuccess<Message>'], UNION_OR))


// 添加方法
    methods.forEach(method => {
        let returns = ''

        if (method.returns === 'true') {
            returns = 'ResponseWithOutData';
        } else if (method.returns === 'Message') {
            returns = 'ResponseWithMessage';
        } else {
            returns = `ResponseSuccess<${method.returns}>`;
        }

        if (method.parameters.length > 0) {
            output.push(gen.type(`${uppercaseFirstChar(method.name)}Params`, anchorLink(method.name), method.parameters))
        }

        output.push(gen.union(`${uppercaseFirstChar(method.name)}Response`, '', [returns], UNION_OR))
        output.push(gen.method(uppercaseFirstChar(method.name), method.description, method.parameters, returns, isGenericEnable ? 'R' : undefined))
    })


// 添加 API 类型
    output.push(gen.enum('BotMethod', '', methods.map(method => method.name)))
    output.push(gen.union(`AllBotMethods${requestSuffix}`, '', methods.map(method => `${uppercaseFirstChar(method.name)}Request${requestSuffix}`), UNION_AND))

    return output;
}

const dts = new DtsGenerator(typeMapping, requestSuffix, responseType);
const json = new JsDocGenerator(typeMapping, requestSuffix, responseType);
fs.writeFileSync('index.d.ts', runGen(dts).map(r => r.trim()).join('\n\n\n'));
fs.writeFileSync('index.js', runGen(json).map(r => r.trim()).join('\n\n\n'));