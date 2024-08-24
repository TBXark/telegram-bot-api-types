import * as fs from 'node:fs';
import {load} from 'cheerio';
import type { Cheerio } from 'cheerio';
import type { TelegramTypes, TelegramField, TelegramMethod } from './type';


if (!fs.existsSync('index.html')) {
    console.error('Please download the HTML file from https://core.telegram.org/bots/api and save it as index.html');
    process.exit(1);
}

const html = fs.readFileSync('index.html', 'utf8');
const $ = load(html);

const devPageContent = $('#dev_page_content');
const types: TelegramTypes[] = [];
const methods: TelegramMethod[] = [];



devPageContent.find('h4').each((i, el) => {
    const name = $(el).text().trim();
    if (name.indexOf(' ') >= 0) {
        return;
    }
    const description = $(el).next().text();
    let table: Cheerio<any> | null = $(el).next();
    while (!table.is('table')) {
       table = table.next();
       if (table.is('h4')) {
            table = null;
           break;
       }
    }
    if (name[0] === name[0].toLowerCase()) {
        const parameters: TelegramField[] = [];
        const returns = '';
        table?.find('tbody tr').each((i, tr) => {
            const td = $(tr).find('td');
            const name = td.eq(0).text();
            const type = td.eq(1).text();
            const optional = td.eq(2).text() === 'Optional';
            const description = td.eq(3).text();
            parameters.push({ name, type, optional, description });
        });
        methods.push({ name, description, parameters, returns });
    } else {
        const fields = table?.find('tbody tr').map((i, el) => {
            const $el = $(el);
            const name = $el.find('td').eq(0).text();
            const type = $el.find('td').eq(1).text();
            const description = $el.find('td').eq(2).text();
            const optional = description.includes('Optional');
            return { name, type, description, optional };
        }).get() || [];
        types.push({ name, description, fields });
    }
})


fs.writeFileSync('types.json', JSON.stringify(types, null, 2));
fs.writeFileSync('methods.json', JSON.stringify(methods, null, 2));
