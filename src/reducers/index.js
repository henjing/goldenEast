import { combineReducers } from 'redux';

// Reducers
import adminReducer from './admin-reducer';
import appInteractionReducer from './app-interaction-reducer';
import chuanShangBoardMarketReducer from './chuanShang-board-market-reducer';
import agentOverviewDataReducer from './agent-overview-data-reducer';
import shenWenSuoBoardMarketReducer from './shenWenSuo-board-market-reducer';
import chuanShangPostCardReducer from './chuanShang-post-card-reducer';
import jiShangPostCardReducer from './jiShang-post-card-reducer';

const reducers = combineReducers({
    adminState : adminReducer,
    appInteractionState : appInteractionReducer,
    chuanShangBoardMarketState : chuanShangBoardMarketReducer,
    agentOverviewDataState : agentOverviewDataReducer,
    shenWenSuoBoardMarketState : shenWenSuoBoardMarketReducer,
    jiShangPostCardState: jiShangPostCardReducer,
    chuanShangPostCardState: chuanShangPostCardReducer,
});

export default reducers;