import Request from '@rx/config/api-config'

/** ******************  一段  ********************/

/**
 * 创建: 石浩琦
 * 时间: 2019-11-05
 * 参数: {
     region_id:地区id
 }
 * 描述: 按分公司获取设备。
 */
export function getCamerasListByRegion (params) {
    return Request.http.post('/api/city/cameras/getCamerasListByRegion', params, 37, { dataType: 'json' })
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-05
 * 参数: {
    camera：监控点信息
 }
 * 描述: 按监控编号查询附属信息
 */
export function getSauxiliaryInfo (params) {
    return Request.http.post('/api/city/cameras/getSauxiliaryInfo', params, 37, { dataType: 'json' })
}

/** ******************  三段-出库  ********************/
/**
 * 创建: 石浩琦
 * 时间: 2019-11-04
 * 参数: {
     order_no: 单号 eg: 11-123
 }
 * 描述: 按项目查询点位
 */
export function getPointByPro (params) {
    return Request.http.post('/api/Project/getPointByPro', params, 37, {dataType: 'json'})
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-04
 * 参数: {
     id: 点位id
     camera: 监控点位编号
 }
 * 描述: 更新点位
 */
export function updatePoints (params) {
    return Request.http.post('/api/Project/upPoint', params, 37, { dataType: 'json' })
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-04
 * 参数: {
     camera: 监控点位编号
 }
 * 描述: 使用监控编码获取监控信息
 */
export function getInfoByCamera (params) {
    return Request.http.post('/api/city/cameras/getInfoByCamera', params, 37, { dataType: 'json' })
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-04
 * 参数: {
     camera: 监控编号
 }
 * 描述: 按监控号查询是否有项目及结果
 */
export function isBindOrder (params) {
    return Request.http.post('/api/city/cameras/isBindOrder', params, 37, { dataType: 'json' })
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-08
 * 参数: {
    camera_state: 出库状态 0 = 库存1 = 已出库 2 = 归库
    camera: 监控编号
    point_id, --点位
    region_id, --地区id
    order_no, --单号
    remark, --备注， 如果是工程经理操作（ 传入工程经理谁操作归库） 如果是监理操作（ 传入监理谁操作出库）
    opereater--操作人
 }
 * 描述: 更新监控状态
 */
export function updateCameraState (params) {
    return Request.http.post('/api/city/cameras/upCameraState', params, 37, { dataType: 'json' })
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-08
 * 参数: {
 * camera: 监控编号
 }
 * 描述: 按监控号查询使用记录
 */
export function getRecord (params) {
    return Request.http.post('/api/city/cameras/getRecord', params, 37, { dataType: 'json' })
}
