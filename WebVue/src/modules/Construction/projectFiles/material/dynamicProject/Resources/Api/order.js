import Request from '@rx/config/api-config'

/** ******************  材料订单  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数:
 * 描述: 根据项目单号获取项目材料订单信息
 */
export function GetOrderItemsByRwdIDAndState (params) {
    return Request.http.get('/api/VTwoAPPPM/GetOrderItemsByRwdIDAndState', params, 17)
}
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数:
 * 描述: 根据项目单号获取项目材料订单详情（新）
 */
export function GetOrderFlowInfoToSecond (params) {
    return Request.http.get('/MAT/api/VTwoOrder/GetOrderFlowInfoToSecond', params, 22)
}
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数:
 * 描述: 根据项目单号获取项目材料订单详情（旧）
 */
export function GetOrderOldFlowInfoToSecond (params) {
    return Request.http.get('/MAT/api/VTwoOrder/GetOrderOldFlowInfoToSecond', params, 22)
}

