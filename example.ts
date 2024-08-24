import type {  GetFileRequest, GetMeRequest, SendPhotoRequest, BotMethod, SendPhotoParams } from ".";

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


type APIClient = APIClientBase &  GetFileRequest & SendPhotoRequest & GetMeRequest;

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

const photo: SendPhotoParams = {
    chat_id: 'YOUR_CHAT_ID',
    photo: new File(['photo'], 'photo.jpg'),
    caption: 'Hello, World!',
};
