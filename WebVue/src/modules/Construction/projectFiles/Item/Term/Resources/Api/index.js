import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: 石浩琦
 * 时间: 2019-11-04
 * 参数: {
 * region_id： 地区ID eg: 11
 * order_checker: 监理卡号 eg: 00009930
 *  }
 * 描述: 获取项目列表数据
 */
export function getProjectLeftList (params) {
    return Request.http.post('/api/Project/getProjects', params, 37, {dataType: 'json'})
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-05
 * 参数: {
 * camera: 监控编号
 *  }
 * 描述: 按点位查询拍摄的照片按天统计
 */
export function getImgStatisticsByPoi (params) {
    return Request.http.post('/api/Project/getImgStatisticsByPoi', params, 37, {dataType: 'json'})
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-05
 * 参数: {
 *  camera: 监控编号
 *  create_date:创建时间：格式：yyyy-MM-dd
 *  }
 * 描述: 按点位和时间查询当天拍摄的照片详情
 */
export function getImgListByDate (params) {
    return Request.http.post('/api/Project/getImgListByDate', params, 37, {dataType: 'json'})
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-05
 * 参数: {
 *      camera_state: 出库状态 0 = 未知 1 = 已出库 2 = 未出库
 *      camera: 监控编号
 *  }
 * 描述: 更新监控状态
 */
export function updateCameraState (params) {
    return Request.http.post('/api/Project/upCameraState', params, 37, {dataType: 'json'})
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-07
 * 参数: {
 *  }
 * 描述: 根据监控点抓拍图片
 */
export function addManualCapture (params) {
    return Request.http.post('/group/trimgs/addManualCapture', params, 37, {dataType: 'json'})
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-07
 * 参数: {
 *      id:点位id
 *      name:点位名称
 *  }
 * 描述: 更新点位名称
 */
export function updatePointName (params) {
    return Request.http.post('/api/Project/upPointName', params, 37, { dataType: 'json' })
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-07
 * 参数: {
 *      camera:监控编号
 *  }
 * 描述: 按点位查询拍摄的二段信息
 */
export function getTow (params) {
    return Request.http.post('/api/Project/getTow', params, 37, { dataType: 'json' })
}
