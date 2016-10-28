import * as types from '../actions/action-types';
//import { mergeDeep} from '../helpers/helpers';

const initialState = {
	dataState: {
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
	}
}

const agentOverviewDataReducer = function (state = initialState, action){
	switch(action.types){
		case types.UPDATE_AGENT_OVERVIEW_DATA:
			return Object.assign({}, state, { dataState : {...action.info }});
	}
}

export default agentOverviewDataReducer;
