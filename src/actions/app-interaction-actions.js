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
// 更新川商大盘数据
export function updateChuanShangBoardMarket(info) {
    
    return {
        type : types.UPDATE_CHUANSHANG_BOARD_MARKET,
        info
    }
}
// 更新川商邮币卡数据
export function updateChuanShangYBK(info) {
    
    return {
        type : types.UPDATE_CHUANSHANG_YBK,
        info
    }
}