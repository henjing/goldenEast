import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
//首页，数据总览
import HomeContainer from './components/containers/home-container';
//用户列表
import UserListContainer from './components/containers/user-list-container';
import UserDetailContainer from './components/containers/user-detail-container';
// Layouts
import MainLayout from './components/layouts/main-layout';
// Route base
import { routeBase } from './appConstants/urlConfig';

// 川商大盘交易列表
import ChuanShangBoardMarketContainer from './components/containers/chuan-shang-board-market-container';
// 深文所大盘
import ShenWenSuoBoardMarketContainer from './components/containers/shen-wen-suo-board-market-container';

// 深文所微盘
import ShenWenSuoMicroBoardContainer from './components/containers/shen-wen-suo-micro-board-container';
// 吉商微盘
import jiShangMicroBoardContainer from './components/containers/ji-shang-micro-board-container';
// 粤国际微盘
import yueGuoJiMicroBoardContainer from './components/containers/yue-guo-ji-micro-board-container';
//川商邮币卡
import ChuanShangPostCardContainer from './components/containers/chuan-shang-post-card-container';
//吉商邮币卡
import JiShangPostCardContainer from './components/containers/ji-shang-post-card-container';
// 信息资产列表
import InfoAssetAllotListContainer from './components/containers/info-asset-allot-list-container';

//已获信息资产分配列表
import GainInfoAssetAllotListContainer from './components/containers/gain-info-asset-allot-list-container';
//名下小金信息资产分配列表

import UnderInfoAssetsAllotDetailsContainer from './components/containers/under-info-asset-allot-details-comtainer';

// 设置权限页面
import setAuthorizationView from './components/views/set-follower-authorization';



export default (
    <Router history={browserHistory}>
        <Route path={routeBase} component={MainLayout} >

            <IndexRedirect to={routeBase + 'home'} />
            {/*<IndexRoute component={HomeContainer}/>*/}
            <Route path={routeBase + 'home'} component={HomeContainer} />
            <Route path={routeBase + 'user_list'} component={UserListContainer} />
            <Route path={routeBase + 'user_detail'} component={UserDetailContainer} />

            <Route path={routeBase + 'chuan_shang_board_market'} component={ChuanShangBoardMarketContainer} />

            <Route path={routeBase + 'shen_wen_suo_board_market'} component={ShenWenSuoBoardMarketContainer} />

            <Route path={routeBase + 'shenwensuo_wp'} component={ShenWenSuoMicroBoardContainer} />

            <Route path={routeBase + 'jishang_wp'} component={jiShangMicroBoardContainer} />

            <Route path={routeBase + 'yueguoji_wp'} component={yueGuoJiMicroBoardContainer} />
            
            <Route path={routeBase + 'chuan_shang_post_card'} component={ChuanShangPostCardContainer} />
            
            <Route path={routeBase + 'ji_shang_post_card'} component={JiShangPostCardContainer} />
            
            <Route path={routeBase + 'info_asset_allot_list'} component={InfoAssetAllotListContainer} />

            <Route path={routeBase + 'gain_info_asset_allot_list'} component={GainInfoAssetAllotListContainer} />

            <Route path={routeBase + 'under_info_asset_allot_list'} component={UnderInfoAssetsAllotDetailsContainer} />

            <Route path={routeBase + 'set_authorization'} component={setAuthorizationView} />

        </Route>
    </Router>
)
