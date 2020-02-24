'use strict'
// Template version: 1.2.9
// This file is webpack-manager global configuration
// This file has more requirement changes

var path = require('path')

/**
 * @var mode 路由模式
 * @description 设置全局的路由使用模式  history / hash
 */
var mode = 'history'

/**
 * @var manyMain 多文件入口路径 和 环境变量的映射表
 * @description many对象配置将会影响那个文件作为主入口(main.js)，需与 NODE_TYPE 环境变量保持一致性
 */
var manyMain = {
    default: './src/main.js',
    many: './src/element-rx/components/main.js',
    ins: './src/modules/Inspection/main.js', // 项目总检
    cst: './src/modules/Construction/main.js', // 瑞祥施工
    mps: './src/modules/MaterPersonnel/main.js', // 材料人事
    inper: './src/modules/InternalPersonnel/main.js', // 内部人事
    finper: './src/modules/FinancialPersonnel/main.js' // 财务系统
}

/**
 * @var rootMain 此项目的根目录路径映射表
 * @description root对象配置 是项目启用 history 模式 并且项目不是发版在根目录时的配置。
 * 此配置将会与 NODE_TYPE 进行对比，如果匹配此路径将作为根目录
 */
var rootMain = {
    // default: '/default/'
    // many: '/many/'
    ins: '/VueProject/ProCommand/',
    cst: '/VueConProject/Construction/',
    mps: '/VueMatProject/MaterPersonnel/',
    inper: '/VueInterProject/InternalPersonnel/',
    finper: '/'

}

/**
 * @var types 根据唯一环境变量打包不同的项目
 * @description 获取环境变量的项目唯一区分标识
 */
var types = process.env.NODE_TYPE || 'default'

/**
 * @var env 项目的开发环境
 * @description 获取当前运行环境区分 development 测试   production 正式
 */
var env = process.env.NODE_TEST === 'development' ? 'development' : 'production'

/**
 * @var app 定义打包入口路径
 * @description app 根据 many 和 types 获取主入口文件路径
 */
var app = manyMain[types]

/**
 * @var base history 模式下 router 基础路径
 * @description base 根据 root 和 types 获取基础路径
 */
var base = rootMain[types] || '/'

/**
 * @var output 定义输出路径
 * @description 输出路径的基础是 ../dist,
 * @description 输出路径为 types(项目标识) + process.env.NODE_TEST (环境变量) + base (基础路径)
 */
var output = path.join(types, env, base)

/**
 * @var outputTest 定义测试服务路径输出路径
 * @description 输出路径的基础是 ../dist,
 * @description 输出路径为 types(项目标识) + process.env.NODE_TEST (环境变量)
 */
var outputTest = path.join(types, env)

/**
 * @var assetsPublicPath 资源公共目录
 * @description 打包时的资源目录 如果是 history 则是绝对路径 如果是 hash 模式则是相对路径
 */
var assetsPublicPath = mode === 'history' ? base : './'

module.exports = {
    app,
    mode,
    base,
    output,
    outputTest,
    assetsPublicPath
}