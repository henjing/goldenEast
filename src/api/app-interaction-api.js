import { loginUrl, modifyPasswordUrl } from '../appConstants/urlConfig';
import commonAjax, { commonGetAjax} from '../helpers/commonAjax';
import store from '../store';
import { updateAdmin } from '../actions/app-interaction-actions';

export function getAdmin(config, sucCallback, failCallback) {
    return commonAjax(loginUrl, config, function (info) {
        store.dispatch(updateAdmin(info));
        if (sucCallback) sucCallback(info);
    }, function (info) {
        store.dispatch(updateAdmin(info));
        if (failCallback) failCallback(info);
    });
}

export function modifyPassword(config, sucCallback, failCallback) {
    return commonAjax(modifyPasswordUrl, config, function (info) {
        
        if (sucCallback) sucCallback(info);
    }, function (info) {
        
        if (failCallback) failCallback(info);
    });
}

