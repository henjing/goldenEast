import * as types from '../actions/action-types';
import { mergeDeep} from '../helpers/helpers';

const initialState = {
    dataState : {
        data : {
            exchange_type:'',
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
        sn:'',
    },
    addState : {},
    editState : {}
};

const boardMarketUserDetailsReducer = function (state = initialState, action) {
    
    switch (action.type) {

        case types.UPDATE_SHENWENSUO_BOARD_MARKET_DETAILS :
            return Object.assign({}, state, { dataState : {...action.info }});

        case types.UPDATE_SHENWENSUO_BOARD_MARKET_DETAILS_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);

        case types.UPDATE_CHUANSHANG_BOARD_MARKET_DETAILS :
            return Object.assign({}, state, { dataState : {...action.info }});

        case types.UPDATE_CHUANSHANG_BOARD_MARKET_DETAILS_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);
        // 微盘
        case types.UPDATE_SHENWENSUO_MICRO_BOARD_DETAILS :
            return Object.assign({}, state, { dataState : {...action.info }});

        case types.UPDATE_SHENWENSUO_MICRO_BOARD_DETAILS_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);

        case types.UPDATE_JISHANG_MICRO_BOARD_DETAILS :
            return Object.assign({}, state, { dataState : {...action.info }});

        case types.UPDATE_JISHANG_MICRO_BOARD_DETAILS_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);

        case types.UPDATE_YUEGUOJI_MICRO_BOARD_DETAILS :
            return Object.assign({}, state, { dataState : {...action.info }});

        case types.UPDATE_YUEGUOJI_MICRO_BOARD_DETAILS_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);
        // 邮币卡
        case types.UPDATE_JISHANG_POST_CARD_DETAILS :
            return Object.assign({}, state, { dataState : {...action.info }});

        case types.UPDATE_JISHANG_POST_CARD_DETAILS_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);

        case types.UPDATE_CHUANSHANG_POST_CARD_DETAILS :
            return Object.assign({}, state, { dataState : {...action.info }});

        case types.UPDATE_CHUANSHANG_POST_CARD_DETAILS_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);

    }
    
    return state;
};

export default boardMarketUserDetailsReducer;