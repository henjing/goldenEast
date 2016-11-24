import * as types from '../actions/action-types';
// 更新登录用户的信息
export function updateAdmin(info) {

    return {
        type : types.UPDATE_ADMIN,
        info
    };
}
// 侧边栏滑动
export function sidebarCollapse() {
    
    return {
        type : types.SIDEBAR_COLLAPSE
    }
}
// 修改密码弹窗
export function passwordModalToggle() {
    
    return {
        type : types.PASSWORD_MODAL_TOGGLE
    }
}
// 更新川商大盘显示数据
export function updateChuanShangBoardMarket(info) {
    
    return {
        type : types.UPDATE_CHUANSHANG_BOARD_MARKET,
        info
    }
}
// 更新川商大盘搜索状态
export function updateChuanShangBoardMarketSearch(info) {
    
    return {
        type : types.UPDATE_CHUANSHANG_BOARD_MARKET_SEARCH,
        info
    }
}
// 更新深文所大盘显示数据
export function updateShenWenSuoBoardMarket(info) {
    
    return {
        type : types.UPDATE_SHENWENSUO_BOARD_MARKET,
        info
    }
}
// 更新深文所大盘搜索状态
export function updateShenWenSuoBoardMarketSearch(info) {
    
    return {
        type : types.UPDATE_SHENWENSUO_BOARD_MARKET_SEARCH,
        info
    }
}
// 更新川商邮币卡数据
export function updateChuanShangPostCard(info) {
    
    return {
        type : types.UPDATE_CHUANSHANG_POST_CARD,
        info
    }
}
// 更新吉商邮币卡数据
export function updateJiShangPostCard(info) {
    
    return {
        type : types.UPDATE_JISHANG_POST_CARD,
        info
    }
}
// 更新川商邮币卡搜索数据
export function updateChuanShangPostCardSearch(info) {
    
    return {
        type : types.UPDATE_CHUANSHANG_POST_CARD_SEARCH,
        info
    }
}
// 更吉商邮币卡搜索数据
export function updateJiShangPostCardSearch(info) {
    
    return {
        type : types.UPDATE_JISHANG_POST_CARD_SEARCH,
        info
    }
}
// 更新代理商本月总数据
export function updateAgentOverviewData(info) {
    
    return {
        type : types.UPDATE_AGENT_OVERVIEW_DATA,
        info
    }
}
// 更新深文所微盘显示数据
export function updateShenWenSuoMicroBoardData(info) {

    return {
        type : types.UPDATE_SHENWENSUO_MICRO_BOARD,
        info
    }
}
// 更新深文所大盘搜索状态
export function updateShenWenSuoMicroBoardSearch(info) {

    return {
        type : types.UPDATE_SHENWENSUO_MICRO_BOARD_SEARCH,
        info
    }
}
// 更新吉商微盘数据
export function updateJiShangMicroBoardData(info) {

    return {
        type : types.UPDATE_JISHANG_MICRO_BOARD,
        info
    }
}
// 更新吉商微盘搜索状态
export function updateJiShangMicroBoardSearch(info) {

    return {
        type : types.UPDATE_JISHANG_MICRO_BOARD_SEARCH,
        info
    }
}
// 更新粤国际微盘数据
export function updateYueGuoJiMicroBoardData(info) {

    return {
        type : types.UPDATE_YUEGUOJI_MICRO_BOARD,
        info
    }
}
// 更新吉商微盘搜索状态
export function updateYueGuoJiMicroBoardSearch(info) {

    return {
        type : types.UPDATE_YUEGUOJI_MICRO_BOARD_SEARCH,
        info
    }
}

// 佣金数据
// 更新大盘佣金显示数据
export function updateBoardMarketBrokerageData(info) {

    return {
        type : types.UPDATE_BOARD_MARKET_BROKERAGE,
        info
    }
}
// 更新大盘佣金搜索状态
export function updateBoardMarketBrokerageSearch(info) {

    return {
        type : types.UPDATE_BOARD_MARKET_BROKERAGE_SEARCH,
        info
    }
}
// 更新微盘佣金显示数据
export function updateMicroBoardBrokerageData(info) {

    return {
        type : types.UPDATE_MICRO_BOARD_BROKERAGE,
        info
    }
}
// 更新微盘佣金搜索状态
export function updateMicroBoardBrokerageSearch(info) {

    return {
        type : types.UPDATE_MICRO_BOARD_BROKERAGE_SEARCH,
        info
    }
}
// 更新邮币卡佣金显示数据
export function updatePostCardBrokerageData(info) {

    return {
        type : types.UPDATE_POST_CARD_BROKERAGE,
        info
    }
}
// 更新邮币卡佣金搜索数据
export function updatePostCardBrokerageSearch(info) {

    return {
        type : types.UPDATE_POST_CARD_BROKERAGE_SEARCH,
        info
    }
}
// 更新大盘某用户个人详情佣金显示数据
export function updateBoardMarketBrokerageUserDetailData(info) {

    return {
        type : types.UPDATE_BOARD_MARKET_BROKERAGE_USER_DETAIL_DATA,
        info
    }
}
// 更新微盘某用户个人详情佣金显示数据
export function updateMicroBoardBrokerageUserDetailData(info) {

    return {
        type : types.UPDATE_MICRO_BOARD_BROKERAGE_USER_DETAIL_DATA,
        info
    }
}
// 更新邮币卡某用户个人详情佣金显示数据
export function updatePostCardBrokerageUserDetailData(info) {

    return {
        type : types.UPDATE_POST_CARD_BROKERAGE_USER_DETAIL_DATA,
        info
    }
}
// 更新大盘某用户个人详情佣金搜索状态
export function updateBoardMarketBrokerageUserDetailSearch(info) {

    return {
        type : types.UPDATE_BOARD_MARKET_BROKERAGE_USER_DETAIL_SEARCH,
        info
    }
}
// 更新微盘某用户个人详情佣金搜索状态
export function updateMicroBoardBrokerageUserDetailSearch(info) {

    return {
        type : types.UPDATE_MICRO_BOARD_BROKERAGE_USER_DETAIL_SEARCH,
        info
    }
}
// 更新邮币卡某用户个人详情佣金搜索状态
export function updatePostCardBrokerageUserDetailSearch(info) {

    return {
        type : types.UPDATE_POST_CARD_BROKERAGE_USER_DETAIL_SEARCH,
        info
    }
}

//更新代理商旗下用户列表数据
export function updateUserListData(info){
	return {
		type: types.UPDATE_USERLIST_DATA,
		info
	}
}
//更新代理商旗下用户列表搜索数据
export function updateUserListDataSearch(info){
	return {
		type: types.UPDATE_USERLIST_DATA_SEARCH,
		info
	}
}

//更新红包用户列表数据
export function updateHongBaoListData(info){
	return {
		type: types.UPDATE_HONGBAOLIST_DATA,
		info
	}
}

//更新红包用户列表搜索数据
export function updateHongBaoListDataSearch(info){
	return {
		type: types.UPDATE_HONGBAOLIST_DATA_SEARCH,
		info
	}
}

// 更新"信息资产分配的列表"
export function updatePeopleListWhoHaveInfoAssetData(info) {
    return {
        type : types.UPDATE_PEOPLE_LIST_WHO_HAVE_INFO_ASSET_DATA,
        info
    }
}
// 更新"信息资产分配列表"搜索数据
export function updatePeopleListWhoHaveInfoAssetDataSearch(info) {
    return {
        type : types.UPDATE_PEOPLE_LIST_WHO_HAVE_INFO_ASSET_SEARCH,
        info
    }
}

// 更新"已获得信息资产的列表"
export function updateGainPeopleListWhoHaveInfoAssetData(info) {
    return {
        type : types.UPDATE_GAIN_PEOPLE_LIST_WHO_HAVE_INFO_ASSET_DATA,
        info
    }
}
// 更新"已获得信息资产的列表"搜索数据
export function updateGainPeopleListWhoHaveInfoAssetDataSearch(info) {
    return {
        type : types.UPDATE_GAIN_PEOPLE_LIST_WHO_HAVE_INFO_ASSET_SEARCH,
        info
    }
}

//更新代理商旗下"已获授权小金"列表数据
export function updateAuthorUserListData(info){
	return {
		type: types.UPDATE_AUTHOR_USER_LIST_DATA,
		info
	}
}
//更新代理商旗下"未获授权小金"列表数据
export function updateNoAuthorUserListData(info){
	return {
		type: types.UPDATE_NO_AUTHOR_USER_LIST_DATA,
		info
	}
}

//更新代理商旗下"未获授权小金"搜索数据
export function updateNoAuthorUserListDataSearch(info){
	return {
		type: types.UPDATE_NO_AUTHOR_USER_LIST_SEARCH,
		info
	}
}
//更新代理商旗下"已获授权小金"搜索数据
export function updateAuthorUserListDataSearch(info){
	return {
		type: types.UPDATE_AUTHOR_USER_LIST_SEARCH,
		info
	}
}


//更新用户一度人脉数据
export function updateUnderUserData(info){
	return {
		type: types.UPDATE_UNDER_USER_DATA,
		info
	}
}

//更新下载中心显示数据
export function updateDownloadData(info){
	return {
		type: types.UPDATE_DOWNLOAD_DATA,
		info
	}
}
//更新下载中心搜索数据
export function updateDownloadDataSearch(info){
	return {
		type: types.UPDATE_DOWNLOAD_DATA_SEARCH,
		info
	}
}

//更新深文所入金送券列表数据
export function updateShenWenSuoVoucherListData(info){
	return {
		type: types.UPDATE_SHENWENSUO_VOUCHER_LIST_DATA,
		info
	}
}

//更新深文所入金送券搜索数据
export function updateShenWenSuoVoucherListDataListDataSearch(info){
	return {
		type: types.UPDATE__SHENWENSUO_VOUCHER_DATA_SEARCH,
		info
	}
}
//更新用户一度人脉搜索数据
export function updateUnderUserSearch(info){
	return {
		type: types.UPDATE_UNDER_USER_SEARCH,
		info
	}
}

//更新用户名下用户树结构数据
export function updateUnderUserTreeData(info){
	return {
		type: types.UPDATE_UNDER_USER_TREE_DATA,
		info
	}
}

//更新用户名下用户树结构搜索数据
export function updateUnderUserTreeSearch(info){
	return {
		type: types.UPDATE_UNDER_USER_TREE_SEARCH,
		info
	}
}

//更新已提交资料未开户的用户列表
export function updateNotToOpenAccountData(info){
	return {
		type: types.UPDATE_NOT_TO_OPEN_ACCOUNT_DATA,
		info
	}
}
//更新已开户的用户列表
export function updateHaveToOpenAccountData(info){
	return {
		type: types.UPDATE_HAVE_TO_OPEN_ACCOUNT_DATA,
		info
	}
}