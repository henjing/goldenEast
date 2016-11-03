import * as types from '../actions/action-types';

const initialState = {
    dataState:{
        data : {
            list : [],
            this_page : 1,
            total : 0,
        },
        info : '',
        status : 1 //TODO TBD
    }
};

const gainInfoAssetAllotListReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.UPDATE_PEOPLE_LIST_WHO_HAVE_INFO_ASSET_ALLOT_DATA :
            return Object.assign({}, state, {...action.info});
    }

    return state;
};

export default gainInfoAssetAllotListReducer;
