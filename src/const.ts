import * as path from 'path';
import { fileURLToPath } from 'url';

// @ts-ignore
const __dirname = import.meta.dirname || path.dirname(fileURLToPath(import.meta.url));

export const HTML_PATH = path.resolve(__dirname, '../dist/html/index.html')

export const DTS_PATH = path.resolve(__dirname, '../dist/dts/index.d.ts');

export const JSDOC_PATH = path.resolve(__dirname, '../dist/jsdoc/index.js');

export const METHODS_JSON_PATH = path.resolve(__dirname, '../dist/json/methods.json');

export const TYPES_JSON_PATH = path.resolve(__dirname, '../dist/json/types.json');

export const UNIONS_JSON_PATH = path.resolve(__dirname, '../dist/json/unions.json');