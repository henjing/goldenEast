import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute, hashHistory, Redirect } from 'react-router';
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
// 已获信息资产列表
import GainInfoAssetAllotListContainer from './components/containers/gain_info-asset-allot-list-container';

// 设置权限页面
import setAuthorizationView from './components/views/set-follower-authorization';

// 居间商已授权用户(包括小金和客服)
import AuthorUserListContainer from './components/containers/author-user-list-container';
// 居间商已授权用户(包括小金和客服)
import AllotUserListContainer from './components/containers/allot-user-list-container';

//当月注册量与激活量
import RegisterActiveContainer from './components/containers/register-active-container';

//名下用户信息
import UnderUserTreeContainer from './components/containers/under-user-tree-container';
import UnderUserContainer from './components/containers/under-user-container';

export default (
    <Router history={hashHistory}>
        <Route path={routeBase} component={MainLayout} >

            <IndexRedirect to={routeBase + 'home'} />
            {/*<IndexRoute component={HomeContainer}/>*/}
            <Route breadcrumbName="数据总览" path={routeBase + 'home'} component={HomeContainer} />

            <Route name="user_list" breadcrumbName="用户列表" path={routeBase + 'user_list'} component={UserListContainer} >
                <Route breadcrumbName="个人详情" path="user_detail/:userId" component={UserDetailContainer} />
            </Route>

            <Route breadcrumbName="名下用户信息" path={routeBase + 'under_user_tree'} component={UnderUserTreeContainer} />
            <Route breadcrumbName="一度人脉列表" path={routeBase + 'under_user'} component={UnderUserContainer} />
            <Route breadcrumbName="旗下代理商数据" path={routeBase + 'register_active'} component={RegisterActiveContainer} />
           
            <Route name="allot_user_list" breadcrumbName="分配用户权限" path={routeBase + 'allot_user_list'} component={AllotUserListContainer} >
                <Route breadcrumbName="权限设置" path="set_authorization/:userSn" component={setAuthorizationView} />
            </Route>
            
            <Route name="author_user_list" breadcrumbName="已授权用户列表" path={routeBase + 'author_user_list'} component={AuthorUserListContainer} >
                <Route breadcrumbName="个人详情" path="author_user_detail/:userSn" component={UserDetailContainer} />               
                <Route breadcrumbName="权限设置" path="set_authorization/:userSn" component={setAuthorizationView} />
            </Route>

            <Route breadcrumbName="川商大盘" path={routeBase + 'chuan_shang_board_market'} component={ChuanShangBoardMarketContainer} />

            <Route breadcrumbName="深文所大盘" path={routeBase + 'shen_wen_suo_board_market'} component={ShenWenSuoBoardMarketContainer} />

            <Route breadcrumbName="深文所微盘" path={routeBase + 'shenwensuo_wp'} component={ShenWenSuoMicroBoardContainer} />

            <Route breadcrumbName="吉商微盘" path={routeBase + 'jishang_wp'} component={jiShangMicroBoardContainer} />

            <Route breadcrumbName="粤国际微盘" path={routeBase + 'yueguoji_wp'} component={yueGuoJiMicroBoardContainer} />
            
            <Route breadcrumbName="川商邮币卡" path={routeBase + 'chuan_shang_post_card'} component={ChuanShangPostCardContainer} />
            
            <Route breadcrumbName="吉商邮币卡" path={routeBase + 'ji_shang_post_card'} component={JiShangPostCardContainer} />


            <Route path={routeBase + 'set_authorization'} component={setAuthorizationView} />

            <Route breadcrumbName="信息资产列表" path={routeBase + 'info_asset_allot_list'} component={InfoAssetAllotListContainer} />
            <Route breadcrumbName="已获得信息资产列表" path={routeBase + 'gain_info_asset_allot_list'} component={GainInfoAssetAllotListContainer} />

        </Route>
    </Router>
)
