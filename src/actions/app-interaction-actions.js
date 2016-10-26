import * as types from '../actions/action-types';

export function updateAdmin(info) {

    return {
        type : types.UPDATE_ADMIN,
        info
    };
}

export function sidebarCollapse() {
    
    return {
        type : types.SIDEBAR_COLLAPSE
    }
}

export function passwordModalToggle() {
    
    return {
        type : types.PASSWORD_MODAL_TOGGLE
    }
}