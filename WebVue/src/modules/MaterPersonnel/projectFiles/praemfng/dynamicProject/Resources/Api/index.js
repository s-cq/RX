import Request from '@rx/config/api-config'

/** ******************  库 ********************/
export function getStatyLevel (params) {
    return Request.http.post('/stay/libaray/getStatyLevel', params, 21)
}

export function saveIntegralInfo (params) {
    return Request.http.post('/stay/stayManage/saveIntegraInfo', params, 21, {dataType: 'json'})
}

export function getIntegralInfo (params) {
    return Request.http.post('/stay/stayManage/findIntegraInfo', params, 21, {dataType: 'json'})
}
