import fs from 'node:fs';
import {execSync} from "node:child_process";

const packageRaw = fs.readFileSync('package.json', 'utf8');

try {
    const jsdocJson = {
        ...JSON.parse(packageRaw),
        name: "telegram-bot-api-jsdoc",
        files: ["index.js"],
        main: "index.js",
        module: "index.js",
        exports: undefined,
        types: undefined,
        scripts: undefined,
        devDependencies: {}
    }
    fs.copyFileSync('LICENSE', 'dist/jsdoc/LICENSE');
    fs.copyFileSync('README.md', 'dist/jsdoc/README.md');
    fs.writeFileSync('dist/jsdoc/package.json', JSON.stringify(jsdocJson, null, 2));
    execSync('cd dist/jsdoc && npm pack', {stdio: 'inherit'});
} catch (e) {
    console.error(e);
}

try {
    const dtsJSON = {
        ...JSON.parse(packageRaw),
        name: "telegram-bot-api-types",
        files: ["index.d.ts"],
        types: "index.d.ts",
        exports: undefined,
        main: undefined,
        module: undefined,
        scripts: undefined,
        devDependencies: {}
    }
    fs.copyFileSync('LICENSE', 'dist/dts/LICENSE');
    fs.copyFileSync('README.md', 'dist/dts/README.md');
    fs.writeFileSync('dist/dts/package.json', JSON.stringify(dtsJSON, null, 2));
    execSync('cd dist/dts && npm pack', {stdio: 'inherit'});

} catch (e) {
    console.error(e)
}

