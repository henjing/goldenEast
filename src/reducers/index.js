import { combineReducers } from 'redux';

// Reducers
import adminReducer from './admin-reducer';
import appInteractionReducer from './app-interaction-reducer';
import chuanShangBoardMarketReducer from './chuanShang-board-market-reducer';

const reducers = combineReducers({
    adminState : adminReducer,
    appInteractionState : appInteractionReducer,
    chuanShangBoardMarketState : chuanShangBoardMarketReducer
});

export default reducers;