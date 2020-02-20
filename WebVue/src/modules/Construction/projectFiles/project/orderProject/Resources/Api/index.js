import Request from '@rx/config/api-config'

/** ******************  一段项目列表  ********************/
/**
 * 创建: YK
 * 时间: 2019年9月16日 18:33:33
 * 参数: { keyWord, stage, userRole, userNo }
 * 描述: 根据角色获取订单
 */
export function getProjectOrderByStage (params) {
    return Request.http.post('/api/projectOrder/getProjectOrderByStage', params, 23, {dataType: 'json'})
}
/** ******************  二段订单详情  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { ProjectCode }
 * 描述: 获取订单详情
 */
export function getSenceProjectOrderDetailByOrderCode (params) {
    return Request.http.get('/api/senceProtection/getSenceProjectOrderDetailByOrderCode', params, 23)
}
/** ******************  三段物业办理(资料植入 审计确认)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { orderChildTypeId：1, projectOrderCode：订单号 }
 * 描述: 获取订单详情
 */
export function findOrderChildTypeDetail (params) {
    return Request.http.get('/api/OrderType/findOrderChildTypeDetail', params, 23)
}
/** ******************  三段物业办理(资料打印)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { code：订单号 }
 * 描述: 获取订单详情
 */
export function getFindDetailData (params) {
    return Request.http.get('/api/OrderType/findDetailData', params, 23)
}
