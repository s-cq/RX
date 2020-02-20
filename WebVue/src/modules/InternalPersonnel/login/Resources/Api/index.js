import Request from '@rx/config/api-config'

/** ******************  解析jwt 值  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月7日 18:33:33
 * 参数: { jwt }
 * 描述: 解析jwt值
 */
export function GetUserInfoByjwt (params) {
    return Request.http.get('/api/PhoneSupervisor/GetUserInfoByjwt', params, 22, {dataType: 'json'})
}
