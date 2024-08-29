import fs from 'node:fs';
import {execSync} from "node:child_process";

const packageRaw = fs.readFileSync('package.json', 'utf8');
fs.writeFileSync('package.json.backup', packageRaw);

try {
    const jsdocJson = {
        ...JSON.parse(packageRaw),
        name: "telegram-bot-api-jsdoc",
        files: ["index.js"],
        types: undefined,
        scripts: undefined,
        devDependencies: {}
    }
    fs.writeFileSync('package.json', JSON.stringify(jsdocJson, null, 2));
    execSync('npm publish', {stdio: 'inherit'});
} catch (e) {
    console.error(e);
}

try {
    const dtsJSON = {
        ...JSON.parse(packageRaw),
        name: "telegram-bot-api-types",
        files: ["index.d.ts"],
        main: undefined,
        module: undefined,
        scripts: undefined,
        devDependencies: {}
    }
    fs.writeFileSync('package.json', JSON.stringify(dtsJSON, null, 2));
    execSync('npm publish', {stdio: 'inherit'});
} catch (e) {
    console.error(e)
}

fs.renameSync('package.json.backup', 'package.json');