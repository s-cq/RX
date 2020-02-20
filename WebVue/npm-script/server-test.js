'use strict'
// Template version: 1.2.9
// This file is a test packaged file, only test formal

let history = require('connect-history-api-fallback')
let express = require('express')
let path = require('path')
let opn = require('opn')
let chalk = require('chalk')

let port = 5240
let configRx = require('../config/index.rx')

let app = express()

// https://www.npmjs.com/package/connect-history-api-fallback
app.use(history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    rewrites: [
        { to: `${configRx.base}index.html` }
    ]
}))

app.use(express.static(path.join(__dirname, '..', 'dist', configRx.outputTest)))

// 递归判断是否端口被占用
let server = function () {
    let _server = app.listen(port, () => {
        // https://www.npmjs.com/package/opn
        opn(`http://localhost:${port}${configRx.base}`)
        console.log(chalk.green(`Server listening on http://localhost:${port}, Ctrl+C to stop || 10 minutes later`))
    })
    _server.on('error', (e) => {
        if (!_server.listening) {
            port = port + 1
            server()
        }
    })
}
server()

// 10分钟后 退出监听
setTimeout(() => {
    console.log(chalk.green(`stop listening`))
    process.exit(0)
}, 600000)
