
import { 
	getUserInfoUrl, 
	modifyPasswordUrl, 
	getChuanShangBoardMarketListUrl,
	getChuanShangYBKListUrl,
	getShenWenSuoBoardMarketListUrl,
	getAgentOverviewDataUrl,
	getShenWenSuoMicroBoardListUrl,
	getJiShangYBKListUrl,
	getYueGuoJiMicroBoardListUrl,
	getJiShangMicroBoardListUrl,
	getUserListDataUrl,
	getHongBaoListDataUrl,
	getPeopleWhoHaveInfoAssetUrl,
	getUserAuthorizationListUrl,
	getAllAuthorizationListUrl,
	setFollowerAuthorizationUrl,
	getPeopleWhoHaveInfoAssetAllotUrl,
	getAuthorizedUserListUrl,
	getSomeUserDetailUrl,
	postSomeUserAuthorDetailUrl,
	setSomeUserAuthorDetailUrl,
	getUserDetailUrl,
	deleteSomeUserAuthorUrl,
	getNoAuthorizedUserListUrl,
	getUserFirstClassConnectedUrl,
	registerActiveUrl,
	getGainPeopleWhoHaveInfoAssetUrl,
	underUsertreeUrl,
	underUserUrl,
	getMicroBoardBrokerageListUrl,
	getBoardMarketBrokerageListUrl,
	getYBKBrokerageListUrl,
	getBoardMarketUserDetailUrl,
	getMicroBoardUserDetailUrl,
	getPostCardUserDetailUrl,
	getDownloadDataUrl,
	getShenWenSuoVoucherListDataUrl,
	getJjsCurrentMonthPoundageUrl,
	getJjsLastMonthPoundageUrl,
	getNotToOpenAccountUrl,
	getHaveToOpenAccountUrl,
	getShenWenSuoBoardMarketDetailsListUrl,
	getChuanShangBoardMarketDetailsListUrl,
	getShenWenSuoMicroBoardDetailsListUrl,
	getJiShangMicroBoardDetailsListUrl,
	getYueGuoJiMicroBoardDetailsListUrl,
	getChuanShangYBKDetailsListUrl,
	getJiShangYBKDetailsListUrl,
	getTaiPingYangInsuranceUrl
} from '../appConstants/urlConfig';

import { 
	updateAdmin, 
	updateChuanShangBoardMarket, 
	updateAgentOverviewData, 
	updateShenWenSuoBoardMarket, 
	updateChuanShangPostCard, 
	updateJiShangPostCard, 
	updateShenWenSuoMicroBoardData, 
	updateJiShangMicroBoardData, 
	updateYueGuoJiMicroBoardData, 
	updateUserListData, 
	updateHongBaoListData, 
	updatePeopleListWhoHaveInfoAssetData, 
	updatePeopleListWhoHaveInfoAssetAllotData, 
	updateAuthorUserListData , 
	updateNoAuthorUserListData, 
	updateGainPeopleListWhoHaveInfoAssetData, 
	updateUnderUserData, 
	updateMicroBoardBrokerageData, 
	updateBoardMarketBrokerageData, 
	updatePostCardBrokerageData, 
	updateBoardMarketBrokerageUserDetailData, 
	updateMicroBoardBrokerageUserDetailData, 
	updatePostCardBrokerageUserDetailData, 
	updateDownloadData, 
	updateShenWenSuoVoucherListData, 
	updateUnderUserTreeData, 
	updateNotToOpenAccountData, 
	updateHaveToOpenAccountData, 
	updateShenWenSuoBoardMarketDetails, 
	updateChuanShangBoardMarketDetails, 
	updateShenWenSuoMicroBoardDetails, 
	updateJiShangMicroBoardDetails, 
	updateYueGuoJiMicroBoardDetails, 
	updateChuanShangPostCardDetails, 
	updateJiShangPostCardDetails, 
	updataTaiPingYangInsuranceData
} from '../actions/app-interaction-actions';

import commonAjax, { commonGetAjax, commonAjaxWithBrackets} from '../helpers/commonAjax';
import store from '../store';

// 获取登录用户的信息
export function getAdmin(config, sucCallback, failCallback) {
    return commonGetAjax(getUserInfoUrl, config, function (info) {
        store.dispatch(updateAdmin(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateAdmin(info));
        if (failCallback) failCallback(info);
    });
}
// 修改密码
export function modifyPassword(config, sucCallback, failCallback) {
    return commonAjax(modifyPasswordUrl, config, function (info) {
        
        if (sucCallback) sucCallback(info);
    }, function (info) {
        
        if (failCallback) failCallback(info);
    });
}
// 拿到川商大盘数据
export function getChuanShangBoardMarketData(config, sucCallback, failCallback) {
    return commonGetAjax(getChuanShangBoardMarketListUrl, config, function (info) {
        store.dispatch(updateChuanShangBoardMarket(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateChuanShangBoardMarket(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到川商大盘个人交易详情数据
export function getChuanShangBoardMarketDetailsData(config, sucCallback, failCallback) {
    return commonGetAjax(getChuanShangBoardMarketDetailsListUrl, config, function (info) {
        store.dispatch(updateChuanShangBoardMarketDetails(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateChuanShangBoardMarketDetails(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到代理商本月数据
export function getAgentOverviewData(config, sucCallback, failCallback) {
    return commonGetAjax(getAgentOverviewDataUrl, config, function (info) {
        store.dispatch(updateAgentOverviewData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateAgentOverviewData(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到深文所大盘数据
export function getShenWenSuoBoardMarketData(config, sucCallback, failCallback) {
    return commonGetAjax(getShenWenSuoBoardMarketListUrl, config, function (info) {
        store.dispatch(updateShenWenSuoBoardMarket(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateShenWenSuoBoardMarket(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到深文所大盘个人交易详情数据
export function getShenWenSuoBoardMarketDetailsData(config, sucCallback, failCallback) {
    return commonGetAjax(getShenWenSuoBoardMarketDetailsListUrl, config, function (info) {
        store.dispatch(updateShenWenSuoBoardMarketDetails(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateShenWenSuoBoardMarketDetails(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到川商邮币卡数据
export function getChuanShangPostCardData(config, sucCallback, failCallback) {
    return commonGetAjax(getChuanShangYBKListUrl, config, function (info) {
        store.dispatch(updateChuanShangPostCard(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateChuanShangPostCard(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到吉商邮币卡数据
export function getJiShangPostCardData(config, sucCallback, failCallback) {
    return commonGetAjax(getJiShangYBKListUrl, config, function (info) {
        store.dispatch(updateJiShangPostCard(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateJiShangPostCard(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到川商邮币卡个人交易数据
export function getChuanShangPostCardDetails(config, sucCallback, failCallback) {
    return commonGetAjax(getChuanShangYBKDetailsListUrl, config, function (info) {
        store.dispatch(updateChuanShangPostCardDetails(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateChuanShangPostCardDetails(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到吉商邮币卡个人交易数据
export function getJiShangPostCardDetails(config, sucCallback, failCallback) {
    return commonGetAjax(getJiShangYBKDetailsListUrl, config, function (info) {
        store.dispatch(updateJiShangPostCardDetails(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateJiShangPostCardDetails(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到深文所微盘数据
export function getShenWenSuoMicroBoardData(config, sucCallback, failCallback) {
    return commonGetAjax(getShenWenSuoMicroBoardListUrl, config, function (info) {
        store.dispatch(updateShenWenSuoMicroBoardData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateShenWenSuoMicroBoardData(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到吉商微盘数据
export function getJiShangMicroBoardData(config, sucCallback, failCallback) {
    return commonGetAjax(getJiShangMicroBoardListUrl, config, function (info) {
        store.dispatch(updateJiShangMicroBoardData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateJiShangMicroBoardData(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到粤国际微盘数据
export function getYueGuoJiMicroBoardData(config, sucCallback, failCallback) {
    return commonGetAjax(getYueGuoJiMicroBoardListUrl, config, function (info) {
        store.dispatch(updateYueGuoJiMicroBoardData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateYueGuoJiMicroBoardData(info));
        if (failCallback) failCallback(info);
    });
}
// 微盘个人交易详情
// 拿到深文所微盘个人交易详情数据
export function getShenWenSuoMicroBoardDetails(config, sucCallback, failCallback) {
    return commonGetAjax(getShenWenSuoMicroBoardDetailsListUrl, config, function (info) {
        store.dispatch(updateShenWenSuoMicroBoardDetails(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateShenWenSuoMicroBoardDetails(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到吉商微盘个人交易详情数据
export function getJiShangMicroBoardDetails(config, sucCallback, failCallback) {
    return commonGetAjax(getJiShangMicroBoardDetailsListUrl, config, function (info) {
        store.dispatch(updateJiShangMicroBoardDetails(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateJiShangMicroBoardDetails(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到粤国际微盘个人交易详情数据
export function getYueGuoJiMicroBoardDetails(config, sucCallback, failCallback) {
    return commonGetAjax(getYueGuoJiMicroBoardDetailsListUrl, config, function (info) {
        store.dispatch(updateYueGuoJiMicroBoardDetails(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateYueGuoJiMicroBoardDetails(info));
        if (failCallback) failCallback(info);
    });
}

// 拿到佣金数据
// 拿到大盘佣金数据
export function getBoardMarketBrokerageData(config, sucCallback, failCallback) {
    return commonGetAjax(getBoardMarketBrokerageListUrl, config, function (info) {
        store.dispatch(updateBoardMarketBrokerageData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateBoardMarketBrokerageData(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到微盘佣金数据
export function getMicroBoardBrokerageData(config, sucCallback, failCallback) {
    return commonGetAjax(getMicroBoardBrokerageListUrl, config, function (info) {
        store.dispatch(updateMicroBoardBrokerageData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateMicroBoardBrokerageData(info));
        if (failCallback) failCallback(info);
    });
}
// 拿到邮币卡佣金数据
export function getPostCardBrokerageData(config, sucCallback, failCallback) {
    return commonGetAjax(getYBKBrokerageListUrl, config, function (info) {
        store.dispatch(updatePostCardBrokerageData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updatePostCardBrokerageData(info));
        if (failCallback) failCallback(info);
    });
}
//获得大盘某个用户的佣金获得详情
export function getBoardMarketUserDetailData(config, sucCallback, failCallback) {
    return commonGetAjax(getBoardMarketUserDetailUrl, config, function (info) {
        store.dispatch(updateBoardMarketBrokerageUserDetailData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateBoardMarketBrokerageUserDetailData(info));
        if (failCallback) failCallback(info);
    })
}
//获得微盘某个用户的佣金获得详情
export function getMicroBoardUserDetailData(config, sucCallback, failCallback) {
    return commonGetAjax(getMicroBoardUserDetailUrl, config, function (info) {
        store.dispatch(updateMicroBoardBrokerageUserDetailData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateMicroBoardBrokerageUserDetailData(info));
        if (failCallback) failCallback(info);
    })
}
//获得邮币卡某个用户的佣金获得详情
export function getPostCardUserDetailData(config, sucCallback, failCallback) {
    return commonGetAjax(getPostCardUserDetailUrl, config, function (info) {
        store.dispatch(updatePostCardBrokerageUserDetailData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updatePostCardBrokerageUserDetailData(info));
        if (failCallback) failCallback(info);
    })
}

// 获取信息资产分配的列表 (小金列表)
export function getPeopleListWhoHaveInfoAssetData(config, sucCallback, failCallback) {
    return commonGetAjax(getPeopleWhoHaveInfoAssetUrl, config, function (info) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetData(info));
        if (failCallback) failCallback(info);
    });
}
// 已获取信息资产的用户的列表 (小金列表)
export function getGainPeopleListWhoHaveInfoAssetData(config, sucCallback, failCallback) {
    return commonGetAjax(getGainPeopleWhoHaveInfoAssetUrl, config, function (info) {
        store.dispatch(updateGainPeopleListWhoHaveInfoAssetData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateGainPeopleListWhoHaveInfoAssetData(info));
        if (failCallback) failCallback(info);
    });
}

//拿到居间商旗下用户列表数据
export function getUserListData(config, sucCallback, failCallback){
	return commonGetAjax(getUserListDataUrl, config, function (info) {
        store.dispatch(updateUserListData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateUserListData(info));
        if (failCallback) failCallback(info);
    });
}

//拿到红包用户列表数据
export function getHongBaoListData(config, sucCallback, failCallback){
	return commonGetAjax(getHongBaoListDataUrl, config, function (info) {
        store.dispatch(updateHongBaoListData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateHongBaoListData(info));
        if (failCallback) failCallback(info);
    });
}

// 获取当前登录用户的权限列表
export function getUserAuthorization(config, sucCallback, failCallback){
	return commonGetAjax(getUserAuthorizationListUrl, config, function (info) {
        console.log('user authorization', info);
        // store.dispatch(updateUserListData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        // store.dispatch(updateUserListData(info));
        if (failCallback) failCallback(info);
    });
}

// 获取系统提供的所有权限列表
export function getAllAuthorization(config, sucCallback, failCallback){
	return commonGetAjax(getAllAuthorizationListUrl, config, function (info) {
        // console.log('all authorization', info);
        store.dispatch(updateAdmin({
            systemAuthor : info
        }));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateAdmin({
            systemAuthor : info
        }));
        if (failCallback) failCallback(info);
    });
}

// 设置登录用户旗下小金的权限
export function setFollowerAuthorization(config, sucCallback, failCallback){
	return commonGetAjax(setFollowerAuthorizationUrl, config, function (info) {
        console.log('set follower authorization', info);
        // store.dispatch(updateUserListData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        // store.dispatch(updateUserListData(info));
        if (failCallback) failCallback(info);
    });
}

//拿到居间商旗下未授权用户列表数据
export function getNoAuthorUserListData(config, sucCallback, failCallback){
	return commonGetAjax(getNoAuthorizedUserListUrl, config, function (info) {
        store.dispatch(updateNoAuthorUserListData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateNoAuthorUserListData(info));
        if (failCallback) failCallback(info);
    });
}

//拿到居间商旗下已授权用户列表数据
export function getAuthorUserListData(config, sucCallback, failCallback){
	return commonGetAjax(getAuthorizedUserListUrl, config, function (info) {
        store.dispatch(updateAuthorUserListData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateAuthorUserListData(info));
        if (failCallback) failCallback(info);
    });
}

//获得某个用户的详情
export function getUserDetailData(config, sucCallback, failCallback) {
    return commonGetAjax(getUserDetailUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    })
}
//拿到居间商旗下某个用户的详细信息
export function getSomeUserDetail(config, sucCallback, failCallback){
	return commonGetAjax(getSomeUserDetailUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    });
}

//居间商旗下某个用户所具有的权限列表
export function getSomeUserAuthorDetail(config, sucCallback, failCallback){
	return commonAjax(postSomeUserAuthorDetailUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    });
}

// 设置"居间商旗下某个用户"所具有的权限列表
export function setSomeUserAuthorDetail(config, sucCallback, failCallback){
	return commonAjaxWithBrackets(setSomeUserAuthorDetailUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    });
}

// 删除"居间商旗下某个用户"所有权限
export function deleteSomeUserAuthor(config, sucCallback, failCallback){
	return commonAjax(deleteSomeUserAuthorUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    });
}

//获得当月注册量和激活量数据
export function getRegisterActiveData(config, sucCallback, failCallback) {
    return commonGetAjax(registerActiveUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    })
}

/***************start underUser*******************/
//获得名下用户数据树结构
export function getUnderUserTreeData(config, sucCallback, failCallback) {
    return commonGetAjax(underUsertreeUrl, config, function (info) {
    	store.dispatch(updateUnderUserTreeData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
    	store.dispatch(updateUnderUserTreeData(info));
        if (failCallback) failCallback(info);
    })
}

export function getUnderUserTreeDataTree(config, sucCallback, failCallback) {
    return commonGetAjax(underUsertreeUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    })
}

export function getUnderUserTreeOpenData(config, sucCallback, failCallback) {
    return commonGetAjax(underUsertreeUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    })
}

//获得一度人脉数据
export function getUnderUserData(config, sucCallback, failCallback) {
    return commonGetAjax(underUserUrl, config, function (info) {
    	store.dispatch(updateUnderUserData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
    	store.dispatch(updateUnderUserData(info));
        if (failCallback) failCallback(info);
    })
}
/***************end underUser*******************/
// 获取某用户的所有一度人脉用户
export function getUserFirstClassConnected(config, sucCallback, failCallback){
	return commonGetAjax(getUserFirstClassConnectedUrl, config, function (info) {
//      console.log('09909090', info);
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    });
}
// 获取某下载中心数据
export function getDownloadData(config, sucCallback, failCallback){
    return commonGetAjax(getDownloadDataUrl, config, function (info) {
        store.dispatch(updateDownloadData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateDownloadData(info));
        if (failCallback) failCallback(info);
    });
}
//拿到深文所入金送券数据
export function getShenWenSuoVoucherListData(config, sucCallback, failCallback){
	return commonGetAjax(getShenWenSuoVoucherListDataUrl, config, function (info) {
        store.dispatch(updateShenWenSuoVoucherListData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateShenWenSuoVoucherListData(info));
        if (failCallback) failCallback(info);
    });

}

//获得当前代理商旗下的某个代理商本月的手续费详情列表
export function getJjsCurrentMonthPoundageData(config, sucCallback, failCallback){
	return commonGetAjax(getJjsCurrentMonthPoundageUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    });

}
//获得当前代理商旗下的某个代理商上月的手续费详情列表
export function getJjsLastMonthPoundageData(config, sucCallback, failCallback){
	return commonGetAjax(getJjsLastMonthPoundageUrl, config, function (info) {
        if (sucCallback) sucCallback(info);
    }, function (info) {
        if (failCallback) failCallback(info);
    });

}


//获取已提交资料未开户的用户列表
export function getNotToOpenAccountData(config, sucCallback, failCallback){
	return commonGetAjax(getNotToOpenAccountUrl, config, function (info) {
        store.dispatch(updateNotToOpenAccountData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateNotToOpenAccountData(info));
        if (failCallback) failCallback(info);
    });
}

//获取已开户的用户列表
export function getHaveToOpenAccountData(config, sucCallback, failCallback){
	return commonGetAjax(getHaveToOpenAccountUrl, config, function (info) {
        store.dispatch(updateHaveToOpenAccountData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateHaveToOpenAccountData(info));
        if (failCallback) failCallback(info);
    });
}

// start 保险交易列表 
export function getTaiPingYangInsuranceData(config, sucCallback, failCallback){
	return commonGetAjax(getTaiPingYangInsuranceUrl, config, function (info) {
        store.dispatch(updataTaiPingYangInsuranceData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updataTaiPingYangInsuranceData(info));
        if (failCallback) failCallback(info);
    });
}
// end 保险交易列表 
