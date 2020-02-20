import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: 陈旭
 * 时间: 2019-10-21
 * 参数:
 * 描述: 获取留用一段人事数据
 */
export function GetInternalUserListByCityId (params) {
    return Request.http.post(
        '/api/PersonLeaven/GetInternalUserListByCityId',
        params,
        34,
        { dataType: 'json' }
    )
}
/** ******************  一段  ********************/
/**
 * 创建: 闫传强
 * 时间: 2019年11月20日15:47:22
 * 参数:
 * 描述: 一段获取
 */
export function getStayStayProcessOrderTypeDetailYearMonth (params) {
    return Request.http.post('/api/salarySalary/getStayStayProcessOrderTypeDetailYearMonth',
        params,
        34,
        { dataType: 'json' })
}
/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用二段人事信息数据
 */
export function getUseUseTwoEndUserDetail (params) {
    return Request.http.post(
        '/api/PersonnelEmploying/getUse_Use_TwoEnd_UserDetail',
        params,
        34,
        { dataType: 'json' }
    )
}

/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用二段人事{攻坚}数据
 */
export function selectComCareInfoUseHuman (params) {
    return Request.http.get(
        '/keep/selectComCareInfoUseHuman',
        params,
        29
    )
}

/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用二段人事{通知}数据
 */
export function getAppNoticeGroup (params) {
    return Request.http.get(
        '/actionapi/JiGuang/GetAppNoticeGroup',
        params,
        27
    )
}

/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用三段{普级}和三段{管级}信息数据
 */
export function getAllInternalUserLevelByUserCard (params) {
    return Request.http.post(
        '/api/PersonnelEmploying/getAllInternalUserLevelByUserCard',
        params,
        34,
        { dataType: 'json' }
    )
}
/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用三段人事{攻坚}数据
 */
export function getUseUseThreeEndTacklingDetail (params) {
    return Request.http.get(
        '/keep/selectComCareInfoUseHuman',
        params,
        29
    )
}

/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用三段人事{培训}数据
 */
export function getUseUseThreeEndTrainingetail (params) {
    return Request.http.post(
        '/api/PersonnelEmploying/getUse_Use_ThreeEnd_Trainingetail',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用三段人事{培训}数据
 */
export function getUseUseThreeEndProofDetail (params) {
    return Request.http.post(
        '/api/PersonnelEmploying/getUse_Use_ThreeEnd_ProofDetail',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用三段人事{通知}数据
 */
export function GetAppNoticeGroup (params) {
    return Request.http.get(
        '/actionapi/JiGuang/GetAppNoticeGroup',
        params,
        27
    )
}


/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用三段{普级}和三段{管级}信息数据
 */
export function getUseUseThreeEndDealWithDetail (params) {
    return Request.http.post(
        '/api/PersonnelEmploying/getUse_Use_ThreeEnd_DealWithDetail',
        params,
        34,
        { dataType: 'json' }
    )
}

/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用三段人事{入口}数据
 */
export function getUseUseThreeEndEntranceDetail (params) {
    return Request.http.get(
        '/Recruit/ZPPin/PersonnelEntrance',
        params,
        27
    )
}


/**
 * 创建: 陈旭
 * 时间: 2019-10-21
 * 参数:
 * 描述: 查询本月留竣工提成数据
 */
export function stayCompleteData (params) {
    return Request.http.post('/api/PersonLeaven/stayCompleteData', params, 34, { dataType: 'json' })
}


/**
 * 创建: 陈旭
 * 时间: 2019-10-21
 * 参数: userCard：人员卡号
 * 描述: 查询人员结果各模块状态
 */
export function GetUserTradeDetailByUserCard (params) {
    return Request.http.post('/api/PersonLeaven/GetUserTradeDetailByUserCard', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月12日18:53:04
 * 参数: userCard：人员卡号
 * 描述: 查询人员结果各模块状态
 */
export function getStayStaySalaryDetail (params) {
    return Request.http.post('/api/stayStaySalary/getStayStaySalaryDetail', params, 34, { dataType: 'json' })
}

/** ******************  人板块二段增值服务获取 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月26日13:38:14
 * 参数:
 * 描述: 获取增值服务
 */
export function getValueAddServicesBySupervisionCard (params) {
    return Request.http.get('/api/valueAdd/getValueAddServicesBySupervisionCard', params, 23)
}

/**
 * 创建: 陈旭
 * 时间: 2019-10-21
 * 参数: userCard：人员卡号
 * 描述: 查询人员结果各模块状态
 */
export function GetByRoleOrderList (params) {
    return Request.http.post('/api/PersonLeaven/GetUserTradeDetailByUserCards', params, 34, { dataType: 'json' })
}

/**
 * 创建: 闫传强
 * 时间: 2019年11月6日15:11:50
 * 参数: userCard：人员卡号
 * 描述: 获取留-留-结果详情
 */
export function getStayStayResultDetail (params) {
    return Request.http.post('/api/stayStayResult/getStayStayResultDetail', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月6日15:11:50
 * 参数: userCard：人员卡号
 * 描述: 获取留-留-结果评价详情
 */
export function getStayStayResultEvaluation (params) {
    return Request.http.post('/api/stayStayResult/getStayStayResultEvaluation', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月7日15:11:50
 * 参数: userCard：人员卡号
 * 描述: 获取留-留-结果详情
 */
export function getStayStayManagementDetail (params) {
    return Request.http.post('/api/stayStayManagement/getStayStayManagementDetail', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月7日15:11:50
 * 参数: userCard：人员卡号
 * 描述: 获取留-留-结果评价详情
 */
export function getStayStayManagementEvaluation (params) {
    return Request.http.post('/api/stayStayManagement/getStayStayManagementEvaluation', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月8日18:00:52
 * 参数: userCard：人员卡号
 * 描述: 获取留-留-过程界面详情
 */
export function getStayStayProcessDetail (params) {
    return Request.http.post('/api/stayStayProcess/getStayStayProcessDetail', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月9日13:47:14
 * 参数: userCard：人员卡号
 * 参数: order_type_id：订单类型id
 * 描述: 获取留-留-过程界面详情
 */
export function getStayStayProcessOrderTypeDetail (params) {
    return Request.http.post('/api/stayStayProcess/getStayStayProcessOrderTypeDetail', params, 34, { dataType: 'json' })
}

/**
 * 创建: 闫传强
 * 时间: 2019年11月9日13:47:14
 * 参数: userCard：人员卡号
 * 参数: order_type_id：订单类型id
 * 描述: 获取留-留-薪酬界面详情
 */
export function getStayStaySalaryBonusDetail (params) {
    return Request.http.post('/api/stayStaySalary/getStayStaySalaryBonusDetail', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月9日13:47:14
 * 参数: userCard：人员卡号
 * 参数: order_type_id：订单类型id
 * 描述: 获取留-留-薪酬历史详情
 */
export function getStayStaySalaryHistoryDetail (params) {
    return Request.http.post('/api/stayStaySalary/getStayStaySalaryHistoryDetail', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月9日13:47:14
 * 参数: userCard：人员卡号
 * 参数: order_type_id：订单类型id
 * 描述: 薪酬调整
 */
export function saveUserDoubleSalary (params) {
    return Request.http.post('/api/stayStaySalary/saveUserDoubleSalary', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月9日13:47:14
 * 参数: userCard：人员卡号
 * 参数: order_type_id：订单类型id
 * 描述: 获取留-留-人事界面详情
 */
export function getSatySatyPersonnelDetail (params) {
    return Request.http.post('/api/satySatyPersonnel/getSatySatyPersonnelDetail', params, 34, { dataType: 'json' })
}


/**
 * 创建: 闫传强
 * 时间: 2019年11月9日13:47:14
 * 参数: userCard：人员卡号
 * 参数: order_type_id：订单类型id
 * 描述: 获取留-留-过程界面详情
 */
export function getStayStayProcessOrderTypeDetailsafety (params) {
    return Request.http.post('/api/stayStayProcess/getStayStayProcessOrderTypeDetail', params, 34, { dataType: 'json' })
}

/**
 * 创建: 闫传强
 * 时间: 2019年11月9日13:47:14
 * 参数: userCard：人员卡号
 * 参数: order_type_id：订单类型id
 * 描述: 获取留-留-过程界面详情
 */
export function getStayStayProcessOrderTypeDetailenvironment (params) {
    return Request.http.post('/api/stayStayProcess/getStayStayProcessOrderTypeDetail', params, 34, { dataType: 'json' })
}

/**
 * 创建: 闫传强
 * 时间: 2019年11月9日13:47:14
 * 参数: userCard：人员卡号
 * 参数: order_type_id：订单类型id
 * 描述: 获取留-留-过程界面详情
 */
export function getStayStayProcessOrderTypeDetailimage (params) {
    return Request.http.post('/api/stayStayProcess/getStayStayProcessOrderTypeDetail', params, 34, { dataType: 'json' })
}

/**
 * 创建: 闫传强
 * 时间: 2019-10-21
 * 参数:
 * 描述: 查询本月留竣工提成数据
 */
export function loadInternelUserThreeStage (params) {
    return Request.http.post('/api/PersonLeaven/loadInternelUserThreeStage', params, 34, { dataType: 'json' })
}


/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取用用三段{普级}和三段{管级}信息数据
 */
export function getUserAllLevelCount (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getUserAllLevelCount',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  三段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取留-留-人事-四段通知数据
 */
export function getUserNoticeDetail (params) {
    return Request.http.get(
        '/actionapi/JiGuang/GetAppNoticeList',
        params,
        27
    )
}
/** ******************  四段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取留-留-人事普级四段
 */
export function fourGeneralLevelDetail (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/fourGeneralLevelDetail',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  四段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年10月24日15:58:43
 * 参数:
 * 描述: 获取留-留-人事管级四段
 */
export function fourManageLevelDetail (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/fourManageLevelDetail',
        params,
        34,
        { dataType: 'json' }
    )
}

/** ******************  四段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 修改管理级别
 */
export function saveInternelUserLevelByManage (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/saveInternelUserLevelByManage',
        params,
        34,
        { dataType: 'json' }
    )
}

/** ******************  一段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月19日09:57:33
 * 参数:
 * 描述: 得到一段地区
 */
export function selectCompanyByCityId (params) {
    return Request.http.get(
        '/company/selectCompanyByCityId',
        params,
        29
    )
}
/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 获取工人详情
 */
export function getWorkerDetails (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getWorkerDetails',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 获取工人详情
 */
export function getWorkerOneDetail (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getWorkerOneDetail',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 获取工人详情
 */
export function getFourRsglWorkerNumberAndName (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getFourRsglWorkerNumberAndName',
        params,
        34,
        { dataType: 'json' }
    )
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 获取工人详情
 */
export function getFourRsglWorkerNumberAndNameBetween (params) {
    return Request.http.post(
        '/api/satySatyPersonnel/getFourRsglWorkerNumberAndNameBetween',
        params,
        34,
        { dataType: 'json' }
    )
}
/** ******************  用板块二段结果 过程 管理 月评获取 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数:
 * 描述: 月评数据获取
 */
export function UseResultgetUseResultMonthReview (params) {
    return Request.http.post('/api/UseResult/getUseResultMonthReview', params, 34, { dataType: 'json' })
}
/** ******************  用板块二段结果月评提交 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: {
    "evaluateType":"5",5竣工，20团队竣工，22订单
    "evaluateResult":  "3", 优良中差的评定，先写死为3
    "evaluateMoney":  " 100", 奖罚金额
    "evaluateIntegral": "0", 积分，先写死为0
    "remarks"         :"测试", 备注
    "delFlag"        : "0", 0
    "evaluateYear"   :"2019", 评价年份
    "evaluateMonth"  :"12", 评价月份
    "evaluateWeek"   :"0", 评价周，无法得到可写死为0
    "personId"  :"00220005", 被评价人卡号
    "operatorId"   :  "00220005", 操作人卡号
    "evaluateFlag"  : "2", 1周评，2月评
    "actualCount"   :"20", 实际完成
    "actualNo"      :"0",无效个数，写死0
    "stanardCount":"5" 标准完成
}
 * 描述: 月评提交
 */
export function saveMonthReview (params) {
    return Request.http.post('/api/UseResult/saveMonthReview', params, 34, { dataType: 'json' })
}
/** ******************  获取月评 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月25日13:38:14
 * 参数:{ "user_card_no":"00220005" } 用户卡号
 * 描述: 月评数据获取
 */
export function getMonthReviewRecording (params) {
    return Request.http.post('/api/UseResult/getMonthReviewRecording', params, 34, { dataType: 'json' })
}
/** ******************  处理的推送 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月25日13:38:14
 * 参数:{
    "outline":"对黄文辛，11.01-11.30月过程/结果/管理版块评估如下：接单标准20万：，实际0万：，具体奖罚变动为-1000元。付出就会有回报，不负自己！——瑞祥工程部",  //描述
    "hrType":"1",//1代表内部人事，写死1
    "handType":"17", //16结果评价 17过程评价 18管理评价
    "taskStatus":"1", //任务执行状态（0未完成任务1已完成2任务执行中）1
    "gainFine":"-1000", //奖罚金额
    "integral":"0", //积分写死为0
    "userCard":"00220005", //被评价人卡号
    "createdBy":"00220005", //创建人卡号
    "modifyBy":"00220005", //修改人卡号
    "remarks":"对黄文辛，11.01-11.30月过程/结果/管理版块评估如下：接单标准20万：，实际0万：，具体奖罚变动为-1000元。付出就会有回报，不负自己！——瑞祥工程部",  //描述
    "delFlag":"0",//写死0
    "createUserMan":"杜文韬" //当前邓丽用户名
    }
 * 描述:推送提交
 */
export function saveUserHandInfo (params) {
    return Request.http.post('/api/personelPersonel/saveUserHandInfo', params, 34, { dataType: 'json' })
}
