# @types/telegram-bot-api

This is a `d.ts` file for Telegram Bot API. It is based on the official [Telegram Bot API](https://core.telegram.org/bots/api) documentation.


### Installation

```sh
npm i telegram-bot-api-types
```

### Example

```ts
import type { GetFileParams, GetFileRequest, SendPhotoParams, SendPhotoRequest, TelegramBotMethod } from ".";

class APIClient implements GetFileRequest, SendPhotoRequest {
    readonly token: string;
    readonly baseURL: string = `https://api.telegram.org/`;
    constructor(token: string, baseURL?: string) {
        this.token = token;
        if (baseURL) {
            this.baseURL = baseURL;
        }
    }

    jsonRequest<T>(method: TelegramBotMethod, params: T): Promise<Response> {
        return fetch(`${this.baseURL}bot${this.token}/${method}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
    }

    formDataRequest<T>(method: TelegramBotMethod, params: T): Promise<Response> {
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

    getFile(params: GetFileParams): Promise<Response> {
        return this.jsonRequest('getFile', params);
    }

    sendPhoto(params: SendPhotoParams): Promise<Response> {
        return this.formDataRequest('sendPhoto', params);
    }
}

const client = new APIClient('123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11');
client.getFile!({ file_id: '123' }).then(console.log);
```


## License

**@types/telegram-bot-api** is released under the MIT license. [See LICENSE](LICENSE) for details.