export interface TelegramField {
    name: string;
    type: string;
    raw_type: string;
    optional: boolean;
    description: string;
}

export interface TelegramTypes {
    name: string;
    description: string;
    fields: TelegramField[];
}

export interface TelegramUnions {
    name: string;
    description: string;
    types: string[];
}

export interface TelegramMethod {
    name: string;
    description: string;
    parameters: TelegramField[];
    returns: string;
}

export interface TypesFileGenerator {
    type(name: string, description: string, fields: TelegramField[], template?: string): string

    union(name: string, description: string, types: string[], separator: string): string

    enum(name: string, description: string, values: string[]): string

    method(name: string, description: string, params: TelegramField[], returns: string, template?: string): string
}