# 配置说明
## package.json 配置说明 (位置根目录)
[路径跳转](../package.json)

> 启动时的配置

- "dev:ins": "cross-env NODE_TYPE=ins webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --open",

- "build:ins": "cross-env NODE_TYPE=ins node build/build.js && npm run test:ins",

- "build:dev:ins": "cross-env NODE_TYPE=ins cross-env NODE_TEST=development node build/build.js",

- "test:ins": "cross-env NODE_TYPE=ins node ./npm-script/server-test.js",

```sh
    说明: dev: 名字  // 启动项目的命令 名字是自己定义的

    说明: build: 名字  // 打包项目的命令 名字是自己定义的

    说明: build:dev: 名字  // 打包生产环境下项目的命令 名字是自己定义的  (具体什么什么用善不清楚)

    说明: test: 名字  // 名字是自己定义的  (具体什么什么用善不清楚)

```
```sh
   说明: 新建项目的时候 要复制这四个 名字自己定义
```
# config中index.rx.js 配置说明
[路径跳转](../config/index.rx.js)

```sh
   
    var manyMain = {
        default: './src/main.js',
        many: './src/element-rx/components/main.js',
        ins: './src/modules/Inspection/main.js', // 项目总检
        cst: './src/modules/Construction/main.js' // 瑞祥施工
    }

     cst: './src/modules/Construction/main.js' // 瑞祥施工
     这里的 cst  要和 package.json 中启动命令的名字一样
    './src/modules/Construction/main.js' 路径名称 这里的路径执行每一个项目单独的main.js

```
```sh

   var rootMain = {
        // default: '/default/'
        // many: '/many/'
        ins: '/VueProject/ProCommand/',
        cst: '/VueConProject/Construction/'
    }
     这里的配置和服务器上的地址保持一致
```

# 项目目录说明

>moudle 新建的项目要新建文件夹放在改目录下

```sh
    如有新建项目请按照以下格式写下来 方便之后查看
```
- Construction      瑞祥施工
- Inspection        项目总检
- MaterPersonnel    项目人事

