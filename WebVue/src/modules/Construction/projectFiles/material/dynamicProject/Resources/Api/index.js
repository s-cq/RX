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

/** ******************  项目二段状态-材料信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月17日 17:37:10
 * 参数: { rwdID ：单号  }
 * 描述: 获取材料信息
 */
export function getMaterialState (params) {
    return Request.http.get('/Mat/api/ProInfoMaterialVTwo/GetProInfoOrderTypeFlowStatistics', params, 22)
}
