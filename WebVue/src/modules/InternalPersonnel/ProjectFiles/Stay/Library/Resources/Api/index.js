import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: 陈旭
 * 时间: 2019-10-18
 * 参数: levelType：级别类型
 * 描述: 查询留库基础级别信息
 */
export function GetAllGradeList (params) {
    return Request.http.post('/api/PersonLeaven/GetAllGradeList', params, 34, { dataType: 'json' })
}
/**
 * 创建: 陈旭
 * 时间: 2019-10-18
 * 参数: level：级别
 * 描述: 查询登记对应的分项设置信息
 */
export function GetUserLevelStandardByAbilityLevel (params) {
    return Request.http.post('/api/PersonLeaven/GetUserLevelStandardByAbilityLevel', params, 34, { dataType: 'json' })
}
/**
 * 创建: 陈旭
 * 时间: 2019-10-18
 * 参数:
 * 描述: 更新指定级别设置标准信息
 */
export function updateUserStandard (params) {
    return Request.http.post('/api/PersonLeaven/updateUserStandard', params, 34, { dataType: 'json' })
}


/**
 * 创建:ycq
 * 时间: 2019-10-18
 * 参数:
 * 描述: 更新工人金额
 */
export function updateWorkerMoney (params) {
    return Request.http.post('/api/PersonLeaven/updateWorkerMoney', params, 34, { dataType: 'json' })
}


/**
 * 创建:  ycq
 * 时间: 2019-10-18
 * 参数:
 * 描述: 得到工人金额
 */
export function getWorkerMoney (params) {
    return Request.http.post('/api/PersonLeaven/getWorkerMoney', params, 34, { dataType: 'json' })
}
/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 获取工人详情
 */
export function getWorkerDetails (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getWorkerDetails',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 获取工人详情
 */
export function getWorkerOneDetail (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getWorkerOneDetail',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 获取工人详情
 */
export function getFourRsglWorkerNumberAndName (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getFourRsglWorkerNumberAndName',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 获取工人详情
 */
export function getFourRsglWorkerNumberAndNameBetween (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getFourRsglWorkerNumberAndNameBetween',
        params,
        34,
        { dataType: 'json' }
    )
}
