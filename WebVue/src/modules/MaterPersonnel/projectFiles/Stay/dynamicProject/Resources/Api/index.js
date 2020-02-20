import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: 陈旭
 * 时间: 2019-09-06
 * 参数: stage: 阶段 region:地区ID inpu:模糊查询  state:状态
 * 描述: 项目经理：查询项目经理人员列表所需信息
 */
export function GetProjectManagerList (params) {
    return Request.http.post('/api/ProjectManager/GetProjectManagerList', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: uid：人员id area:地区
 * 描述: 项目经理：查询指定人员资金板块奖罚数据
 */
export function GetByUIdFundInformation (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdFundInformation', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: companyId:地区ID
 * 描述: 项目经理：通过分司ID去除相同等级地区
 */
export function selectAllCityAndCompany (params) {
    return Request.http.get('/company/selectAllCityAndCompany', params, 29)
}

/** ******************  二段  结果 ********************/
/**
 * 创建: 陈旭
 * 时间: 2019-09-25
 * 参数: uid：人员id
 * 描述: 项目经理：根据项目经理uid查询上限级别和扣款比例
 */
export function GetByUIdUserinfoDeposit (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdUserinfoDeposit', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-25
 * 参数: upperLevel:上限级别
 * 描述: 项目经理：根据上限级别查询上限扣款
 */
export function GetUpperKoukuanByUpperLevel (params) {
    return Request.http.post('/api/ProjectManager/GetUpperKoukuanByUpperLevel', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-25
 * 参数: uid：人员id
 * 描述: 项目经理：获取质保金额信息
 */
export function ProjectWarrantyByUserID (params) {
    return Request.http.get('/api/Finance/I_GC_ProjectWarrantyByUserID', params, 22)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-26
 * 参数: uid：人员id
 * 描述: 项目经理：查询指定人员所负责的项目竣工金额信息
 */
export function GetByUIdCompletionAmount (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdCompletionAmount', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-26
 * 参数: uid：人员id
 * 描述: 项目经理：查询指定人员的成就结算记录信息
 */
export function GetByUIdAchievementSettlementRecord (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdAchievementSettlementRecord', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-26
 * 参数: uid：人员id
 * 描述: 项目经理：查询指定人员的历史的竣工项目信息
 */
export function GetByUIdHistoryProject (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdHistoryProject', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-26
 * 参数: uid：人员id
 * 描述: 项目经理：查询人员成就结算信息
 */
export function GetByUIdAchievementInformation (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdAchievementInformation', params, 21, {dataType: 'json'})
}
/**
 * 创建: 张建刚
 * 时间: 2019-09-24
 * 参数: params：uid
 * 描述: 通过项目经理id查询出项目结果信息
 */
/** ******************  二段  结果 ********************/

export function GetByuidProjectManagerResult (params) {
    return Request.http.post('/project/ProjectProcessAndResult/getByuidProjectManagerResult', params, 21, {dataType: 'json'})
}

/** ******************  三段  审计 ********************/
export function getAuditMoney (params) {
    return Request.http.post('/project/ProjectProcessAndResult/getAuditMoney', params, 21, {dataType: 'json'})
}
/** ******************  四段  款项对应的收款、材料、人工信息 ********************/
export function getIGCCompositeFunds (params) {
    return Request.http.get('/api/Finance/I_GC_CompositeFunds', params, 22)
}
export function getIGCProjectPayment (params) {
    return Request.http.get('/api/Finance/I_GC_ProjectPayment', params, 22)
}
/** ******************  五段  款项对应的收款、材料、人工信息 ********************/
export function getIGCReceivableFunds (params) {
    return Request.http.get('/api/Finance/I_GC_ReceivableFunds', params, 22)
}
/** ******************  三段  工期 ********************/
export function getConstructionTimeByOrderNo (params) {
    return Request.http.post('/project/ProjectProcessAndResult/getConstructionTimeByOrderNo', params, 21, {dataType: 'json'})
}
/** ******************  三段  工艺 ********************/
export function getProjectProcessCount (params) {
    return Request.http.post('/project/ProjectProcessAndResult//getOrderprocess', params, 21, {dataType: 'json'})
}
/** ********************* 三段 材料比配额********************/
export function getProInfoDeliveryRatio (params) {
    return Request.http.get('/MAT/api/VTwoProInfoThird/GetProInfoInfoDeliveryRatio', params, 22)
}
/** ******************  二段  过程 ********************/
export function GetByuidProjectManagerProcess (params) {
    return Request.http.post('/project/ProjectProcessAndResult/getByuidProjectManagerProcess', params, 21, {dataType: 'json'})
}
/** ********************三段   过程对应的订单信息 */
export function GetOrderInfoByProject (params) {
    return Request.http.post('/project/ProjectProcessAndResult/getOrderInfoByProject', params, 21, {dataType: 'json'})
}
/**
 * 创建: 张建刚
 * 时间: 2019-09-27
 * 参数: params：orderNo
 * 描述: 通过项目查询工人
 */
export function getOrderWorkType (params) {
    return Request.http.get('/worker/workerBusiness/getOrderWorkTypeStatistic', params, 26)
}

/**
 * 创建: 张建刚
 * 时间: 2019-09-27
 * 参数: params：orderNo
 * 描述: 通过项目查询客户差评和差评的详细订单评价
 */
export function getCustomerBadReview (params) {
    return Request.http.post('/project/ProjectProcessAndResult/getBadReview', params, 21, {dataType: 'json'})
}
/**
 * 创建: 张建刚
 * 时间: 2019-09-27
 * 参数: params：差评的orderCodes (订单集合)
 * 描述: 通过项目查询客户对应订单的详细评价
 */
export function getCustomerBadReviewInfo (params) {
    return Request.http.post('/api/senceProtection/getProjectOrderEvaluateMsgList', params, 24, {dataType: 'json'})
}
/**
 * 创建: 张建刚
 * 时间: 2019-09-27
 * 参数: params：orderNo
 * 描述: 通过项目查询巡检的整改发起次数和完成次数
 */
export function getInspection (params) {
    return Request.http.post('/project/ProjectProcessAndResult/getInspection', params, 21, {dataType: 'json'})
}

export function getColony (params) {
    return Request.http.post('/stay/libaray/getRegionList', params, 21, {dataType: 'json'})
}

export function getCity (params) {
    return Request.http.get('/company/selectCompanyCity', params, 29)
}

/**
 * 创建: 张建刚
 * 时间: 2019-10-15
 * 参数: params：uid 用户id
 * 描述: 通过项目经理查询项目的升级信息
 */
/* 留-留中的获取成就信息 */
export function getPMUpgradeMsg (params) {
    return Request.http.post('/stay/stayManage/getPMUpgradeMsg', params, 21, {dataType: 'json'})
}
/* 留-留中的获取成就项目具体信息 */
export function getAchievementMsg (params) {
    return Request.http.post('/stay/stayManage/getAchievementMsg', params, 21, {dataType: 'json'})
}
/* 留-留中的获取当前项目经理的历史总金额 */
export function findAllHisdeposit (params) {
    return Request.http.post('/stay/stayManage/findAllHisdeposit', params, 21, {dataType: 'json'})
}
/* 获取当前项目经理的升级级别的信息 */
export function findUpgradeInfo (params) {
    return Request.http.post('/stay/stayManage/findUpgradeInfo', params, 21, {dataType: 'json'})
}
