import Request from '@rx/config/api-config'

/** ******************  获取打印资料详情  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月2日 20:20:10
 * 参数: { orderCode ：id  }
 * 描述: 打印数据
 */
export function getinspectionData (params) {
    return Request.http.post('/api/inspection/getinspectionData', params, 23, {dataType: 'json'})
}
/** ******************  获取打印人详情  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月2日 20:20:10
 * 参数: { orderCode ：id  }
 * 描述: 打印数据
 */
export function getInspection (params) {
    return Request.http.post('/api/inspection/getInspection', params, 23, {dataType: 'json'})
}
