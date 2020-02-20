import Request from '@rx/config/api-config'


/** ******************  获取材料二段  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: {  }
 * 描述: 材料团接口
 *       材料二段相关 根据订单获取材料清单分类
 */
export function getMaterialOrderListByOrderNo (params) {
    return Request.http.get('/api/CMaterial/GetProInfoMaterialSecondDataToGCByOrderNo', params, 22)
}
/** ******************  获取项目金额信息  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: {  }
 * 描述: 材料团接口
 *       材料二段相关 根据订单获取材料清单分类
 */
export function getProInfoMaterialInfoToReady (params) {
    return Request.http.get('/MAT/api/VTwoProInfoThird/GetProInfoMaterialInfoToReady', params, 22)
}
/** ******************  获取项目材料列表信息  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: {  }
 * 描述: 材料团接口
 *       材料二段相关 根据订单获取材料清单分类
 */
export function GetProInfoMaterialItems (params) {
    return Request.http.get('/api/CMaterial/GetProInfoMaterialItems', params, 22)
}
/** ******************  获取三段店铺信息  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: { rwdID 项目单号 flowCode 店铺类型 havDis=1  }
 * 描述: 材料团接口
 *       flowCode：1：基础订单 64 主材订单  8 复尺订单  16 定制订单  32 现制订单 4 储值订单
 *       根据单号和店铺类型获取店铺列表
 */
export function GetShopMaterial (params) {
    return Request.http.get('/Mat/api/ProInfoMaterialVTwo/GetProInfoShopStatisticsByOrderType', params, 22)
}
/** ******************  获取四段店铺材料详情  ********************/
/**
 * 创建: cdd
 * 时间: 2019年9月20日 17:21:18
 * 参数: { rwdID 项目单号 flowCode 店铺类型 havDis=1  }
 * 描述: 材料团接口
 *       flowCode：1：基础订单 64 主材订单  8 复尺订单  16 定制订单  32 现制订单 4 储值订单
 *       根据单号和店铺类型获取店铺列表
 */
export function GetProductDetailItemsByShopID (params) {
    return Request.http.get('/Mat/api/ProInfoMaterialVTwo/GetProductDetailItemsByShopID', params, 22)
}

/** **************************************************************************************************************************************/
