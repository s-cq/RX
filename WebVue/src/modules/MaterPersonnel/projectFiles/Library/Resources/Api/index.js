import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: 张建刚
 * 时间: 2019-09-27
 * 参数: params：orderNo
 * 描述: 通过项目查询巡检的整改发起次数和完成次数
 */
export function getStayLevel (params) {
    return Request.http.post('/stay/libaray/getStatyLevel', params, 21, {dataType: 'json'})
}

export function getStayLevelById (params) {
    return Request.http.post('/stay/libaray/getStayLevelByleId', params, 21, {dataType: 'json'})
}

export function updateStayLevelById (params) {
    return Request.http.post('/stay/libaray/updateStayLevelByleId', params, 21, {dataType: 'json'})
}

export function getUserMarkDetailList (params) {
    return Request.http.post('/stay/libaray/getUserMarkDetailList', params, 21, {dataType: 'json'})
}

export function updateSignBySignId (params) {
    return Request.http.post('/stay/libaray/updateSignBySignId', params, 21, {dataType: 'json'})
}

export function saveUserSignStandard (params) {
    return Request.http.post('/stay/libaray/saveUserSignStandard', params, 21, {dataType: 'json'})
}
