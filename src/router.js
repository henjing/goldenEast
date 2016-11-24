import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute, hashHistory, Redirect } from 'react-router';
//首页，数据总览
import HomeContainer from './components/containers/home-container';
//用户列表
import UserListContainer from './components/containers/user-list-container';
import UserDetailContainer from './components/containers/user-detail-container';
// 红包列表
import HongBaoListContainer from './components/containers/hongbao-list-container';
// Layouts
import MainLayout from './components/layouts/main-layout';
// Route base
import { routeBase } from './appConstants/urlConfig';
// 交易列表
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

// 佣金列表
// 大盘佣金列表
import BoardMarketBrokerageContainer from './components/containers/board-market-brokerage-container';
// 微盘佣金列表
import MicroBoardBrokerageContainer from './components/containers/micro-board-brokerage-container';
// 邮币卡佣金列表
import PostCardBrokerageContainer from './components/containers/post-card-brokerage-container';
// 大盘个人佣金详情列表
import BoardMarketBrokerageGainDetailsContainer from './components/containers/board-market-brokerage-gain-details-container';
// 微盘个人佣金详情列表
import MicroBoardBrokerageGainDetailsContainer from './components/containers/micro-board-brokerage-gain-details-container';
// 邮币卡佣金佣金详情列表
import PostCardBrokerageGainDetailsContainer from './components/containers/board-market-brokerage-gain-details-container';

// 信息资产列表
import InfoAssetAllotListContainer from './components/containers/info-asset-allot-list-container';
// 已获信息资产列表
import GainInfoAssetAllotListContainer from './components/containers/gain-info-asset-allot-list-container';

// 设置权限页面
import setAuthorizationView from './components/views/set-follower-authorization';

// 居间商已授权用户(包括小金和客服)
import AuthorUserListContainer from './components/containers/author-user-list-container';
// 居间商已授权用户(包括小金和客服)
import AllotUserListContainer from './components/containers/allot-user-list-container';

//当月注册量与激活量
import RegisterActiveContainer from './components/containers/register-active-container';


//下载中心
import DownloadContainer from './components/containers/download-list-container';

import ShenWenSuoVoucherContainer from './components/containers/shen-wen-suo-voucher-container';

//名下用户信息
import UnderUserTreeContainer from './components/containers/under-user-tree-container';
import UnderUserContainer from './components/containers/under-user-container';

//获得当前代理商旗下的某个代理商本月的手续费详情列表
import JjsCurrentPoundageContainer from './components/containers/jjs-current-poundage-detail';
//获得当前代理商旗下的某个代理商上月的手续费详情列表
import JjsLastPoundageContainer from './components/containers/jjs-last-poundage-detail';


export default (
    <Router history={hashHistory}>
        <Route path={routeBase} component={MainLayout} >

            <IndexRedirect to={routeBase + 'home'} />
            <Route breadcrumbName="数据总览" path={routeBase + 'home'} component={HomeContainer} />

            <Route name="user_list" breadcrumbName="用户列表" path={routeBase + 'user_list'} component={UserListContainer} >
                <Route breadcrumbName="个人详情" path="user_detail/:userId" component={UserDetailContainer} />
            </Route>

            <Route name="hongbao_list" breadcrumbName="红包列表" path={routeBase + 'hongbao_list'} component={HongBaoListContainer} >
            </Route>

            <Route breadcrumbName="名下用户信息" path={routeBase + 'under_user_tree'} component={UnderUserTreeContainer} />

            <Route breadcrumbName="名下用户信息" path={routeBase + 'under_user_tree'} component={UnderUserTreeContainer} >
            	 <Route breadcrumbName="个人详情" path="user_detail/:userId" component={UserDetailContainer} />
            </Route>

            <Route breadcrumbName="一度人脉列表" path={routeBase + 'under_user'} component={UnderUserContainer} />

            <Route breadcrumbName="旗下代理商数据" path={routeBase + 'register_active'} component={RegisterActiveContainer}>
            	<Route breadcrumbName="当月手续费详情" path='current_poundage/:jjsid' component={JjsCurrentPoundageContainer}/>
            	<Route breadcrumbName="上月手续费详情" path='last_poundage/:jjsid' component={JjsLastPoundageContainer}/>
            </Route>
           
            <Route name="allot_user_list" breadcrumbName="分配用户权限" path={routeBase + 'allot_user_list'} component={AllotUserListContainer} >
                <Route breadcrumbName="权限设置" path="set_authorization/:userSn" component={setAuthorizationView} />
            </Route>
            
            <Route name="author_user_list" breadcrumbName="已授权用户列表" path={routeBase + 'author_user_list'} component={AuthorUserListContainer} >
                <Route breadcrumbName="个人详情" path="author_user_detail/:userSn" component={UserDetailContainer} />               
                <Route breadcrumbName="权限设置" path="set_authorization/:userSn" component={setAuthorizationView} />
            </Route>
{/*交易列表*/}
            <Route breadcrumbName="川商大盘交易列表" path={routeBase + 'chuan_shang_board_market'} component={ChuanShangBoardMarketContainer} />

            <Route breadcrumbName="深文所大盘交易列表" path={routeBase + 'shen_wen_suo_board_market'} component={ShenWenSuoBoardMarketContainer} />

            <Route breadcrumbName="深文所微盘交易列表" path={routeBase + 'shenwensuo_wp'} component={ShenWenSuoMicroBoardContainer} />

            <Route breadcrumbName="吉商微盘交易列表" path={routeBase + 'jishang_wp'} component={jiShangMicroBoardContainer} />

            <Route breadcrumbName="粤国际微盘交易列表" path={routeBase + 'yueguoji_wp'} component={yueGuoJiMicroBoardContainer} />
            
            <Route breadcrumbName="川商邮币卡交易列表" path={routeBase + 'chuan_shang_post_card'} component={ChuanShangPostCardContainer} />

            <Route breadcrumbName="吉商邮币卡交易列表" path={routeBase + 'ji_shang_post_card'} component={JiShangPostCardContainer} />

            {/*佣金列表*/}
            <Route name="board_market_brokerage" breadcrumbName="大盘佣金列表" path={routeBase + 'board_market_brokerage'} component={BoardMarketBrokerageContainer} >
                 <Route breadcrumbName="佣金获得详情" path="board_market_brokerage_gain_details/:details" component={BoardMarketBrokerageGainDetailsContainer} />
            </Route>

            <Route  name="wp_brokerage" breadcrumbName="微盘佣金列表" path={routeBase + 'wp_brokerage'} component={MicroBoardBrokerageContainer} >
                 <Route breadcrumbName="佣金获得详情" path="wp_brokerage_gain_details/:details2" component={MicroBoardBrokerageGainDetailsContainer} />
            </Route>

            <Route breadcrumbName="邮币卡佣金列表" path={routeBase + 'post_card_brokerage'} component={PostCardBrokerageContainer} >
                   <Route breadcrumbName="佣金获得详情" path="post_card_brokerage_gain_details/:details3" component={PostCardBrokerageGainDetailsContainer} />
            </Route>

            <Route path={routeBase + 'set_authorization'} component={setAuthorizationView} />

            <Route breadcrumbName="大盘、邮币卡开户进度" path={routeBase + 'board_market_post_card_dredge_schedule'} component={GainInfoAssetAllotListContainer} />

            <Route breadcrumbName="信息资产列表" path={routeBase + 'info_asset_allot_list'} component={InfoAssetAllotListContainer} />
            <Route breadcrumbName="已获得信息资产列表" path={routeBase + 'gain_info_asset_allot_list'} component={GainInfoAssetAllotListContainer} />

            <Route breadcrumbName="深文所入金送体验券列表" path={routeBase + 'shen_wen_suo_voucher_list'} component={ShenWenSuoVoucherContainer} />

             <Route breadcrumbName="下载中心" path={routeBase + 'download_center_list'} component={DownloadContainer} />

        </Route>
    </Router>
)
