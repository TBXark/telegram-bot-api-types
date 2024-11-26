# telegram-bot-api-types

This is a project of a type definition file for the Telegram Bot API that generates multilingual automatically.

![](https://github.com/TBXark/telegram-bot-api-types/raw/master/preview.jpg)

### Supported Languages

- [x] [TypeScript](./dist/dts)
- [x] [JavaScript](./dist/jsdoc)
- [x] [Json](./dist/spec)
- [x] [Swift](./dist/swift)


### Installation

```sh
go install github.com/TBXark/telegram-bot-api-types@latest
```

### Usage 

You can directly use the precompiled version we provide, or generate your own language version.

```
telegram-bot-api-types --help
  -dist string
        The output directory (default "./dist")
  -help
        Show help
  -lang string
        The output language (default "typescript,jsdoc,spec,swift")
```

## Thanks

I refactored this project based on the [PaulSonOfLars/telegram-bot-api-spec](https://github.com/PaulSonOfLars/telegram-bot-api-spec) project, thanks to his work.

## License

**telegram-bot-api-types** is released under the MIT license. [See LICENSE](LICENSE) for details.