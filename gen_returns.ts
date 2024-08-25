import type { TelegramTypes, TelegramMethod, TelegramUnions } from './type';
import * as fs from 'node:fs';


const types: TelegramTypes[] = JSON.parse(fs.readFileSync('types.json', 'utf8'));
const methods: TelegramMethod[] = JSON.parse(fs.readFileSync('methods.json', 'utf8'));
const unions: TelegramUnions[] = JSON.parse(fs.readFileSync('unions.json', 'utf8'));

methods.forEach(method => {
    method.returns = ''; // Reset returns
    switch (method.name) {
        case 'getMe':
            method.returns = 'User';
            break;
        case 'copyMessage':
            method.returns = 'number';
            break;
        case 'getChatMemberCount':
            method.returns = 'number';
            break;
        case 'createForumTopic':
            method.returns = 'ForumTopic';
            break;
        case 'stopPoll':
            method.returns = 'Poll';
            break;
        case 'uploadStickerFile':
            method.returns = 'File';
            break;
    }
});

const allTypes = new Set(types.map(type => type.name.toLowerCase()).concat(unions.map(union => union.name.toLowerCase())));

for (const method of methods) {

    if (method.returns) {
        continue;
    }

    if (method.description.includes('Returns True on success') || method.description.includes('True is returned')) {
        method.returns = 'true';
        continue;
    }

    if (method.description.includes('the sent Message is returned')) {
        method.returns = 'Message';
        continue;
    }

    if (method.description.includes('an array of Messages that were sent is returned')) {
        method.returns = 'Array<Message>';
        continue;
    }

    if (method.description.includes('an array of MessageId of the sent messages is returned')) {
        method.returns = 'Array<number>';
        continue;
    }

    const matchLink = method.description.match(/Returns the .* link as (a )?(\w+) object/i);
    if (matchLink) {
        const typeName = matchLink[2];
        if (allTypes.has(typeName.toLowerCase())) {
            method.returns = typeName;
            console.log(`${method.returns}: ${method.description}\n`);
            continue;
        }
    }

    const matchLink2 = method.description.match(/Returns the .* link as String on success/i);
    if (matchLink2) {
        method.returns = 'string';
        continue;
    }


    // Returns an Array of XXX objects
    const matchArray = method.description.match(/Returns an? Array of (\w+) objects/i);
    if (matchArray) {
        const typeName = matchArray[1];
        if (allTypes.has(typeName.toLowerCase())) {
            method.returns = `Array<${typeName}>`;
            console.log(`${method.returns}: ${method.description}\n`);
            continue;
        }
    }

    // Returns a XXX object
    const matchObject = method.description.match(/Returns a (\w+) object/i);
    if (matchObject) {
        const typeName = matchObject[1];
        if (allTypes.has(typeName.toLowerCase())) {
            method.returns = typeName;
            console.log(`${method.returns}: ${method.description}\n`);
            continue;
        }
    }

    // a XXX object is returned
    const matchObject2 = method.description.match(/a (\w+) object is returned/i);
    if (matchObject2) {
        const typeName = matchObject2[1];
        if (allTypes.has(typeName.toLowerCase())) {
            method.returns = typeName;
            console.log(`${method.returns}: ${method.description}\n`);
            continue;
        }
    }

    // Returns XXX on success
    const matchObject3 = method.description.match(/Returns (\w+) on success/i);
    if (matchObject3) {
        const typeName = matchObject3[1];
        if (allTypes.has(typeName.toLowerCase())) {
            method.returns = typeName;
            console.log(`${method.returns}: ${method.description}\n`);
            continue;
        }
    }

    console.error(`${method.name}\n${method.description}\n\n`);
}


fs.writeFileSync('methods.json', JSON.stringify(methods, null, 4));