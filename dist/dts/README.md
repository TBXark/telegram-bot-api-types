# telegram-bot-api-types

Telegram Bot API SDK compiled size is 0KB that only includes type definition files and JSDoc files. It can be used to conveniently develop Telegram Bots in TypeScript and JavaScript. You can wrap your API client with as many web request libraries as you want.

This is a `d.ts`  file for Telegram Bot API. It is based on the official [Telegram Bot API](https://core.telegram.org/bots/api) documentation. 


![](https://github.com/TBXark/telegram-bot-api-types/raw/master/preview.jpg)


### Installation

```sh
npm i telegram-bot-api-types --save-dev # d.ts for TypeScript
```

### Example

You can use any HTTP request library you want to encapsulate your API client. Here is a simple echo bot.

```typescript
import type * as Telegram from "telegram-bot-api-types"; // Import the types with namespace
import * as fs from 'node:fs';

class APIClientBase {
    // Implement your request method
    // you can use any http request library you want
    // You can go to `test` to see an example of the implementation
}

type APIClient = APIClientBase & Telegram.AllBotMethods;

// Use Proxy to automatically call the methods
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
    const { token } = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    const client = createAPIClient(token);
    const { result: user } = await client.getMeWithReturns()
    console.log(`Hello! My name is ${user.username}`);
    await client.deleteWebhook({});
    while (true) {
        const { result: updates } = await client.getUpdatesWithReturns({ offset: 0 });
        for (const update of updates) {
            if (update.message) {
                await client.sendMessageWithReturns({ chat_id: update.message.chat.id, text: update.message.text });
            }
        }
    }
}

main().catch(console.error);

```

You don't need to implement the methods one by one, you can use the `Proxy` object to create a client that automatically calls the methods. You can find the implementation of the `APIClientBase` class in the [`test`](../../test/dts.test.ts) folder.

## License

**telegram-bot-api-types** is released under the MIT license. [See LICENSE](LICENSE) for details.