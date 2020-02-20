import Request from '@rx/config/api-config'

/** ******************  获取人工二段审计  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: {  }
 * 描述: 获取人工二段审计
 */
export function getOrderPersonAuditInfo (params) {
    return Request.http.post('/api/Personnel/getOrderPersonAuditInfo', params, 25, {dataType: 'json'})
}
/** ******************  获取人工审计阶段项目分析三段  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: {  }
 * 描述: 获取人工审计阶段项目分析三段
 */
export function getWorkTypeSelectedAll (params) {
    return Request.http.post('/api/Personnel/getWorkTypeSelectedAll', params, 25, {dataType: 'json'})
}
/** ******************  获取人工在施阶段工时相关内容  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: {  }
 * 描述: 获取人工在施阶段工时相关内容
 */
export function getWorkTypeAll (params) {
    return Request.http.get('/worker/workerBusiness/getOrderWorkerTypeList', params, 26)
}
/** ******************  根据工种ID获取对应工种得施工准则  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: {  }
 * 描述: 根据工种ID获取对应工种得施工准则
 */
export function getWorkerTypeStandardByWorkerTypeId (params) {
    return Request.http.post('/api/Personnel/getWorkerTypeStandardByWorkerTypeId', params, 25, {dataType: 'json'})
}
/** ******************  根据工种ID获取对应工种得施工准则  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: {  }
 * 描述: 根据工种ID获取对应工种得施工准则
 */
export function getProjectOrderByCondition (params) {
    return Request.http.post('/api/senceProtection/getProjectOrderByCondition', params, 25, {dataType: 'json'})
}

