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
    return Request.http.post('/api/ProjectMaster/getProjectLeftList', params, 20, {dataType: 'json'})
}


/** ******************  处理  ********************/
/**
 * 创建: 陈怼怼
 * 时间: 2019年8月31日 16:50:05
 * 参数: {
 *          string procode
 *      }
 * 描述: 获取项目当前进度，及各部门状态
 */
export function getProjectDebriefing (params) {
    return Request.http.get('/api/ProgressControl/getProjectDebriefing', params, 20)
}
/** ******************  处理  ********************/
/**
 * 创建: 陈怼怼
 * 时间: 2019年8月31日 16:50:05
 * 参数: {
 *
 *      }
 * 描述: 各团推动项目自己部门的进度
 */
export function promoteProgressByGroup (params) {
    return Request.http.post('/api/ProgressControl/promoteProgressByGroup', params, 20)
}

/** ******************  处理  ********************/
/**
 * 创建: 陈怼怼
 * 时间: 2019年8月31日 16:50:05
 * 参数: {
 *
 *      }
 * 描述: 推动项目当前进度未结束
 */
export function promoteProgressCurrent (params) {
    return Request.http.post('/api/ProgressControl/promoteProgressCurrent', params, 20)
}
/** ******************  处理  ********************/
/**
 * 创建: 陈怼怼
 * 时间: 2019年8月31日 16:50:05
 * 参数: {
 *
 *      }
 * 描述: 推动项目到下一阶段
 */
export function promoteProgressNext (params) {
    return Request.http.post('/api/ProgressControl/promoteProgressNext', params, 20)
}
