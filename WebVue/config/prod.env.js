'use strict'
module.exports = {
    NODE_ENV:  process.env.NODE_TEST == "development" ? '"development"' : '"production"',
    NODE_TEST: process.env.NODE_TEST == "development" ? '"development"' : '"production"',
    NODE_TYPE: process.env.NODE_TYPE === undefined ? undefined : `'${process.env.NODE_TYPE}'`
}
