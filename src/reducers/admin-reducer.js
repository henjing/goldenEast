import * as types from '../actions/action-types';
import { mergeDeep} from '../helpers/helpers';

const initialState = {
    data : {
        user_name : '',
        wechat_avatar : '',
        wechat_nickname : ''
    },
    info : '',
    status : 0,
    systemAuthor : {
        data : {}
    }
};

const adminReducer = function (state = initialState, action) {
    switch (action.type) {

        case types.UPDATE_ADMIN :
            return Object.assign({}, state, {...action.info});
    }

    return state;
};

export default adminReducer;
