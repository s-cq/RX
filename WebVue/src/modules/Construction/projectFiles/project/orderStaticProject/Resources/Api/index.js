import Request from '@rx/config/api-config'

/** ******************  一段项目列表  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述: 根据监理NO和区域ID获取监理名下工程基本信息
 */
export function getListSupervisorOrder (params) {
    return Request.http.post('/api/Project/getListSupervisorOrder', params, 25, {dataType: 'json'})
}

/** ******************  项目二段状态信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述: 根据监理NO和区域ID获取监理名下工程基本信息
 */
export function getSupervisorOrderState (params) {
    return Request.http.post('/api/Project/getSupervisorOrderState', params, 25, {dataType: 'json'})
}

/** ******************  项目二段阶段信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数: {  }
 * 描述: 根据项目单号获取项目的阶段信息
 */
export function getOrderStage (params) {
    return Request.http.post('/api/Project/getOrderStage', params, 25, {dataType: 'json'})
}

/** ******************  项目二段状态-材料信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月17日 17:37:10
 * 参数: { rwdID ：单号  }
 * 描述: 根据监理NO和区域ID获取监理名下工程基本信息
 */
export function getMaterialState (params) {
    return Request.http.get('/Mat/api/ProInfoMaterialVTwo/GetProInfoOrderTypeFlowStatistics', params, 22)
}
/** ******************  项目二段项目项目详细信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月17日 17:37:10
 * 参数: { rwdID ：单号  }
 * 描述: 主案接口 获取项目信息
 */
export function getorderInfo (params) {
    return Request.http.get('/order/orderInfo', params, 28)
}

/** ******************  获取项目回访信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月17日 17:37:10
 * 参数: { logtype ：回访信息类型，orderno：项目单号  }
 * 描述: 获取项目回访列表信息
 */
export function getReturnVisit (params) {
    return Request.http.post('/api/returnVisit/getReturnVisit', params, 25, {dataType: 'json'})
}
