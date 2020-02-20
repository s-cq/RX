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


/** ******************  一段  ********************/
/**
 * 创建: 闫传强
 * 时间: 2019年11月20日15:47:22
 * 参数:
 * 描述: 一段获取
 */
export function getSalaryListByRegionId (params) {
    return Request.http.post('/api/salarySalary/getSalaryListByRegionId',
        params,
        34,
        { dataType: 'json' })
}

/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间: 2019年11月20日15:47:22
 * 参数:
 * 描述: 二段获取
 */
export function getInternalSalaryByUserCard (params) {
    return Request.http.post('/api/salarySalary/getInternalSalaryByUserCard',
        params,
        34,
        { dataType: 'json' })
}

