import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: lianhaiwei
 * 时间: 2018-05-16
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述: 测试接口
 */
export function getManagerLeftList (params) {
    return Request.http.get('/api/test/paging', params, 2)
}
