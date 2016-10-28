import { getUserInfoUrl, modifyPasswordUrl, getChuanShangBoardMarketListUrl, getChuanShangYBKListUrl, getShenWenSuoBoardMarketListUrl, getAgentOverviewDataUrl, getShenWenSuoMicroBoardListUrl, getJiShangYBKListUrl, getYueGuoJiMicroBoardListUrl } from '../appConstants/urlConfig';
import commonAjax, { commonGetAjax} from '../helpers/commonAjax';
import store from '../store';
import { updateAdmin, updateChuanShangBoardMarket, updateAgentOverviewData, updateShenWenSuoBoardMarket } from '../actions/app-interaction-actions';

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

