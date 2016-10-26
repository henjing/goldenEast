import * as types from '../actions/action-types';

const initialState = {
    info : {
        user_name : '',
        wechat_avatar : ''
    },
    status : 0
};

const adminReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_ADMIN :
            return Object.assign({}, state, {...action.info});
    }

    return state;
};

export default adminReducer;
