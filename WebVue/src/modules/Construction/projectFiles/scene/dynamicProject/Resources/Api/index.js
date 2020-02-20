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

/** ******************  项目二段订单  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月10日 9:44:10
 * 参数: { orderNo ：项目单号, orderStage: 项目阶段, areaId ： 地区ID }
 * 描述: 获取订单数据
 */
export function getProjectOrderByCondition (params) {
    return Request.http.get('/api/senceProtection/getProjectOrderByCondition', params, 23)
}

/** ******************  项目三段订单详情  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月10日 15:23:36
 * 参数: { ProjectCode }
 * 描述: 获取订单步骤
 */
export function getSenceProjectOrderDetailByOrderCode (params) {
    return Request.http.get('/api/senceProtection/getSenceProjectOrderDetailByOrderCode', params, 23)
}
/** ******************  项目安全 环境 形象订单数据  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月25日 15:23:36
 * 参数: { projectOrderCode }
 * 描述: 获取订单数据
 */
export function getFindSafetyOrderStandard (params) {
    return Request.http.get('/api/safety/findSafetyOrderStandard', params, 23)
}
/** ******************  提交安全 环境 形象订单数据  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月26日 15:23:36
 * 参数: {  safetyList: 数据, orderNo, photoList, projectOrderCode,  createUserN, createUserName }
 * 描述: 提交订单数据
 */
export function saveSafetyWorkerType (params) {
    return Request.http.post('/api/safety/saveSafetyWorkerType', params, 23)
}
/** ******************  提交安全 环境 形象订单现场图数据  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月26日 15:23:36
 * 参数: { safetyList: 数据, photoList: 现场图数据,orderNo, photoList, projectOrderCode,  createUserN, createUserName}
 * 描述: 获取订单数据
 */
export function uploadSafetyOrderStandard (params) {
    return Request.http.post('/api/safety/uploadSafetyOrderStandard', params, 23)
}
/** ******************  查询开工仪式物品信息  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月28日
 * 参数: { orderCode：订单号 }
 * 描述: 查询开工仪式物品信息
 */
export function getStartingItem (params) {
    return Request.http.post('/api/groundbreakingCeremony/getStartingItem', params, 23, {dataType: 'json'})
}
/** ******************  修改开工仪式物品状态  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月28日
 * 参数:
 * 描述: 修改开工仪式物品状态
 */
export function updateGroundbreakingCeremony (params) {
    return Request.http.post('/api/groundbreakingCeremony/updateGroundbreakingCeremony', params, 23, {dataType: 'json'})
}
/** ******************  上传开工仪式图片  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月28日 15:23:36
 * 参数: { }
 * 描述: 上传图片
 */
export function savePhoto (params) {
    return Request.http.post('/api/groundbreakingCeremony/savePhoto', params, 23, {dataType: 'json'})
}
/** ******************  三段物业办理(资料植入 审计确认)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { orderChildTypeId：1, projectOrderCode：订单号 }
 * 描述: 获取订单详情
 */
export function findOrderChildTypeDetail (params) {
    return Request.http.get('/api/OrderType/findOrderChildTypeDetail', params, 23)
}
/** ******************  保存四段段物业办理(资料植入 审计确认)  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月11日 15:23:36
 * 参数: {code, userNo,userName,orderNumber,firstPartyList,propertyList,companyList,companyList,orderChildTypeId,role}
 * 描述: 获取订单详情
 */
export function saveDataToBottom (params) {
    return Request.http.post('/api/OrderType/saveDataToBottom', params, 23, {dataType: 'json'})
}
/** ******************  三段物业办理(资料打印 )  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { code：订单号 }
 * 描述: 获取订单详情
 */
export function getFindDetailData (params) {
    return Request.http.get('/api/OrderType/findDetailData', params, 23)
}
/** ******************  三段物业办理(资料打印获取模板)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { dataID: 资料ID, orderNo: 项目单号  }
 * 描述: 获取打印模板
 */
export function GetContractPageUrl (params) {
    return Request.http.get('/api/OrderType/GetContractPageUrl', params, 23)
}
/** ******************  四段物业办理(开工证)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { projectOrderCode }
 * 描述: 获取开工证
 */
export function findStartPermit (params) {
    return Request.http.get('/api/OrderType/findStartPermit', params, 23)
}
/** ******************  开工证上传(开工证)  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月16日 15:23:36
 * 参数: { projectOrderCode, userNo, userName, orderNo,orderNumber, startPermitData}
 * 描述: 提交开工证
 */
export function uploadStartPermit (params) {
    return Request.http.post('/api/OrderType/uploadStartPermit', params, 23)
}

/** ******************  提交准备状态现场保护 形象布置 等数据  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月30日 15:23:36
 * 参数: { orderCode, createUserName, createUserNo, senceData}
 * 描述: 提交
 */
export function saveSenceData (params) {
    return Request.http.post('/api/senceProtection/saveSenceData', params, 23)
}
/** ******************  提交准备状态现场保护 形象布置 图片数据  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月30日 15:23:36
 * 参数: { orderCode, senceId, sencePhoto, createUserName， createUserNo}
 * 描述: 提交
 */
export function saveSencePhoto (params) {
    return Request.http.post('/api/senceProtection/saveSencePhoto', params, 23)
}
/** ******************  提交准备状态现场保护 形象布置 数据  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月30日 15:23:36
 * 参数: { orderCode,  createUserName， createUserNo}
 * 描述: 提交
 */
export function updateSenceProjectOrderStage (params) {
    return Request.http.post('/api/senceProtection/updateSenceProjectOrderStage', params, 23)
}
/** ******************  获取延期订单的数据 ********************/
/**
 * 创建: YK
 * 时间: 2019年10月30日 15:23:36
 * 参数: { projectOrderCode }
 * 描述: 获取延期数据
 */
export function getDelayOrderStandard (params) {
    return Request.http.post('/api/delay/getDelayOrderStandard', params, 23, {dataType: 'json'})
}
/** ******************  开启延期订单 ********************/
/**
 * 创建: YK
 * 时间: 2019年10月30日 15:23:36
 * 参数: { orderNo, createUserNo, createUserName }
 * 描述: 获取延期数据
 */
export function saveDelayOrderStandard (params) {
    return Request.http.post('/api/delay/saveDelayOrderStandard', params, 23, {dataType: 'json'})
}
/** ******************  提交延期订单 ********************/
/**
 * 创建: YK
 * 时间: 2019年10月30日 15:23:36
 * 参数: { projectOrderCode, delayOrderStandard, photoList, createUserNo, createUserName }
 * 描述: 提交延期
 */
export function updateDelayOrderStandard (params) {
    return Request.http.post('/api/delay/updateDelayOrderStandard', params, 23, {dataType: 'json'})
}

/** ******************  获取竣工总检数据  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月2日 15:23:36
 * 参数: { orderCode }
 * 描述:获取数据
 */
export function getinspectionData (params) {
    return Request.http.post('/api/inspection/getinspectionData', params, 23, {dataType: 'json'})
}
/** ******************  保存竣工总检数据  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月2日 15:23:36
 * 参数: { orderNo, projectOrderCode,  createUserNo, createUserName ,inspectionList}
 * 描述: 提交数据
 */
export function saveInspection (params) {
    return Request.http.post('/api/inspection/saveInspection', params, 23, {dataType: 'json'})
}
/** ******************  跳阶段  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月4日 15:23:36
 * 参数: { orderCode,  createUserNo, createUserName }
 * 描述: 跳阶段
 */
export function PostJump (params) {
    return Request.http.get('/api/base/jump', params, 23)
}
/** ******************  获取竣工总检的图片  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月4日 15:23:36
 * 参数: { orderCode }
 * 描述: 获取图片
 */
export function getPhototList (params) {
    return Request.http.post('/api/inspection/getPhototList', params, 23, {dataType: 'json'})
}
/** ******************  提交竣工总检的图片  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月4日 15:23:36
 * 参数: { orderCode }
 * 描述: 提交图片
 */
export function checkUpload (params) {
    return Request.http.post('/api/inspection/checkUpload', params, 23, {dataType: 'json'})
}
/** ******************  摄像头获取打点的信息  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月15日 15:23:36
 * 参数: { orderNo }
 * 描述: 获取设计师打点
 */
export function getByOrderCode (params) {
    return Request.http.post('/api/cameraorderstandard/getByOrderCode', params, 23, {dataType: 'json'})
}
/** ******************  摄像头获取点位信息  ********************/
/**
 * 创建: YK
 * 时间: 2019年11月15日 15:23:36
 * 参数: {  order_no: 单号 eg: 11-123 }
 * 描述: 获取设计师打点
 */
export function getPointByPro (params) {
    return Request.http.post('/api/Project/getPointByPro', params, 37, {dataType: 'json'})
}
/** ******************  摄像头获取监控设备  ********************/
/**
 * 创建: YK
 * 时间: 2019-11-15
 * 参数: { region_id:地区id }
 * 描述: 按分公司获取设备。
 */
export function getCamerasListByRegion (params) {
    return Request.http.post('/api/city/cameras/getCamerasListByRegion', params, 37, { dataType: 'json' })
}
/** ******************  按点位查询拍摄的照片按天统计  ********************/
/**
 * 创建: YK
 * 时间: 2019-11-05
 * 参数: {
 * camera: 监控编号
 *  }
 * 描述: 按点位查询拍摄的照片按天统计
 */
export function getImgStatisticsByPoi (params) {
    return Request.http.post('/api/Project/getImgStatisticsByPoi', params, 37, {dataType: 'json'})
}
/** ******************  按点位和时间查询当天拍摄的照片详情  ********************/
/**
 * 创建: YK
 * 时间: 2019-11-05
 * 参数: { camera: 监控编号 create_date:创建时间：格式：yyyy-MM-dd }
 * 描述: 按点位和时间查询当天拍摄的照片详情
 */
export function getImgListByDate (params) {
    return Request.http.post('/api/Project/getImgListByDate', params, 37, {dataType: 'json'})
}

/** ******************  根据监控点抓拍图片  ********************/
/**
 * 创建: YK
 * 时间: 2019-11-07
 * 参数: { }
 * 描述: 根据监控点抓拍图片
 */
export function addManualCapture (params) {
    return Request.http.post('/group/trimgs/addManualCapture', params, 37, {dataType: 'json'})
}

/** ******************  指定出库 （暂时不用） ********************/
/**
 * 创建: HWX
 * 时间: 2019年11月16日 10.54
 * 参数: camera_state: 出库状态 0=库存1=已出库  2=未出库
        camera:监控编号
        point_id,--点位
        region_id,--地区id
        order_no,--单号
        remark,--备注，如果是工程经理操作（传入工程经理谁操作归库） 如果是监理操作（传入监理谁操作出库）
        opereater --操作人
 * 描述: 指定出库
 */
export function upCameraState (params) {
    return Request.http.post('/api/city/cameras/upCameraState', params, 37, {dataType: 'json'})
}

/** ******************  修改摄像头名称  ********************/
/**
 * 创建: HWX
 * 时间: 2019年11月16日 14.02
 * 参数: id:点位id
        name:点位名称
 * 描述: 修改摄像头名称
 */
export function upPointName (params) {
    return Request.http.post('/api/Project/upPointName', params, 37, {dataType: 'json'})
}

/** ******************  上传摄像头安装图片  ********************/
/**
 * 创建: HWX
 * 时间: 2019年11月16日 14.02
 * 参数: {
            "orderCode":"076c9a77-2887-42c0-9fa7-68f60c01ec53",  订单号
            "orderNo":"20-206874",      项目单号
            "createUserNo":"00001",     用户卡号
            "createUserName":"hhhh",    用户名
            "photoList":["www.bai.com","www.bai.com"],  图片集合
            "cameraNo":"111"    摄像头编号
        }
 * 描述: 上传摄像头安装图片
 */
export function uploadPhoto (params) {
    return Request.http.post('/api/cameraorderstandard/uploadPhoto', params, 23, {dataType: 'json'})
}

/** ******************  回显图片  ********************/
/**
 * 创建: HWX
 * 时间: 2019年11月16日 14.02
 * 参数: {
            "orderCode":"076c9a77-2887-42c0-9fa7-68f60c01ec53"  订单号
        }
 * 描述: 回显图片
 */
export function getPhoto (params) {
    return Request.http.post('/api/cameraorderstandard/getPhoto', params, 23, {dataType: 'json'})
}

/** ******************  获取评价  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月28日 15:23:36
 * 参数: { orderCode: 订单号 }
 * 描述: 评价数据
 */
export function getProjectOrderEvaluateMsg (params) {
    return Request.http.post('/api/senceProtection/getProjectOrderEvaluateMsg', params, 23)
}
/** ******************  提交评价  ********************/
/**
 * 创建: YK
 * 时间: 2019年10月28日 15:23:36
 * 参数: { orderCode: 订单号, createUserNo: 用户ID, createUserName: 用户名称, star: 星级, content: 评价内容, label: 评价标签, img: 评价图片}
 * 描述: 评价数据
 */
export function saveProjectOrderEvaluate (params) {
    return Request.http.post('/api/senceProtection/saveProjectOrderEvaluate', params, 23)
}

/** ******************  指定出库  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月28日 15:23:36
 * 参数: camera:监控编号
        name:点位名称
        id:点位id
        camera_state:监控状态
        point_id,点位id
        region_id:地区id
        order_no:单号
        remark:备注
        opereater:操作者
 * 描述: 评价数据
 */
export function upCameraStateForPro (params) {
    return Request.http.post('/api/city/cameras/upCameraStateForPro', params, 37, {dataType: 'json'})
}
/** ******************  查询监控时间  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月28日 15:23:36
 * 参数: camera:监控编号
 * 描述: 查询监控时间
 */
export function getSauxiliaryInfo (params) {
    return Request.http.post('/api/city/cameras/getSauxiliaryInfo', params, 37, {dataType: 'json'})
}
/** ******************  提交时间  ********************/
/**
 * 创建: HWX
 * 时间: 2019年10月28日 15:23:36
 * 参数: {  id=副表里的id，如果大于0则更新,否则添加
            camera：监控点信息
            begin_date：开始时间
            end_data：结束时间
            interval：间隔拍摄时间
        }
 * 描述: 提交时间
 */
export function upCameraInfo (params) {
    return Request.http.post('/api/city/cameras/upCameraInfo', params, 37, {dataType: 'json'})
}
