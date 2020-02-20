import Request from '@rx/config/api-config'

/** ******************  查询一段列表  ********************/
/**
 * 创建: hwx
 * 时间: 2020-01-19
 * 参数: {
            "afterMarketState":1,      【条件查询阶段  1:审计,2:准备,3:在施,4:竣工,5:完工,6:历史,7:坏账,8:退单   如果没有选择默认传0】
            "keyWord":"" 【搜索条件  例如：通过单号查询   "keyWord":"11-241545"】
        }
 * 描述: 查询一段列表
 */
export function getWorkorderList (params) {
    return Request.http.post('/pro/getWorkorderList', params, 102, {dataType: 'json'})
}
