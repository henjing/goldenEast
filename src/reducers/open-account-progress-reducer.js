import * as types from '../actions/action-types';
import { mergeDeep} from '../helpers/helpers';

const initialState = {
    dataState : {
        data : {
            list : [],
            this_page : 1,
            total : 0,
            today_users_sum : '',
            total_users_sum : '',
        },
        info : '',
        status : 1 //TODO TBD
    },
    searchState : {
        page : 1,
        'search[find]': '',
		'search[d_begin]': '',
		'search[d_end]': '',
		'search[type]': 6, //默认为6，是深文所
    },
    openState: false,
};

const openAccountProgressReducer = function (state = initialState, action) {
    switch (action.type) {
        
        case types.UPDATE_NOT_TO_OPEN_ACCOUNT_DATA :
            return Object.assign({}, state, { dataState : {...action.info }});
            
        case types.UPDATE_HAVE_TO_OPEN_ACCOUNT_DATA :
            return Object.assign({}, state, { dataState : {...action.info }});
        
        case types.UPDATE_OPEN_ACCOUNT_PROGRESS_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);
    }
    
    return state;
};

export default openAccountProgressReducer;