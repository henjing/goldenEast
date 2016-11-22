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

import userListReducer from './user-list-reducer';
import hongBaoListReducer from './hongBao-list-reducer';
import authorUserListReducer from './author-user-list-reducer';
import allotUserListReducer from './allot-user-list-reducer';

import infoAssetAllotListReducer from './info-asset-allot-list-reducer';
import gainInfoAssetAllotListReducer from './gain-info-asset-allot-list-reducer';
import underUserReducer from './under-user-reducer';

import boardMarketBrokerageReducer from './board-market-brokerage-reducer';
import microBoardBrokerageReducer from './micro-board-brokerage-reducer';
import postCardBrokerageReducer from './post-card-brokerage-reducer';
import boardMarketBrokerageUserDetailReducer from './board-market-brokerage-user-detail-reducer';
import microBoardBrokerageUserDetailReducer from './micro-board-brokerage-user-reducer-reducer';
import postCardBrokerageUserDetailReducer from './post-card-brokerage-user-reducer-reducer';
import downloadListReducer from './download-list-reducer';
import shenWenSuoVoucherListReducer from './shen-wen-suo-voucher-list-reducer';



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
    userListState : userListReducer,
    hongBaoListState : hongBaoListReducer,
    infoAssetAllotListState : infoAssetAllotListReducer,
    gainInfoAssetAllotListState : gainInfoAssetAllotListReducer,
    authorUserListState : authorUserListReducer,
    allotUserListState : allotUserListReducer,
    microBoardBrokerageState : microBoardBrokerageReducer,
    boardMarketBrokerageState : boardMarketBrokerageReducer,
    postCardBrokerageState : postCardBrokerageReducer,
    boardMarketBrokerageUserDetailState : boardMarketBrokerageUserDetailReducer,
    microBoardBrokerageUserDetailState : microBoardBrokerageUserDetailReducer,
    postCardBrokerageUserDetailState : postCardBrokerageUserDetailReducer,
    downloadListDetailStater:downloadListReducer,
    underUserState : underUserReducer,
    shenWenSuoVoucherListStater:shenWenSuoVoucherListReducer
});

export default reducers;