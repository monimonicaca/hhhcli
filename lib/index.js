#!/usr/bin/env node
import fs from 'fs-extra'
import { getLanguage } from '../utils/getLanguage.js'
import { Command } from 'commander';
const { readJsonSync } = fs
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localeRoot = path.resolve(__dirname, '../locales')
const data = await getLanguage(localeRoot)
const version = readJsonSync(path.resolve(__dirname, '../package.json')).version
console.log('---------------------------------------------------------------------------------------------------------------------------\n')
const program = new Command();
program.version(version, '-v,--version', 'output version')
    .name(data.name)
    .description(data.description)
    .parse()