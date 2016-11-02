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








