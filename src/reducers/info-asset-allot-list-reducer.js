import * as types from '../actions/action-types';
import { mergeDeep} from '../helpers/helpers';

const initialState = {
dataState : {
        data : {
            list : [],
            this_page : 1,
            total : 0,
        },
        info : '',
        status : 1 //TODO TBD
    },
    searchState : {
        page : 1,
        'search[d_begin]' : '',
        'search[d_end]' : '',
        'search[find]' : ''
    },
    addState : {},
    editState : {}
};

const infoAssetAllotListReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case types.UPDATE_PEOPLE_LIST_WHO_HAVE_INFO_ASSET_DATA :
            return Object.assign({}, state, {...action.info});

          case types.UPDATE_PEOPLE_LIST_WHO_HAVE_INFO_ASSET_SEARCH:
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);
    }
    
    return state;
};

export default infoAssetAllotListReducer;