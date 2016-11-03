import * as types from '../actions/action-types';

const initialState = {
    dataState:[],
};

const particularsBtnStateReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.UPDATE_PARTICULARS_BTN_DATA :
            return Object.assign({}, state, {...action.info});
    }

    return state;
};

export default particularsBtnStateReducer;
