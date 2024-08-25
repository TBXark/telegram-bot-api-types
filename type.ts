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
