import Request from '@rx/config/api-config'

/** ******************  一段  ********************/


/** ******************  三段  ********************/

/**
 * 创建: 石浩琦
 * 时间: 2019-11-07
 * 参数: {
 *  }
 * 描述: 更新地区
 */
export function updateRegion (params) {
    return Request.http.get('/group/region/addRegionInfo', params, 37, {dataType: 'json'})
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-07
 * 参数: {
 *  }
 * 描述: 更新设备和监控点
 */
export function updateEncodeDeviceCameras (params) {
    return Request.http.get('/group/encodedevice/addEncodeDeviceCameras', params, 37, {dataType: 'json'})
}

/**
 * 创建: 石浩琦
 * 时间: 2019-11-07
 * 参数: {
 *  id = 副表里的id， 如果大于0则更新, 否则添加
    camera： 监控点信息
    begin_date： 开始时间
    end_data： 结束时间
    interval： 间隔拍摄时间
 *  }
 * 描述: 更新监控信息
 */
export function updateCameraInfo (params) {
    return Request.http.post('/api/city/cameras/upCameraInfo', params, 37, {dataType: 'json'})
}

