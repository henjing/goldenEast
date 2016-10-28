import * as types from '../actions/action-types';

const initialState = {
	data : {
        redpack_date: '',
        refresh_date: '',
        shenw_coupon_date: '',
        this_month: [{}],
        this_month_fees_sum: 0,
        this_month_for_hege: 0,
        this_month_hege: false,
    },
    info : '',
    status : 1
};


const agentOverviewDataReducer = function (state = initialState, action){
	switch(action.type){
		case types.UPDATE_AGENT_OVERVIEW_DATA:
			return Object.assign({}, state, { ...action.info });
	}
    return state;
}

export default agentOverviewDataReducer;
