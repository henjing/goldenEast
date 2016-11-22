import * as types from '../actions/action-types';
import { mergeDeep} from '../helpers/helpers';

const initialState = {
    dataState : {
        data : {
            list: [],
			user: [],
			route: [],
			total: 0,
			page: 1,
        },
        info : '',
        status : 1 //TODO TBD
    },
    searchState : {
        "search[find]": '',
		"sn": '',
		"page": 1
    },
    addState : {},
    editState : {}
};

const underUserTreeReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case types.UPDATE_UNDER_USER_TREE_DATA:
            return Object.assign({}, state, { dataState : {...action.info }});
        
        case types.UPDATE_UNDER_USER_TREE_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);
    }
    
    return state;
};

export default underUserTreeReducer;