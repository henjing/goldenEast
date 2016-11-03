import { getUserInfoUrl, modifyPasswordUrl, getChuanShangBoardMarketListUrl, getChuanShangYBKListUrl, getShenWenSuoBoardMarketListUrl, getAgentOverviewDataUrl, getShenWenSuoMicroBoardListUrl, getJiShangYBKListUrl, getYueGuoJiMicroBoardListUrl, getJiShangMicroBoardListUrl, getPeopleWhoHaveInfoAssetUrl, getPeopleWhoHaveInfoAssetAllotUrl } from '../appConstants/urlConfig';
import commonAjax, { commonGetAjax} from '../helpers/commonAjax';
import store from '../store';
import { updateAdmin, updateChuanShangBoardMarket, updateAgentOverviewData, updateShenWenSuoBoardMarket, updateChuanShangPostCard, updateJiShangPostCard, updateShenWenSuoMicroBoardData, updateJiShangMicroBoardData, updateYueGuoJiMicroBoardData, updatePeopleListWhoHaveInfoAssetData, updatePeopleListWhoHaveInfoAssetAllotData } from '../actions/app-interaction-actions';

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
// 获取获得信息资产的用户的列表
export function getPeopleListWhoHaveInfoAssetData(config, sucCallback, failCallback) {
    return commonGetAjax(getPeopleWhoHaveInfoAssetUrl, config, function (info) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetData(info));
        if (failCallback) failCallback(info);
    });
}
// 已获得信息资产分配的用户的列表
export function getPeopleWhoHaveInfoAssetAllotData(config, sucCallback, failCallback) {
    return commonGetAjax(getPeopleWhoHaveInfoAssetAllotUrl, config, function (info) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetAllotData(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetAllotData(info));
        if (failCallback) failCallback(info);
    });
}

