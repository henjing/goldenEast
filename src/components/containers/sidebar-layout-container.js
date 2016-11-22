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
            'sub2' : [ '/author_user_list', '/allot_user_list'],
            'sub3' : ['/chuan_shang_board_market', '/shen_wen_suo_board_market'],
            'sub4' : ['/shenwensuo_wp', '/jishang_wp', '/yueguoji_wp'],
            'sub5' : ['/chuan_shang_post_card', '/ji_shang_post_card'],
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
                      defaultSelectedKeys={[matchSubMenu[1]]} defaultOpenKeys={[matchSubMenu[0]]} >
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

                      <SubMenu key="sub3" title={<span><Icon type="bar-chart" /><span className={styles.navText}>大盘交易列表</span></span>}>
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

                      <SubMenu key="sub4" title={<span><Icon type="line-chart" /><span className={styles.navText}>微盘交易列表</span></span>}>
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

                      <SubMenu key="sub5" title={<span><Icon type="dot-chart" /><span className={styles.navText}>邮币卡交易列表</span></span>}>
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