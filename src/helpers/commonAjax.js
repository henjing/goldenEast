import axios from 'axios';
import { loginPage } from '../appConstants/urlConfig';
import { message } from 'antd';
import qs from 'qs';

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
                window.location.pathname = loginPage;
            }
        }).catch(errHandler)
}

export function commonGetAjax(url, config, sucCallback, failCallback) {
       return axios.get(url, {
           params : config
       })
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
                window.location.pathname = loginPage;
            }
        }).catch(errHandler)
}

function errHandler(err) {
    message.error('服务器错误! ' + err,5);
    console.log(err)
}

function formData(config) {
    console.log('11111111111', config);
    let formData = new FormData();
    
    for (let i in config) {
        if (config[i]) formData.append(i, config[i]);
    }
    
    return formData;
}

export function commonAjaxWithBrackets(url, config, sucCallback, failCallback) {
    return axios.post(url, qs.stringify(config), {
        arrayFormat : 'brackets'
    }, {
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        }
    })
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
                window.location.pathname = loginPage;
            }
        }).catch(errHandler)
}