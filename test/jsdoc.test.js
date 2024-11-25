import 'telegram-bot-api-jsdoc'
import {HttpsProxyAgent} from 'https-proxy-agent';
import fetch from 'node-fetch';
import * as fs from 'node:fs';
import * as process from 'node:process';


const {token} = JSON.parse(fs.readFileSync('test/config.json', 'utf8'));
const agent = new HttpsProxyAgent(process.env.HTTPS_PROXY || process.env.https_proxy || '');

class APIClientBase {
    constructor(token, baseURL) {
        this.token = token;
        this.baseURL = baseURL || `https://api.telegram.org`;
        while (this.baseURL.endsWith('/')) {
            this.baseURL = this.baseURL.slice(0, -1);
        }
    }

    request(method, params) {
        for (const key in params) {
            if (params[key] instanceof File || params[key] instanceof Blob) {
                return this.formDataRequest(method, params);
            }
        }
        return this.jsonRequest(method, params);
    }

    async requestJSON(method, params) {
        return this.request(method, params).then(res => res.json());
    }

    uri(method) {
        return `${this.baseURL}/bot${this.token}/${method}`
    }

    jsonRequest(method, params) {
        return fetch(this.uri(method), {
            agent,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
    }

    formDataRequest(method, params) {
        const formData = new FormData();
        for (const key in params) {
            const value = params[key];
            if (value instanceof File) {
                formData.append(key, value, value.name);
            } else if (value instanceof Blob) {
                formData.append(key, value, 'blob');
            } else if (typeof value === 'string') {
                formData.append(key, value);
            } else {
                formData.append(key, JSON.stringify(value));
            }
        }
        return fetch(this.uri(method), {
            method: 'POST',
            body: formData
        });
    }
}

/**
 * @param token
 * @returns {APIClientBase & AllBotMethods}
 */
export function createAPIClient(token) {
    const client = new APIClientBase(token);
    return new Proxy(client, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            }
            return (...args) => {
                if (typeof prop === 'string' && prop.endsWith('WithReturns')) {
                    const method = prop.slice(0, -11);
                    return Reflect.apply(target.requestJSON, target, [method, ...args]);
                }
                return Reflect.apply(target.request, target, [prop, ...args]);
            };
        }
    });
}

async function main() {
    const client = createAPIClient(token);
    const {result: user} = await client.getMeWithReturns()
    console.log(`Hello! My name is ${user.username}`);
    await client.deleteWebhook();
    let offset = 0
    while (true) {
        const {result: updates} = await client.getUpdatesWithReturns({offset: offset});
        for (const update of updates) {
            offset = update.update_id + 1;
            if (update.message?.text) {
                await client.sendMessageWithReturns({chat_id: update.message.chat.id, text: update.message.text});
            }
        }
    }
}

main().catch(console.error);