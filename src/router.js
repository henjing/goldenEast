import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
//import UserListContainer from './components/containers/user-list-container';
import HomeContainer from './components/containers/home-container';

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

// 信息资产分配列表
import InfoAssetsAllotDetails from './components/containers/info_asset_allot_details';
import UnderInfoAssetAllotDetails from './components/containers/under_info_asset_allot_details';
import GainInfoAssetAllotDetails from './components/containers/gain_info_asset_allot_details';



export default (
    <Router history={browserHistory}>
        <Route path={routeBase} component={MainLayout} >

            <IndexRedirect to={routeBase + 'home'} />
            {/*<IndexRoute component={HomeContainer}/>*/}
            <Route path={routeBase + 'home'} component={HomeContainer} />
            {/*<Route path={routeBase + 'user_list'} component={UserListContainer} />*/}

            <Route path={routeBase + 'chuan_shang_board_market'} component={ChuanShangBoardMarketContainer} />
            

            <Route path={routeBase + 'info_asset_allot_details'} component={InfoAssetsAllotDetails} />
            <Route path={routeBase +'under_info_asset_allot_details'} component={UnderInfoAssetAllotDetails}/>
            <Route path={routeBase + 'gain_info_asset_allot_details'} component={GainInfoAssetAllotDetails} />


            <Route path={routeBase + 'shen_wen_suo_board_market'} component={ShenWenSuoBoardMarketContainer} />

            <Route path={routeBase + 'shenwensuo_wp'} component={ShenWenSuoMicroBoardContainer} />

            <Route path={routeBase + 'jishang_wp'} component={jiShangMicroBoardContainer} />

            <Route path={routeBase + 'yueguoji_wp'} component={yueGuoJiMicroBoardContainer} />
            
            <Route path={routeBase + 'chuan_shang_post_card'} component={ChuanShangPostCardContainer} />
            
            <Route path={routeBase + 'ji_shang_post_card'} component={JiShangPostCardContainer} />

            <Route path={routeBase + 'info_asset_allot_details'} component={InfoAssetsAllotDetails} />
            <Route path={routeBase +'under_info_asset_allot_details'} component={UnderInfoAssetAllotDetails}/>
            <Route path={routeBase + 'gain_info_asset_allot_details'} component={GainInfoAssetAllotDetails} />

            
        </Route>
    </Router>
)
