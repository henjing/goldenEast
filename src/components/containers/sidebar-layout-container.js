import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import styles from '../../app.less';
import { Link } from 'react-router';
import { sidebarCollapse } from '../../actions/app-interaction-actions';
import imgSrc from '../../appConstants/assets/images/logo_white.png';
import { Menu, Icon } from 'antd';
import { routeBase } from '../../appConstants/urlConfig';
const SubMenu = Menu.SubMenu;

const SidebarLayoutContainer = React.createClass({

      onCollapseChange() {
          store.dispatch(sidebarCollapse());
      },

    //匹配的导航列表
    matchSubMenu(pathName) {
        const subMenuArray =  {
            'sub1' : ['/home', '/user_list','register_active'],
            'sub2' : [ '/author_user_list', '/allot_user_list','hongbao_list'],
            'sub3_1' : ['/chuan_shang_board_market', '/shen_wen_suo_board_market'],
            'sub3_2' : ['/shenwensuo_wp', '/jishang_wp', '/yueguoji_wp'],
            'sub3_3' : ['/chuan_shang_post_card', '/ji_shang_post_card'],
            'sub4' : ['/board_market_brokerage', '/wp_brokerage','/post_card_brokerage','/post_card_brokerage'],
            'sub5' : ['/board_market_post_card_dredge_schedule'],
            'sub6' : ['/info_asset_allot_list', '/gain_info_asset_allot_list'],
            'sub7' : ['under_user','under_user_tree'],
        };
        let matchSubMenu = '';
        let defaultSelectedKey = '';
        for (let i in subMenuArray) {
            // console.log('iiiiiii', i);
            subMenuArray[i].forEach(function (ownPathName) {
                // console.log('ownPathName', ownPathName.slice(0, 6));
                if (ownPathName.slice(0, 5) == pathName.slice(0, 5)) {
                    matchSubMenu = i;
                    defaultSelectedKey = ownPathName;
                    // console.log('hey!', i);
                }
            })
        }
        console.log('aaaaaaaaa', [matchSubMenu, defaultSelectedKey]);
        return [matchSubMenu, defaultSelectedKey];
    },

    render() {
        const collapse = this.props.collapse;
        const sidebarWrapperName = collapse ? 'sidebarWrapperCollapse' : 'sidebarWrapper';
        const mode = collapse ? 'vertical' : 'inline';
        // const pathName = window.location.pathname;
        const pathName = window.location.hash.slice(1, 6);
        // console.log('bbbbbbb', pathName);
        const matchSubMenu = this.matchSubMenu(pathName);
        //console.log('matchSubMenu', matchSubMenu);
        return (
            <div className={styles[sidebarWrapperName]} style={{transition: 'all 0.3s ease'}}>
                <div className={styles.logo}>
                    <Link to={routeBase}>
                        <img src={imgSrc} alt="logo"/>
                    </Link>
                </div>

                <Menu mode={mode}
                      defaultSelectedKeys={[matchSubMenu[1]]} defaultOpenKeys={[matchSubMenu[0]]}>
                    <SubMenu key="sub1" title={<span><Icon type="home" /><span className={styles.navText}>居间商</span></span>}>
                        <Menu.Item key={routeBase + 'home'}>
                            <Link to={routeBase + 'home'}>
                                用户数据总览
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'user_list'}>
                            <Link to={routeBase + 'user_list'}>
                                用户列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'hongbao_list'}>
                            <Link to={routeBase + 'hongbao_list'}>
                                红包列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'register_active'}>
                            <Link to={routeBase + 'register_active'}>
                                旗下代理商数据
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" title={<span><Icon type="share-alt" /><span className={styles.navText}>权限分配列表</span></span>}>
                        <Menu.Item key={routeBase + 'allot_user_list'}>
                            <Link to={routeBase + 'allot_user_list'}>
                                分配用户权限
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'author_user_list'}>
                            <Link to={routeBase + 'author_user_list'}>
                                已授权用户
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub3" title={<span><Icon type="pay-circle-o" /><span className={styles.navText}>交易列表</span></span>}>
                        <SubMenu key="sub3_1" title={<span><Icon type="bar-chart" /><span className={styles.navText}>大盘交易列表</span></span>}>
                            <Menu.Item key={routeBase + 'shen_wen_suo_board_market'}>
                                <Link to={routeBase + 'shen_wen_suo_board_market'}>
                                    深文所大盘
                                </Link>
                            </Menu.Item>
                            <Menu.Item key={routeBase + 'chuan_shang_board_market'}>
                                <Link to={routeBase + 'chuan_shang_board_market'}>
                                    川商大盘
                                </Link>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub3_2" title={<span><Icon type="line-chart" /><span className={styles.navText}>微盘交易列表</span></span>}>
                            <Menu.Item key={routeBase + 'shenwensuo_wp'}>
                                <Link to={routeBase + 'shenwensuo_wp'}>
                                    深文所微盘
                                </Link>
                            </Menu.Item>
                            <Menu.Item key={routeBase + 'jishang_wp'}>
                             <Link to={routeBase + 'jishang_wp'}>
                             吉商微盘
                             </Link>
                             </Menu.Item>
                            <Menu.Item key={routeBase + 'yueguoji_wp'}>
                                <Link to={routeBase + 'yueguoji_wp'}>
                                    粤国际微盘
                                </Link>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub3_3" title={<span><Icon type="dot-chart" /><span className={styles.navText}>邮币卡交易列表</span></span>}>
                            <Menu.Item key={routeBase + 'chuan_shang_post_card'}>
                                <Link to={routeBase + 'chuan_shang_post_card'}>
                                    川商邮币卡
                                </Link>
                            </Menu.Item>
                            <Menu.Item key={routeBase + 'ji_shang_post_card'}>
                                <Link to={routeBase + 'ji_shang_post_card'}>
                                    吉商邮币卡
                                </Link>
                            </Menu.Item>
                        </SubMenu>

                    </SubMenu>

                    <SubMenu key="sub4" title={<span><Icon type="pay-circle" /><span className={styles.navText}>佣金列表</span></span>}>
                        <Menu.Item key={routeBase + 'board_market_brokerage'}>
                            <Link to={routeBase + 'board_market_brokerage'}>
                                大盘佣金列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'wp_brokerage'}>
                            <Link to={routeBase + 'wp_brokerage'}>
                                微盘佣金列表
                            </Link>
                        </Menu.Item>

                        {/*       <Menu.Item key={routeBase + 'post_card_brokerage'}>
                         <Link to={routeBase + 'post_card_brokerage'}>
                         邮币卡佣金列表
                         </Link>
                         </Menu.Item>*/}
                    </SubMenu>

                    <SubMenu key="sub5" title={<span><Icon type="pie-chart" /><span className={styles.navText}>大盘、邮币卡开户进度</span></span>}>
	                     <Menu.Item key={routeBase + 'open_account_progress'}>
		                     <Link to={routeBase + 'open_account_progress'}>
		                     大盘、邮币卡开户进度
		                     </Link>
	                     </Menu.Item>
                     </SubMenu>

                    <SubMenu key="sub6" title={<span><Icon type="solution" /><span className={styles.navText}>信息资产分配</span></span>}>
                        <Menu.Item key={routeBase + 'info_asset_allot_list'}>
                            <Link to={routeBase + 'info_asset_allot_list'}>
                                信息资产分配详情
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'gain_info_asset_allot_list'}>
                            <Link to={routeBase + 'gain_info_asset_allot_list'}>
                                已获得信息资产详情
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub7" title={<span><Icon type="team" /><span className={styles.navText}>人脉查询</span></span>}>
                        <Menu.Item key={routeBase + 'under_user_tree'}>
                         <Link to={routeBase + 'under_user_tree'}>
                         名下用户信息
                         </Link>
                         </Menu.Item>
                        <Menu.Item key={routeBase + 'under_user'}>
                            <Link to={routeBase + 'under_user'}>
                                一度人脉列表
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub8" title={<span><Icon type="select" /><span className={styles.navText}>其他</span></span>}>
                        <Menu.Item key={routeBase + 'shen_wen_suo_voucher_list'}>
                         <Link to={routeBase + 'shen_wen_suo_voucher_list'}>
                         				深文所入金送体验券列表
                         </Link>
                         </Menu.Item>
                        <Menu.Item key={routeBase + 'download_center_list'}>
                            <Link to={routeBase + 'download_center_list'}>
                                下载中心
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                <div className={styles.antAsideAction} onClick={this.onCollapseChange}>
                    {collapse ? <Icon type="right" /> : <Icon type="left" />}
                </div>
            </div>
        )
    }
});

function mapStateToProps(store) {
    return {
        collapse : store.appInteractionState.sidebarCollapse
    }
}

export default connect(mapStateToProps)(SidebarLayoutContainer);