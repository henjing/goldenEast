import * as types from '../actions/action-types';

const initialState = {
    dataState : {},
    searchState : {},
    addState : {},
    editState : {}
};

const chuanShangReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case types.UPDATE_CHUANSHANG_BOARD_MARKET :
            return Object.assign({}, state, { dataState : {...action.info }});
    }
    
    return state;
};

export default chuanShangReducer;