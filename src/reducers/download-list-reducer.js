import * as types from '../actions/action-types';
import { mergeDeep} from '../helpers/helpers';

const initialState = {
    dataState : {
        data : {
            list : [],
            this_page : 1,
            total : 0,
            types_count : [],
        },
        info : '',
        status : 1 //TODO TBD
    },
    searchState : {
        type_count : 0,
        page : 1,
        'search[d_begin]' : '',
        'search[d_end]' : '',
        'search[find]' : '',
        'search[type]': '',
    },
    addState : {},
    editState : {}
};

const downloadListReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case types.UPDATE_DOWNLOAD_DATA :
            return Object.assign({}, state, { dataState : {...action.info }});
        
        case types.UPDATE_DOWNLOAD_DATA_SEARCH:
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);
    }
    
    return state;
};

export default downloadListReducer;