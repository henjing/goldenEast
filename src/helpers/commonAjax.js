import axios from 'axios';
import { loginUrl } from '../appConstants/urlConfig';
import { message } from 'antd';

export default function (url, config, sucCallback, failCallback) {
    return axios.post(url, formData(config))
        .then(data => {
            const response = data.data;
            if (response.status == 1) {
                if (sucCallback) sucCallback(response);
            }
            return response;
        }).then(response => {
            if (response.status == 0) {
                if (failCallback) failCallback(response);
            }
            return response;
        }).then(response => {
            if (response.status == -1) {
                window.location.pathname = loginUrl;
            }
        }).catch(errHandler)
}

export function commonGetAjax(url, config, sucCallback, failCallback) {
    return axios.get(url, formData(config))
        .then(data => {
            const response = data.data;
            if (response.status == 1) {
                if (sucCallback) sucCallback(response);
            }
            return response;
        }).then(response => {
            if (response.status == 0) {
                if (failCallback) failCallback(response);
            }
            return response;
        }).then(response => {
            if (response.status == -1) {
                window.location.pathname = loginUrl;
            }
        }).catch(errHandler)
}

function errHandler(err) {
    message.error('服务器错误! ' + err);
}

function formData(config) {
    // console.log('11111111111', config);
    let formData = new FormData();
    
    for (let i in config) {
        if (config[i]) formData.append(i, config[i]);
    }
    
    return formData;
}