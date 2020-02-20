import Request from '@rx/config/api-config'

/** ******************  获取材料信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述: 根据项目单号获取材料信息
 */
export function GetProInfoTreeItemsUnite (params) {
    return Request.http.get('/api/CMaterial/GetProInfoTreeItemsUnite', params, 22)
}
