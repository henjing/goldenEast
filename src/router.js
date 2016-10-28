import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import UserListContainer from './components/containers/user-list-container';
import HomeContainer from './components/containers/home-container';

// Layouts
import MainLayout from './components/layouts/main-layout';
// Route base
import { routeBase } from './appConstants/urlConfig';

// 川商大盘交易列表
import ChuanShangBoardMarketContainer from './components/containers/chuan-shang-board-market-container';
// 深文所大盘
import ShenWenSuoBoardMarketContainer from './components/containers/shen-wen-suo-board-market-container';

export default (
    <Router history={browserHistory}>
        <Route path={routeBase} component={MainLayout} >

            <IndexRedirect to={routeBase + 'home'} />
            {/*<IndexRoute component={HomeContainer}/>*/}
            <Route path={routeBase + 'home'} component={HomeContainer} />
            <Route path={routeBase + 'user_list'} component={UserListContainer} />

            <Route path={routeBase + 'chuan_shang_board_market'} component={ChuanShangBoardMarketContainer} />
            
            <Route path={routeBase + 'shen_wen_suo_board_market'} component={ShenWenSuoBoardMarketContainer} />
            
        </Route>
    </Router>
)
