import * as types from '../actions/action-types';

const initialState = {
    dataState : {
        data : {
            list : [],
        },
        info : '',
        status : 1
    },
    searchState : {
        page : 1,
        'search[d_begin]' : '',
        'search[d_end]' : '',
        'search[find]' : ''
    }
};

const infoAssetAllotListReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case types.UPDATE_PEOPLE_LIST_WHO_HAVE_INFO_ASSET_DATA :
            return Object.assign({}, state, {...action.info}); 
    }
    
    return state;
};

export default infoAssetAllotListReducer;