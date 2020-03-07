import Request from '@rx/config/api-config'

/** ******************  查询一段列表  ********************/
/**
 * 创建: hwx
 * 时间: 2020-01-19
 * 参数: {
            "afterMarketState":1,      【条件查询阶段  1:审计,2:准备,3:在施,4:竣工,5:完工,6:历史,7:坏账,8:退单   如果没有选择默认传0】
            "keyWord":"" 【搜索条件  例如：通过单号查询   "keyWord":"11-241545"】
        }
 * 描述: 查询一段列表
 */
export function getWorkorderList (params) {
    return Request.http.post('/pro/getWorkorderList', params, 102, {dataType: 'json'})
}

/** ******************  查询材料二段店铺数据  ********************/
/**
 * 创建: hwx
 * 时间: 2020-01-20
 * 参数: rwdID 项目单号
 * 描述: 查询材料二段店铺数据
 */
export function GetShopItemsToFinanceByRwdID (params) {
    return Request.http.get('/MAT/api/ProInfoMaterialVTwo/GetShopItemsToFinanceByRwdID', params, 22)
}
/** ******************  查询材料三段数据【审计阶段】  ********************/
/**
 * 创建: scq
 * 时间: 2020-02-22
 * 参数: rwdID=12-542212项目单号  &  shopId=9a696791-a588-45dc-b498-01913dd86d05店铺id
 * 描述: 查询材料二段店铺数据
 */
export function GetProductDetailItemsToFinanceByShopID (params) {
    return Request.http.get('/MAT/api/ProInfoMaterialVTwo/GetProductDetailItemsToFinanceByShopID', params, 22)
}

/** ******************  查询人工二段数据  ********************/
/**
 * 创建: hwx
 * 时间: 2020-01-20
 * 参数: orderNo 项目单号
 * 描述: 查询人工二段数据
 */
export function getOrderWorkTypeWagesList (params) {
    return Request.http.get('/worker/workerFinance/getOrderWorkTypeWagesList', params, 26)
}
/** ******************  查询人工二段数据  ********************/
/**
 * 创建: hwx
 * 时间: 2020-01-20
 * 参数: rwdID 项目单号
 * 描述: 查询人工二段数据
 */
export function GetProInfoMoneyStatisticsToFinanceByRwdID (params) {
    return Request.http.get('/MAT/api/ProInfoMaterialVTwo/GetProInfoMoneyStatisticsToFinanceByRwdID', params, 22)
}
/** ******************  查询人工三段数据  ********************/
/**
 * 创建: scq
 * 时间: 2020-01-222
 * 参数:  orderNo=78-2439&workTypeId=4
 * 描述: 查询人工三段段数据
 */
export function getWorkerQCOrderByCondition (params) {
    return Request.http.get('/project/projectWorkerOrder/getWorkerQCOrderByCondition', params, 26)
}
/** ******************  查询回款二段段数据  ********************/
/**
 * 创建: scq
 * 时间: 2020-01-26
 * 参数: orderNo=11-199175
 * 描述: 查询回款二段数据
 */
export function getReceiveMoney (params) {
    return Request.http.get('/pro/getReceiveMoney', params, 102)
}
/** ******************  保存回款数据  ********************/
/**
 * 创建: scq
 * 时间: 2020-01-26
 * 描述: 保存回款数据
 */
export function savePaymentDetails (params) {
    return Request.http.post('/pro/savePaymentDetails', params, 26, {dataType: 'json'})
}

/** ******************  保存回款数据  ********************/
/**
 * 创建: hwx
 * 时间: 2020-02-28
 * 参数: orderNo 项目单号
 * 描述: 保存回款数据
 */
export function getDebitSecond (params) {
    return Request.http.get('/pro/getDebitSecond', params, 102)
}
/** ******************  查询支款记录  ********************/
/**
 * 创建: hwx
 * 时间: 2020-02-28
 * 参数: orderNo 项目单号  type 支款类型 合计 0 材料 107 人工 108
 * 描述: 查询支款记录
 */
export function getPaymentRecord (params) {
    return Request.http.get('/pro/getPaymentRecord', params, 102)
}
/** ******************  查询成本二段接口  ********************/
/**
 * 创建: hwx
 * 时间: 2020-02-28
 * 参数: orderNo 项目单号
 * 描述: 查询成本二段接口
 */
export function getCostSharingSecond (params) {
    return Request.http.get('/pro/getCostSharingSecond', params, 102)
}
/** ******************  查询成本三段段接口  ********************/
/**
 * 创建: hwx
 * 时间: 2020-02-28
 * 参数: orderNo 项目单号
 * 描述: 查询成本三段段接口
 */
export function getCostSharingThree (params) {
    return Request.http.get('/pro/getCostSharingThree', params, 102)
}
/** ******************  查询成本三段段接口  ********************/
/**
 * 创建: hwx
 * 时间: 2020-03-05
 * 参数: orderNo 项目单号
 * 描述: 查询成本三段段接口
 */
export function getNegotiateSecond (params) {
    return Request.http.get('/pro/getNegotiateSecond', params, 102)
}
