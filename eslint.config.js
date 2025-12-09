import js from '@eslint/js';
import globals from 'globals';   // npm i -D globals (9.x 已内置，可省)

export default [
  js.configs.recommended,
  {
    files: ['lib/**/*.js', 'bin/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node,   // 一次性注入所有 Node 全局：console, process, Buffer...
    },
    rules: {
      'no-console': 'off',
    },
  },
];