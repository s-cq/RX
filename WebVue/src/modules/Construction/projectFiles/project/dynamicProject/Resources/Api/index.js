import Request from '@rx/config/api-config'

/** ******************  一段项目列表  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述: 根据监理NO和区域ID获取监理名下工程基本信息
 */
export function getListSupervisorOrder (params) {
    return Request.http.post('/api/Project/getListSupervisorOrder', params, 25, {dataType: 'json'})
}

/** ******************  项目二段状态信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述: 根据监理NO和区域ID获取监理名下工程基本信息
 */
export function getSupervisorOrderState (params) {
    return Request.http.post('/api/Project/getSupervisorOrderState', params, 25, {dataType: 'json'})
}
/** ******************  二段质量订单详情(暂时不用)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月17日 14:20:10
 * 参数: { orderNo ：单号  }
 * 描述: 根据orderNo查询质量的订单
 */
export function getConstProcess (params) {
    return Request.http.post('/pro/quality/getConstProcess', params, 25, {dataType: 'json'})
}
/** ******************  二段现场详情  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { ProjectCode }
 * 描述: 获取订单详情
 */
export function getSenceProjectOrderDetailByOrderCode (params) {
    return Request.http.get('/api/senceProtection/getSenceProjectOrderDetailByOrderCode', params, 23)
}
/** ******************  三段质量订单详情(暂时不用)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月17日 14:20:10
 * 参数: { orderNo ：单号  }
 * 描述: 根据orderNo查询质量的订单
 */
export function getQualityTwo (params) {
    return Request.http.post('/pro/quality/QualityTwo', params, 25, {dataType: 'json'})
}
/** ******************  三段质量工艺详情(暂时不用)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月17日 20:20:10
 * 参数: { processId ：id  }
 * 描述: 根据processId查询工艺详情
 */
export function getTechnicsDetail (params) {
    return Request.http.post('/pro/quality/getTechnicsDetail', params, 25, {dataType: 'json'})
}
/** ******************  二三段质量工艺详情()  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月17日 20:20:10
 * 参数: { orderno ：项目单号 , ptype： 1}
 * 描述: 根据orderno查询工艺详情
 */
export function GetProcessListDetailByOrderno (params) {
    return Request.http.get('/api/GroupSupervision/GetProcessListDetailByOrderno', params, 22, {dataType: 'json'})
}

/** ******************  项目二段阶段信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月16日 18:33:33
 * 参数: {  }
 * 描述: 根据项目单号获取项目的阶段信息
 */
export function getOrderStage (params) {
    return Request.http.post('/api/Project/getOrderStage', params, 25, {dataType: 'json'})
}

/** ******************  项目二段状态-材料信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月17日 17:37:10
 * 参数: { rwdID ：单号  }
 * 描述: 根据监理NO和区域ID获取监理名下工程基本信息
 */
export function getMaterialState (params) {
    return Request.http.get('/Mat/api/ProInfoMaterialVTwo/GetProInfoOrderTypeFlowStatistics', params, 22)
}
/** ******************  项目二段项目项目详细信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月17日 17:37:10
 * 参数: { rwdID ：单号  }
 * 描述: 主案接口 获取项目信息
 */
export function getorderInfo (params) {
    return Request.http.get('/order/orderInfo', params, 28)
}

/** ******************  获取项目回访信息  ********************/
/**
 * 创建: CDD
 * 时间: 2019年9月17日 17:37:10
 * 参数: { logtype ：回访信息类型，orderno：项目单号  }
 * 描述: 获取项目回访列表信息
 */
export function getReturnVisit (params) {
    return Request.http.post('/api/returnVisit/getReturnVisit', params, 25, {dataType: 'json'})
}
/** ******************  获取项目客户端信息  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 17:37:10
 * 参数: { areaId: 地区id, orderNo: 项目单号, userNo:用户卡号 }
 * 描述: 获取客户端信息
 */
export function getClientLoginInformation (params) {
    return Request.http.post('/api/base/getClientLoginInformation', params, 23, {dataType: 'json'})
}
/** ******************  获取二段材料信息（审计）  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 17:37:10
 * 参数: { F_OrderNo ：项目单号，F_CityID： 地区id }
 * 描述: 获取材料信息
 */
export function GetMatDetails (params) {
    return Request.http.get('/api/Construct/GetMatDetailsTeam', params, 31)
}
/** ******************  获取二段材料信息（除审计）  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 17:37:10
 * 参数: { rwdID ：项目单号  }
 * 描述: 获取材料信息
 */
export function GetShopItemsByRwdID (params) {
    return Request.http.get('/MAT/api/ThirdParty/GetShopItemsByRwdID', params, 22)
}
/** ******************  获取三段材料订单详情  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 17:37:10
 * 参数: { rwdID ：项目单号，state： 0 }
 * 描述: 获取材料订单详情
 */
export function GeProInfoOrderItemsByClient (params) {
    return Request.http.get('/MAT/api/ThirdParty/GeProInfoOrderItemsByClient', params, 22)
}

/** ******************  获取二段摄像头信息  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 17:37:10
 * 参数: { orderno：项目单号  }
 * 描述: 获取摄像头信息
 */
export function getPointByPro (params) {
    return Request.http.post('/api/Project/getPointByPro', params, 37, {dataType: 'json'})
}
/** ******************  获取二段基础信息  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月25日 17:37:10
 * 参数: { rwdId：项目单号  }
 * 描述: 获取登陆次数及详情
 */
export function GetLoginList (params) {
    return Request.http.get('/customer/user/getLoginList', params, 36)
}
/** ******************  获取三段摄像头详情  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 17:37:10
 * 参数: { camera 摄像头编号  create_date 创建日期  }
 * 描述: 获取摄像头详情
 */
export function getImgListByDate (params) {
    return Request.http.post('/api/Project/getImgListByDate', params, 37, {dataType: 'json'})
}
/** ******************  获取三段摄像头列表  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 17:37:10
 * 参数: { camera 摄像头编号 }
 * 描述: 获取摄像头详情
 */
export function getImgStatisticsByPoi (params) {
    return Request.http.post('/api/Project/getImgStatisticsByPoi', params, 37, {dataType: 'json'})
}

/** ******************  获取材料四段的详情  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月11日 17:37:10
 * 参数: { orderId ：订单id  }
 * 描述: 获取材料四段的详情
 */
export function GetOrderDetailsByClient (params) {
    return Request.http.get('/MAT/api/ThirdParty/GetOrderDetailsByClient', params, 22)
}

/** ******************  查询项目经理基本信息  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月24日
 * 参数: { orderNo：项目单号 }
 * 描述: 查询团队基本信息
 */
export function getPmCardMsgByOrderno (params) {
    return Request.http.get('/a/matters/userinfo/getPmCardMsgByOrderno', params, 24)
}

/** ******************  查询工程经理基本信息  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月24日
 * 参数: { orderNo：项目单号 }
 * 描述: 查询团队基本信息
 */
export function getTeamByOrderNo (params) {
    return Request.http.get('/hrms/externalInterface/getTeamByOrderNo', params, 4)
}

/** ******************  获取项目材料配送统计信息  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月25日
 * 参数: { orderNo：项目单号 }
 * 描述: 获取项目材料配送统计信息
 */
export function GetProinfoStatisticsInfoByClient (params) {
    return Request.http.get('/MAT/api/ThirdParty/GetProinfoStatisticsInfoByClient', params, 22)
}


/** ******************  获取设计师基本信息  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月25日
 * 参数: { orderNo：项目单号 }
 * 描述: 获取设计师基本信息
 */
export function getWenesByCardNo (params) {
    return Request.http.get('/api/Region/getWenesByCardNo', params, 35)
}
/** ******************  获取项目基本信息  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月25日
 * 参数: { orderNo：项目单号 }
 * 描述: 获取设计师基本信息
 */
export function getProjectBasicInfo (params) {
    return Request.http.post('/api/base/getProjectBasicInfo', params, 23, {dataType: 'json'})
}

/** ******************  获取投诉类型（二段的客）  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月5日 15:23:36
 * 参数: { sbeType, spTypeId, spSubjectId}
 * 描述: 获取投诉类型
 */
export function findTypeSubjectExecute (params) {
    return Request.http.get('/api/findTypeSubjectExecute', params, 38)
}
