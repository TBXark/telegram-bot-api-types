# @types/telegram-bot-api

A 0KB Telegram Bot API SDK that only includes type definition files. It can be used to conveniently develop Telegram Bots in TypeScript.

This is a `d.ts` file for Telegram Bot API. It is based on the official [Telegram Bot API](https://core.telegram.org/bots/api) documentation. 

![](./preview.jpg)


### Installation

```sh
npm i telegram-bot-api-types
```

### Example

You can use any HTTP request library you want to encapsulate your API client. Here is a simple example:

```typescript

import type {  GetFileRequest, GetMeRequest, SendPhotoRequest, BotMethod, AllBotMethods } from ".";

class APIClientBase {
    readonly token: string;
    readonly baseURL: string = `https://api.telegram.org/`;
    constructor(token: string, baseURL?: string) {
        this.token = token;
        if (baseURL) {
            this.baseURL = baseURL;
        }
    }

    private jsonRequest<T>(method: BotMethod, params: T): Promise<Response> {
        return fetch(`${this.baseURL}bot${this.token}/${method}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
    }

    private formDataRequest<T>(method: BotMethod, params: T): Promise<Response> {
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
        return fetch(`${this.baseURL}bot${this.token}/${method}`, {
            method: 'POST',
            body: formData,
        });
    }

    request<T>(method: BotMethod, params: T): Promise<Response> {
        for (const key in params) {
            if (params[key] instanceof File || params[key] instanceof Blob) {
                return this.formDataRequest(method, params);
            }
        }
        return this.jsonRequest(method, params);
    }

    
}


// type APIClient = APIClientBase &  GetFileRequest & SendPhotoRequest & GetMeRequest; // You can use this type if you want to implement the methods one by one.
type APIClient = APIClientBase &  AllBotMethods // Or you can use this type to include all methods at once.

export function createAPIClient(token: string): APIClient {
    const client = new APIClientBase(token);
    return new Proxy(client, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            }
            return (...args: any[]) => {
                return Reflect.apply(target.request, target, [prop as BotMethod, ...args]);
            };
        }
    }) as APIClient; 
}


const client = createAPIClient('YOUR_BOT_TOKEN');
client.getMe().then(res => res.json()).then(console.log).catch(console.error);

```

You don't need to implement the methods one by one, you can use the `Proxy` object to create a client that automatically calls the methods.


## Known Issues

- Missing return type for methods, Maybe in the future, I will add return types for methods by parsing the official documentation with a ChatGPT.


## License

**@types/telegram-bot-api** is released under the MIT license. [See LICENSE](LICENSE) for details.