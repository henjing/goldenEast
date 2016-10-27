import * as types from '../actions/action-types';

const initialState = {
    data : {
        user_name : '',
        wechat_avatar : '',
        wechat_nickname : ''
    },
    info : '',
    status : 0
};

const adminReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_ADMIN :
            return Object.assign({}, initialState, {...action.info});
    }

    return state;
};

export default adminReducer;
