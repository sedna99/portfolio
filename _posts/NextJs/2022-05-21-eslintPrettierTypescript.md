---
title: setting eslint and prettier with typescript
author: sedna99
date: 2022-05-21
category: NextJs
layout: post
---

Environments and Used Application  
-Node.js v16.15 LTS  
-Next.js v12.1.6  
-Typescript  

1. install eslint on Dev dependency  
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

2. install prettier  
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks

3. setting .eslintrc  
```
{  
    "parser": "@typescript-eslint/parser",  
    "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],  
    "plugins": ["@typescript-eslint", "prettier"],  
    "ignorePatterns": ["node_modules/"],  
    "env": {  
        "browser": true,  
        "node": true,  
        "jest": true  
    },  
    "rules": { "@typescript-eslint/explicit-module-boundary-types": "off" }  
}
```
- parser: eslint uses espree parser by default for parsing. 
+ put @typescript-eslint/parser used to parse Typescript  
- extends: for extension setting.  
+ Setting method of eslint-config-prettier has been integrated into one since version 8.0.0.  
- plugins: using plugins.  
+ In this example we use @typescript-eslint plugin and prettier plugin  
- ignorePatters: except file or directory  
+ usually except node_modules directory.  
- env: project environment  
+ we use node and jest  
- rules: you can set detailed rules for extends and plugins. see [official docs][EslintRulesOfficial]  
+ 0 or "off": ignore  
+ 1 or "warn": warning  
+ 2 or "error": error  

4. setting .prettierrc  
you can set detailed rules for prettier option. see [officail docs][PrettierOptionsOfficial]
ex)  
```
.prettierrc  
{  
	"singleQuote": true,  
	"semi": true,  
	"useTabs": false,  
	"tabWidth": 4,  
	"trailingComma": "all",  
	"printWidth": 200,  
	"endOfLine": "auto",   
    "arrowParens": "avoid"  
}  
```

5. yarn lint  

6. clear your lint & prettier errors  
tip: In windows CLRF & LF will be changed  
     Files that have already been created must be modified each.  
      

[EslintRulesOfficial]: https://eslint.org/docs/rules/
[PrettierOptionsOfficial]: https://prettier.io/docs/en/options.html