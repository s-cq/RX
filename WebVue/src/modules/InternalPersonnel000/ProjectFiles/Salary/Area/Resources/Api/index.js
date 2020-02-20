import Request from '@rx/config/api-config'

/** ******************  一段  ********************/
/**
 * 创建: lianhaiwei
 * 时间: 2018-05-16
 * 参数: { int diqu, int stage, int startnumber, int endnumber }
 * 描述: 测试接口
 */
export function getManagerLeftList (params) {
    return Request.http.get('/api/test/paging', params, 2)
}


/** ******************  一段  ********************/
/**
 * 创建: 闫传强
 * 时间: 2019年11月20日15:47:22
 * 参数:
 * 描述: 一段获取
 */
export function getInternalSalaryList (params) {
    return Request.http.post('/api/salarySalary/getInternalSalaryList',
        params,
        34,
        { dataType: 'json' })
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间: 2019年11月20日15:47:22
 * 参数:
 * 描述: 二段获取
 */
export function getInternalSalaryByUserCard (params) {
    return Request.http.post('/api/salarySalary/getInternalSalaryByUserCard',
        params,
        34,
        { dataType: 'json' })
}

/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间: 2019年11月20日15:47:22
 * 参数:
 * 描述: 二段获取
 */
export function updateProvideSalary (params) {
    return Request.http.post('/api/salarySalary/update_ProvideSalary',
        params,
        34,
        { dataType: 'json' })
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间: 2019年11月20日15:47:22
 * 参数:
 * 描述: 推送到投资财务
 */
export function pushCheckedSalaryToTouziCaiwu (params) {
    return Request.http.post('/api/salarySalary/pushCheckedSalaryToTouziCaiwu',
        params,
        34,
        { dataType: 'json' })
}


/** ******************  一段  ********************/
/**
 * 创建: 陈旭
 * 时间: 2019-10-21
 * 参数:
 * 描述: 获取留用一段人事数据
 */
export function GetInternalUserListByCityId (params) {
    return Request.http.post('/api/PersonLeaven/GetInternalUserListByCityId', params, 34, { dataType: 'json' })
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
 * 描述: 获取用用三段人事{入口}数据
 */
export function getUseUseThreeEndEntranceDetail (params) {
    return Request.http.get(
        '/Recruit/ZPPin/PersonnelEntrance',
        params,
        27
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


