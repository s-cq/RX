import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: 陈怼怼
 * 时间: 2019年8月29日 11:20:50
 * 参数: {
 *          int diqu,
 *          int stage,
 *          int startnumber,
 *          int endnumber
 *      }
 * 描述: 获取项目信息--总控项目一段列表
 */
export function getProjectLeftList (params) {
    return Request.http.post('/api/projectmaster/getProjectLeftList', params, 20, {dataType: 'json'})
}
