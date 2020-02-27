import Request from '@rx/config/api-config'

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
/** ******************  结果按钮显示 ********************/
/**
 * 创建: YK
 * 时间: 2020年1月9日15:11:50
 * 参数: userCard：人员卡号
 * 描述: 获取按钮颜色和文字
 */
export function getExcellentGoodModeratePoor (params) {
    return Request.http.post('/api/stayStayResult/getExcellentGoodModeratePoor', params, 34, { dataType: 'json' })
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
/** ******************  二段人事培训接口(董露露接口)  ********************/
/**
 * 创建: YK
 * 时间:2019年1月9日15:58:43
 * 参数: cardNo 卡号
 * 描述: 获取培训信息
 */
export function getLatelyClassTrainResultByCardNo (params) { return Request.http.get('/api/train/trainUserResult/getLatelyClassTrainResultByCardNo', params, 100) }

/** ******************  二段成就培训接口(董露露接口)  ********************/
/**
 * 创建: YK
 * 时间:2019年1月9日15:58:43
 * 参数: cardNo 卡号
 * 描述: 获取培训信息
 */
export function getTrainProcess (params) { return Request.http.get('/a/train/trainUser/getTrainProcess', params, 101) }

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


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 保存回访数据
 */
export function saveWorkLog (params) {
    return Request.http.post(
        '/api/personelPersonel/saveWorkLog',
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
 * 描述: 保存回访数据
 */
export function addChat (params) {
    return Request.http.post(
        '/hrapi/actionapi/DepartTransaction/AddChat',
        params,
        42
    )
}


/** ******************  二段  ********************/
/**
 * 创建: 闫传强
 * 时间:2019年11月16日13:38:14
 * 参数:
 * 描述: 保存回访数据
 */
export function saveUserHandInfo (params) {
    return Request.http.post(
        '/api/personelPersonel/saveUserHandInfo',
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
 * 描述: 保存回访数据
 */
export function getUserWorkLogByUserno (params) {
    return Request.http.post(
        '/api/personelPersonel/getUserWorkLogByUserno',
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
 * 描述: 得到用户角色姓名和级别
 */
export function getUserjibieInfo (params) {
    return Request.http.post(
        '/api/personelPersonel/getUserjibieInfo',
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
 * 描述: 得到用户角色姓名和级别
 */
export function cancelAdjustment (params) {
    return Request.http.post(
        '/api/stayStaySalary/cancelAdjustment',
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
 * 描述: 得到用户角色姓名和级别
 */
export function submitGainFine (params) {
    return Request.http.post(
        '/api/EventPlatform/LaunchEventAndOver',
        params,
        45,
        { dataType: 'json' }
    )
}

/** ******************  人二段级别获取各项数据 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: user_card_no 卡号
 * 描述: 数据获取
 */
export function UseResultgetUseResultMonthReview (params) {
    return Request.http.post('/api/UseResult/getUseResultMonthReview', params, 34, { dataType: 'json' })
}

/** ******************  人二段级别获取各项数据 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: user_card_no 卡号
 * 描述: 数据获取
 */
export function getUsejibie (params) {
    return Request.http.post('/api/UseResult/getUsejibie', params, 34, { dataType: 'json' })
}
/** ******************  人二段阶段获取级别数据 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: user_card_no 卡号
 * 描述: 获取级别
 */
export function getPersonnelPersonnelStage (params) {
    return Request.http.post('/api/UseResult/getPersonnelPersonnelStage', params, 34, { dataType: 'json' })
}
/** ******************  人三段阶段获取级别完工数据 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: user_card_no 卡号
 * 描述: 获取级别
 */
export function getPersonnelPersonnelLevelThreeCompleted (params) {
    return Request.http.post('/api/personelPersonel/getPersonnelPersonnelLevelThreeCompleted', params, 34, { dataType: 'json' })
}
/** ******************  人三段阶段获取级别订单数据 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: user_card_no 卡号
 * 描述: 获取订单
 */
export function getPersonnelPersonnelLevelThreeProcess (params) {
    return Request.http.post('/api/personelPersonel/getPersonnelPersonnelLevelThreeProcess', params, 34, { dataType: 'json' })
}
/** ******************  人三段阶段获取级别好评数据 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: user_card_no 卡号
 * 描述: 获取好评
 */
export function getPersonnelPersonnelLevelThreeEvaluation (params) {
    return Request.http.post('/api/personelPersonel/getPersonnelPersonnelLevelThreeEvaluation', params, 34, { dataType: 'json' })
}
/** ******************  状处理正常提交按钮 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: {
            .cardId:    177        //写死177
            .createUserMan: "公共账号"   //创建者名称
            .createdBy: "01013120"  //创建者卡号
            .delFlag:   0 //写死0
            .handType:  1    //写死1
            .hrType:    1  //1代表内部人事
            .modifyBy:  "01013120"   //创建者卡号
            .outline:   "测试"    //描述
            .remarks:   "01013120公共账号测试00220005"  //描述
            .taskStatus:    1  //写死1
            .title: "正常"  //选中的标签
            .userCard:  "00220005"   //用户卡号
        }
 * 描述: 提交正常
 */
export function handleSaveUserHandInfo (params) {
    return Request.http.post('/api/personelPersonel/saveUserHandInfo', params, 34, { dataType: 'json' })
}
/** ******************  状处理正常提交按钮 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: {
            departName:工程部   //部门名称工程部
            postId: 817 //创建者角色级别u_jibie
            postName: 公共账号  //创建者角色名称
            sysType: 工程人事系统回访   //工程部人事系统回访
            levelType: 0
            evaluate: 0     //0无，1优，2良，3中，4差
            text: 测试  //回访内容
            cardNo: 00220005    //用户卡号
            loginCardNo: 01013120   //登录卡号
            revisitDays: 2020-01-08 15:18:36    //回访时间
            checkMainID: 4  //部门表主键4
            regionId: 95    //地区编号
        }
 * 描述: 提交正常
 */
export function AddChat (params) {
    return Request.http.post('/hrapi/actionapi/DepartTransaction/AddChat', params, 42)
}
/** ******************  状处理正常提交按钮 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: {
            cardId: 177 //177写死
            createUserMan: "公共账号"   //创建者名称
            createdBy: "01013120"   //创建者卡号
            delFlag: 0  //写死0
            handType: 1 //写死1
            hrType: 1   //写死1
            modifyBy: "01013120"    //修改者卡号
            operatorId: "01013120"  //操作者卡号
            operatorName: "公共账号"    //创建者名称
            outline: "测试" //备注
            personId: "00220005"    //用户卡号
            remarks: "01013120公共账号测试00220005"//哪个卡号哪个名字怎么用户了
            taskStatus: 1   //写死1
            title: "正常"   //选中的标签
            updateId: "01013120"    //修改 人卡号
            userCard: "00220005"    //用户卡号
        }
 * 描述: 提交正常
 */
export function saveUserHandInfoMySql (params) {
    return Request.http.post('/api/personelPersonel/saveUserHandInfoMySql', params, 34, { dataType: 'json' })
}
/** ******************  状处理正常提交按钮 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: {
            cardId: 177 //177写死
            createUserMan: "公共账号"   //创建者名称
            createdBy: "01013120"   //创建者卡号
            delFlag: 0  //写死0
            handType: 1 //写死1
            hrType: 1   //写死1
            modifyBy: "01013120"    //修改者卡号
            operatorId: "01013120"  //操作者卡号
            operatorName: "公共账号"    //创建者名称
            outline: "测试" //备注
            personId: "00220005"    //用户卡号
            remarks: "01013120公共账号测试00220005"//哪个卡号哪个名字怎么用户了
            taskStatus: 1   //写死1
            title: "正常"   //选中的标签
            updateId: "01013120"    //修改 人卡号
            userCard: "00220005"    //用户卡号
        }
 * 描述: 提交正常
 */
export function pushUserHandToFinance (params) {
    return Request.http.post('/api/personelPersonel/pushUserHandToFinance', params, 34, { dataType: 'json' })
}
/** ******************  状处理奖罚提交按钮 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: {
            em_Sponsor: 01013120   //操作人卡号
            em_Executor: 00220005   //用户卡号
            em_Content: 付郭鹏韬,测试奖罚接口,奖金1,积分0   //具体描述
            rp_Money: 1 //金钱
            em_theme: 郭鹏韬奖罚工资:1  //标题描述
            rp_Method: 2    //1现金，2工资，可不传，默认为工资
        }
 * 描述: 提交奖罚
 */
export function LaunchEventAndOver (params) {
    return Request.http.post('/api/EventPlatform/LaunchEventAndOver', params, 46, { dataType: 'json' })
}
/** ******************  状处理培训提交按钮 ********************/
/**
 * 创建: yangkai
 * 时间: 2019年12月24日13:38:14
 * 参数: {
            em_Sponsor: 01013120   //操作人卡号
            em_Executor: 00220005   //用户卡号
            em_Content: 付郭鹏韬,测试奖罚接口,奖金1,积分0   //具体描述
            rp_Money: 1 //金钱
            em_theme: 郭鹏韬奖罚工资:1  //标题描述
            rp_Method: 2    //1现金，2工资，可不传，默认为工资
        }
 * 描述: 提交培训
 */
export function pushTrainUser (params) {
    return Request.http.post('/a/api/11/4/g199999/3/pushTrainUser', params, 101, { dataType: 'json' })
}


export function getAchievementImprint (params) {
    return Request.http.post('/api/personelPersonel/getAchievementImprint', params, 34, { dataType: 'json' })
}


export function getAllAchievement (params) {
    return Request.http.post('/api/personelPersonel/getAllAchievement', params, 34, { dataType: 'json' })
}

export function getAllThreeAchievement (params) {
    return Request.http.post('/api/personelPersonel/getAllThreeAchievement', params, 34, { dataType: 'json' })
}


export function getIntegralTwoData (params) {
    return Request.http.post('/api/personelPersonel/getIntegralTwoData', params, 34, { dataType: 'json' })
}

export function getIntegralThreeData (params) {
    return Request.http.post('/api/personelPersonel/getIntegralThreeData', params, 34, { dataType: 'json' })
}
/** ******************  二段绩效  ********************/
/**
 * 创建: Yk
 * 时间: 2020-1-17
 * 参数: { int diqu, 分司ID }
 * 描述: 获取绩效
 */
export function getUserManageMonthEvaluation (params) {
    return Request.http.post('/api/personelPersonel/getUserManageMonthEvaluation', params, 34, { dataType: 'json' })
}


// export function getIntegralTwoData (params) {
//     return Request.http.post('/api/personelPersonel/getIntegralTwoData', params, 34, { dataType: 'json' })
// }

// export function getIntegralTwoData (params) {
//     return Request.http.post('/api/personelPersonel/getIntegralTwoData', params, 34, { dataType: 'json' })
// }
/** ******************  人 状态=》状态 优良差 ********************/
/**
 * 参数: 传卡号user_card_no
 * 描述: 获取按钮颜色和文字
 */
export function pushChengRenBusiness (params) {
    return Request.http.post('/api/SalaryScheduledController/pushChengRenBusiness',
        params, 34, { dataType: 'json' })
}
