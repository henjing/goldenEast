import { getUserInfoUrl, modifyPasswordUrl, getChuanShangTransactionListUrl } from '../appConstants/urlConfig';
import commonAjax, { commonGetAjax} from '../helpers/commonAjax';
import store from '../store';
import { updateAdmin, updateChuanShang } from '../actions/app-interaction-actions';

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
// 拿到川商数据
export function getChuanShangData(config, sucCallback, failCallback) {
    return commonGetAjax(getChuanShangTransactionListUrl, config, function (info) {
        store.dispatch(updateChuanShang(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateChuanShang(info));
        if (failCallback) failCallback(info);
    });
}

