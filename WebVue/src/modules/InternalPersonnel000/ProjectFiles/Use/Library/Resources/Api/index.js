import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: lianhaiwei
 * 时间: 2018-05-16
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述:
 */
export function getWarehouseList (params) {
    return Request.http.post('/api/PersonnelEmploying/getWarehouseList', params, 34, {dataType: 'json'})
}

/** ******************  二段  ********************/
/**
 * 创建: lianhaiwei
 * 时间: 2018-05-16
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述:
 */
export function getWarehouseDetail (params) {
    return Request.http.post('/api/PersonnelEmploying/getWarehouseDetail', params, 34, {dataType: 'json'})
}
/** ******************  三段竣工  ********************/
/**
 * 创建: lianhaiwei
 * 时间: 2018-05-16
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述:
 */
export function getWarehouseResultDetail (params) {
    return Request.http.post('/api/PersonnelEmploying/getWarehouseResultDetail', params, 34, {dataType: 'json'})
}

/** ******************  三段修改  ********************/
/**
 * 创建: lianhaiwei
 * 时间: 2018-05-16
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述:
 */
export function upUserLevelStandardDetail (params) {
    return Request.http.post('/api/PersonnelEmploying/upUserLevelStandardDetail', params, 34, {dataType: 'json'})
}
/** ******************  三段修改  ********************/
/**
 * 创建: lianhaiwei
 * 时间: 2018-05-16
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述:
 */
export function upUserLevelStandard (params) {
    return Request.http.post('/api/PersonnelEmploying/upUserLevelStandard', params, 34, {dataType: 'json'})
}

