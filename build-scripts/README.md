As the Shopolet team said
> This directory, it's contents and the following instructions are only for developers who need to edit the codebase. For installing the pre-built application follow the guidelines in [shopolet.github.io](https://shopolet.github.io)

## NPM Global Dependencies  
With Node and NPM installed, the following global dependencies must be installed before executing build scripts.

* [gulp](https://www.npmjs.com/package/gulp)
```
npm install -g gulp
```

* [gulp-cli](https://www.npmjs.com/package/gulp-cli)
```
npm install -g gulp-cli
```

* [typings](https://www.npmjs.com/package/typings)
```
npm install -g typings@2.1.0
```

* [typescript](https://www.npmjs.com/package/typescript)
```
npm install -g typescript@2.2.1
```

* [ts-node](https://www.npmjs.com/package/ts-node)
```
npm install -g ts-node@2.1.0
```

## Pre Requisites
Install the type definitions for core-js and node to be used in gulpfile.ts
```
typings install dt~core-js --global --save
typings install dt~node --global --save
```
