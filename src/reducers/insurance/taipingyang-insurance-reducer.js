import * as types from '../../actions/action-types';
import { mergeDeep} from '../../helpers/helpers';

const initialState = {
    dataState : {
        data : {
            list : [],
            this_page : 1,
            total : 0,
            total_money_sum : '',
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
    },
};

const taiPingYangInsuranceReducer = function (state = initialState, action) {
    switch (action.type) {
        
        case types.UPDATA_TAIPINGYANG_INSURANCE_DATA :
            return Object.assign({}, state, { dataState : {...action.info }});
        
        case types.UPDATA_TAIPINGYANG_INSURANCE_SEARCH :
            var template = { searchState : state.searchState};
            var merged = mergeDeep(template, { searchState : {...action.info}});
            return Object.assign({}, state, merged);
    }
    
    return state;
};

export default taiPingYangInsuranceReducer;