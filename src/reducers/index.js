import { combineReducers } from 'redux';

// Reducers
import adminReducer from './admin-reducer';
import appInteractionReducer from './app-interaction-reducer';
import chuanShangBoardMarketReducer from './chuanShang-board-market-reducer';
import agentOverviewDataReducer from './agent-overview-data-reducer';
import shenWenSuoBoardMarketReducer from './shenWenSuo-board-market-reducer';
import chuanShangPostCardReducer from './chuanShang-post-card-reducer';
import jiShangPostCardReducer from './jiShang-post-card-reducer';
import shenWenSuoMicroBoardReducer from './shenWensuo-micro-board-reducer';
import jiShangMicroBoardReducer from './jiShang-micro-board-reducer';
import yueGuoJiMicroBoardReducer from './yueGuoJi-micro-board-reducer';
<<<<<<< HEAD
import userListReducer from './user-list-reducer';
=======
import infoAssetAllotListReducer from './info-asset-allot-list-reducer';
>>>>>>> 65a8eca21ce13eec04334dcfad271f645e2c8edc

const reducers = combineReducers({
    adminState : adminReducer,
    appInteractionState : appInteractionReducer,
    chuanShangBoardMarketState : chuanShangBoardMarketReducer,
    agentOverviewDataState : agentOverviewDataReducer,
    shenWenSuoBoardMarketState : shenWenSuoBoardMarketReducer,
    jiShangPostCardState: jiShangPostCardReducer,
    chuanShangPostCardState: chuanShangPostCardReducer,
    shenWenSuoMicroBoardState : shenWenSuoMicroBoardReducer,
    jiShangMicroBoardState : jiShangMicroBoardReducer,
    yueGuoJiMicroBoardState : yueGuoJiMicroBoardReducer,
<<<<<<< HEAD
    userListState : userListReducer,
=======
    infoAssetAllotListState : infoAssetAllotListReducer,
>>>>>>> 65a8eca21ce13eec04334dcfad271f645e2c8edc
});

export default reducers;