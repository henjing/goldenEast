import * as types from '../actions/action-types';
import { mergeDeep} from '../helpers/helpers';

const initialState = {
    dataState : {
        data : {
            list : [],
            this_page : 1,
            total : 0,
            total_fees_sum : 0,
            total_users_sum : 0
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

const yueGuoJiMicroBoardReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case types.UPDATE_YUEGUOJI_MICRO_BOARD :
            return Object.assign({}, state, { dataState : {...action.info }});
        
        case types.UPDATE_YUEGUOJI_MICRO_BOARD_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);
    }
    
    return state;
};

export default yueGuoJiMicroBoardReducer;