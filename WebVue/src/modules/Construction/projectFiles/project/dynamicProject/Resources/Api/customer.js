import Request from '@rx/config/api-config'
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
/** ******************  提交投诉类型（二段的客）  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月5日 15:23:36
 * 参数: { sbeType, spTypeId, spSubjectId}
 * 描述: 提交客户投诉
 */
export function insertSpSolveTheProblem (params) {
    return Request.http.get('/api/insertSpSolveTheProblem', params, 38, {dataType: 'json'})
}
/** ******************  查看投诉订单（二段的客）  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月5日 15:23:36
 * 参数: { postId, personnelCard , orderStages, orderStage, orderState  }
 * 描述: 提交客户投诉
 */
export function findSpSolveTheProblemLeftList (params) {
    return Request.http.get('/api/findSpSolveTheProblemLeftList', params, 38, {dataType: 'json'})
}
/** ******************  查看名片的信息（三段的客）  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月6日 15:23:36
 * 参数: { UserCardNO }
 * 描述: 获取项目经理的信息
 */
export function getPMBusinessCardMsg (params) {
    return Request.http.get('/a/matters/userinfo/getPMBusinessCardMsg', params, 24)
}
/** ******************  解密手机号码（三段的客）  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月6日 15:23:36
 * 参数: { initialPhone }
 * 描述: 获取项目经理的电话号码
 */
export function GetDeTel (params) {
    return Request.http.get('/api/Section/GetDeTel', params, 39)
}
/** ******************  获取用户信息及订单信息（三段的客）  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月6日 15:23:36
 * 参数: { id }
 * 描述: 获取用户信息及详情
 */
export function findSpSolveTheProblemDetailsById (params) {
    return Request.http.get('/service/spsolvetheproblem/findSpSolveTheProblemDetailsById', params, 38)
}
/** ******************  提交客户评价（三段的客）  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月6日 15:23:36
 * 参数: { id }
 * 描述: 获取用户信息及详情
 */
export function updateAssessmentResultsKH (params) {
    return Request.http.post('/api/updateAssessmentResultsKH', params, 38)
}
