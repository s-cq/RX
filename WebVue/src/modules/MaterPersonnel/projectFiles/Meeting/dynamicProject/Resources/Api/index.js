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
 * 时间: 2019-09-10
 * 参数: uid : 项目经理id
 * 描述: 项目经理：查询项目经理施前和施中的项目
 */
export function GetByIDOngoingProjects (params) {
    return Request.http.post('/api/ProjectManager/GetByIDOngoingProjects', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-10
 * 参数: uid : 项目经理id flag:2
 * 描述: 项目经理：查询项目待结款信息
 */
export function GetyyMoneyListByUserID (params) {
    return Request.http.get('/api/Finance/I_GC_GetyyMoneyListByUserID', params, 22)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-11
 * 参数: orderNo:订单编号
 * 描述: 项目经理：查询指定项目回款进度信息
 */
export function GetByOrderReceivableDetails (params) {
    return Request.http.post('/api/ProjectManager/GetByOrderReceivableDetails', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-11
 * 参数: orderNo:订单编号 uid:人员id
 * 描述: 项目经理：查询指定项目经理的项目罚款记录
 */
export function GetByOrderProjectFinesList (params) {
    return Request.http.post('/api/ProjectManager/GetByOrderProjectFinesList', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-10
 * 参数: uid : 项目经理id OrderID：项目单号
 * 描述: 项目经理：查询项目可用款项信息
 */
export function ProjectKYMoneyList (params) {
    return Request.http.get('/api/Finance/I_GC_ProjectKYMoneyList', params, 22)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-11
 * 参数: uid:人员id
 * 描述: 项目经理：查询项目经理收入记录信息
 */
export function GetUidRevenueRecords (params) {
    return Request.http.post('/api/ProjectManager/GetUidRevenueRecords', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-12
 * 参数: orderNo :项目单号
 * 描述: 项目经理：查询指定项目的人工付款记录信息
 */
export function GetByOrderPaymentRecord (params) {
    return Request.http.post('/api/ProjectManager/GetByOrderPaymentRecord', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-12
 * 参数: uid:人员id
 * 描述: 项目经理：查询项目所负责的项目地区信息
 */
export function GetByUidDiQuList (params) {
    return Request.http.post('/api/ProjectManager/GetByUidDiQuList', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-18
 * 参数: uid : 项目经理id
 * 描述: 项目经理：根据项目经理uid查询项目经理的押金信息的接口
 */
export function GetPmUserinfoDepositbyUid (params) {
    return Request.http.get('/a/money/pmUserinfomMoney/getPmUserinfoDepositbyUid', params, 23)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-21
 * 参数: uid : 项目经理id
 * 描述: 项目经理：查询指定人员的人事信息
 */
export function GetByUIdUserInfo (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdUserInfo', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: CardNo ：app卡号
 * 描述: 项目经理：获取人事的通知
 */
export function GetAppNoticeNoRead (params) {
    return Request.http.get('/actionapi/JiGuang/GetAppNoticeNoRead', params, 27)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: CardNo ：app卡号
 * 描述: 项目经理：获取人事通知统计数据
 */
export function GetAppNoticeGroup (params) {
    return Request.http.get('/actionapi/JiGuang/GetAppNoticeGroup', params, 27)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: CardNo ：app卡号 AppId
 * 描述: 项目经理：查询最近登陆时间
 */
export function GetAppLastLoginTime (params) {
    return Request.http.get('/actionapi/AppPort/GetAppLastLoginTime', params, 27)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: url ：appCardNo
 * 描述: 项目经理：获取二维码
 */
export function GetQRCodeUrl (params) {
    return Request.http.get('/getQRCodeUrl', params, 2)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: AppId:默认为5
 * 描述: 项目经理：查询二维码图片
 */
export function GetEWM (params) {
    return Request.http.get('/actionapi/AppLogin/GetEWM', params, 27)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: phone：手机号码
 * 描述: 项目经理：获取验证码
 */
export function GetVcodeUpdatePwd (params) {
    return Request.http.post('/actionapi/AppHome/GetVcodeUpdatePwd', params, 27)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: phone：手机号码 newPassword:新密码  vCode:验证码
 * 描述: 项目经理：重置密码
 */
export function UpdatePasswordVcode (params) {
    return Request.http.post('/actionapi/AppHome/UpdatePassword_Vcode', params, 27)
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: uid : 项目经理id
 * 描述: 项目经理：查询项目经理当月金牌,积分结余和当前级别
 */
export function GetByUIdScoreInfo (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdScoreInfo', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: userType:角色类型 dataType：记录类型  pmUid：人员id
 * 描述: 项目经理：查询指定人员操作记录
 */
export function GetByUIdOperationRecord (params) {
    return Request.http.post('/api/ProjectManager/GetByUIdOperationRecord', params, 21, {dataType: 'json'})
}
/**
 * 创建: 陈旭
 * 时间: 2019-09-23
 * 参数: level：级别  uid：人员id
 * 描述: 项目经理：更新指定人员级别信息
 */
export function updateUserInfoLevel (params) {
    return Request.http.post('/api/ProjectManager/updateUserInfoLevel', params, 21, {dataType: 'json'})
}


export function getColony (params) {
    return Request.http.post('/stay/libaray/getRegionList', params, 21, {dataType: 'json'})
}

export function getCity (params) {
    return Request.http.get('/company/selectCompanyCity', params, 29)
}

