import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: hwx
 * 时间: 2019-10-08
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述: 查询质量库一段列表数据
 */
export function getProcessLibraryByCondition (params) {
    return Request.http.post('/pro/qualityLibrary/getProcessLibraryByCondition', params, 30, {dataType: 'json'})
}
/**
 * 创建: hwx
 * 时间: 2019-10-08
 * 参数: { "processCode":"BA47FC3C-050A-41E9-BB6A-73DC5035456B" }
 * 描述: 设置板块
 */
export function technology (params) {
    return Request.http.post('/pro/qualityLibrary/technology', params, 30, {dataType: 'json'})
}
