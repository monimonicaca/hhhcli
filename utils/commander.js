import fs from 'fs-extra'
import { Command } from 'commander';
const { readJsonSync } = fs

import path from 'path'
import { fileURLToPath } from 'url';

import { jsonData as data } from './getJsonData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const version = readJsonSync(path.resolve(__dirname, '../package.json')).version
const program = new Command();
program.version(version, '-v,--version', 'output version')
    .name(data.name)
    .description(data.description)

export {program}