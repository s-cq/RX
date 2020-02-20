import Request from '@rx/config/api-config'

/** ******************  人工订单  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 11:03:13
 * 参数:
 * 描述: 根据项目单号获取项目人工工种订单信息
 */
export function getOrderWorkerType (params) {
    return Request.http.post('/worker/workerBusiness/getOrderWorkerType', params, 26)
}

/**
 * 创建: YK
 * 时间: 2019年10月11日 11:03:13
 * 参数:
 * 描述: 根据项目单号获取项目人工工种订单信息
 */
export function getWorkersInfo (params) {
    return Request.http.post('/api/workers/getWorkersInfo', params, 30)
}
