import Request from '@rx/config/api-config'

/** ******************  人工订单  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数:
 * 描述: 根据项目单号获取项目人工工种订单信息
 */
export function getOrderWorkerType (params) {
    return Request.http.post('/worker/workerBusiness/getOrderWorkerType', params, 26)
}

/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数:
 * 描述: 获取工人详细信息
 */
export function getWorkersInfo (params) {
    return Request.http.post('/api/workers/getWorkersInfo', params, 30)
}
