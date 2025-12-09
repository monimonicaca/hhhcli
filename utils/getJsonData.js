import fs from 'fs-extra'
const { readJSON } = fs

import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localeRoot = path.resolve(__dirname, '../locales')

function linkLocale(locale) {
    let linkLocale;
    switch (locale) {
        case "zh-TW":
        case "zh-HK":
        case "zh-MO":
            linkLocale = "zh"
            break;
        default:
            linkLocale = "zh"
    }
    return linkLocale
}
function getLocale() {
    //Intl是NodeJs内置的一个包，用于国际化的，通过这个可以获取当前的默认语言区域设置
    const deviceLocale = Intl.DateTimeFormat().resolvedOptions().locale
    //process 是 Node.js 环境中的一个核心全局对象,它提供了当前 Node.js 进程的信息和控制能力
    const locale =
        process.env.LC_ALL || // POSIX locale environment variables
        process.env.LC_MESSAGES ||
        process.env.LANG ||
        deviceLocale || // Built-in ECMA-402 support
        'en-US' // Default fallback
    return linkLocale(locale.split('.')[0].replace('_', '-'))
}

async function getLanguageJson(jsonPath) {
    const data = await readJSON(jsonPath)
    return data
}
 async function getLanguage(localeRoot) {
    console.log('getLanguange-------------------------------------------------------------------------------------------------------------\n')
    const locale = getLocale()
    const filePath = path.resolve(localeRoot, `${locale}.json`)
    const data=await getLanguageJson(filePath)
    console.log(data)
    console.log('getLanguange-------------------------------------------------------------------------------------------------------------\n')
    return data
}

export const jsonData = await getLanguage(localeRoot)