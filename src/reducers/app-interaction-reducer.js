import * as types from '../actions/action-types';

const initialState = { 
    sidebarCollapse : false,
    modifyPasswordModalVisible : false
};

const appInteractionReducer = function (state = initialState, action) {
    
    switch (action.type) {
        
        case types.SIDEBAR_COLLAPSE :
            return Object.assign({}, state, {sidebarCollapse : !state.sidebarCollapse});
        
        case types.PASSWORD_MODAL_TOGGLE : 
            return Object.assign({}, state, {modifyPasswordModalVisible : !state.modifyPasswordModalVisible});
    }
    
    return state;
};

export default appInteractionReducer;