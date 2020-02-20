'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    NODE_TYPE: process.env.NODE_TYPE === undefined ? undefined : `'${process.env.NODE_TYPE}'`
    // NODE_TEST: '"development"',
})
