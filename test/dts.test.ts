import type * as Telegram from "telegram-bot-api-types";
import { ProxyAgent, setGlobalDispatcher } from 'undici';
import * as process from 'node:process';

const {
    HTTPS_PROXY,
    TELEGRAM_BOT_TOKEN,
} = process.env;

if (HTTPS_PROXY) {
    setGlobalDispatcher(new ProxyAgent(HTTPS_PROXY));
}

class APIClientBase {
    readonly token: string;
    readonly baseURL: string = `https://api.telegram.org`;

    constructor(token: string, baseURL?: string) {
        this.token = token;
        if (baseURL) {
            this.baseURL = baseURL;
        }
        while (this.baseURL.endsWith('/')) {
            this.baseURL = this.baseURL.slice(0, -1);
        }
    }

    request<T>(method: Telegram.BotMethod, params: T): Promise<Response> {
        for (const key in params) {
            if (params[key] instanceof File || params[key] instanceof Blob) {
                return this.formDataRequest(method, params);
            }
        }
        return this.jsonRequest(method, params);
    }

    async requestJSON<T, R>(method: Telegram.BotMethod, params: T): Promise<R> {
        return this.request(method, params).then(res => res.json() as R)
    }

    private uri(method: Telegram.BotMethod): string {
        return `${this.baseURL}/bot${this.token}/${method}`
    }

    private jsonRequest<T>(method: Telegram.BotMethod, params: T): Promise<Response> {
        return fetch(this.uri(method), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
    }

    private formDataRequest<T>(method: Telegram.BotMethod, params: T): Promise<Response> {
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
            body: formData,
        });
    }
}


type APIClient = APIClientBase & Telegram.AllBotMethods;

export function createAPIClient(token: string): APIClient {
    const client = new APIClientBase(token);
    return new Proxy(client, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            }
            return (...args: any[]) => {
                if (typeof prop === 'string' && prop.endsWith('WithReturns')) {
                    const method = prop.slice(0, -11) as Telegram.BotMethod;
                    return Reflect.apply(target.requestJSON, target, [method, ...args]);
                }
                return Reflect.apply(target.request, target, [prop as Telegram.BotMethod, ...args]);
            };
        }
    }) as APIClient;
}

async function main() {
    if (!TELEGRAM_BOT_TOKEN) {
        throw new Error('TELEGRAM_BOT_TOKEN is not set');
    }    
    const client = createAPIClient(TELEGRAM_BOT_TOKEN);
    const {result: user} = await client.getMeWithReturns();
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