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
            'sub1' : ['/home', '/user_list'],
            'sub2' : ['/chuan_shang_board_market', '/shen_wen_suo_board_market'],
            'sub3' : ['/shenwensuo_wp', '/jishang_wp', '/yueguoji_wp'],
            'sub4' : ['/chuan_shang_post_card', '/ji_shang_post_card'],
            'sub5' : ['/info_asset_allot_list']
        };
        let matchSubMenu = '';
        for (let i in subMenuArray) {
            // console.log('iiiiiii', i);
            subMenuArray[i].forEach(function (ownPathName) {
                // console.log('ownPathName', ownPathName);
                if (ownPathName.slice(0, 10) == pathName.slice(0, 10)) {
                    matchSubMenu = i;
                    // console.log('hey!', i);
                }
            })
        }
        return matchSubMenu;
    },

    render() {
        const collapse = this.props.collapse;
        const sidebarWrapperName = collapse ? 'sidebarWrapperCollapse' : 'sidebarWrapper';
        const mode = collapse ? 'vertical' : 'inline';
        const pathName = window.location.pathname;
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
                      defaultSelectedKeys={[pathName]} defaultOpenKeys={[matchSubMenu]}>
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
                          <Menu.Item key={routeBase + 'set_authorization'}>
                            <Link to={routeBase + 'set_authorization'}>
                                设置权限
                            </Link>
                        </Menu.Item>
                      </SubMenu>

                      <SubMenu key="sub2" title={<span><Icon type="bar-chart" /><span className={styles.navText}>大盘交易列表</span></span>}>
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

                      <SubMenu key="sub3" title={<span><Icon type="line-chart" /><span className={styles.navText}>微盘交易列表</span></span>}>
                      	<Menu.Item key={routeBase + 'shenwensuo_wp'}>
                            <Link to={routeBase + 'shenwensuo_wp'}>
                                深文所微盘
                            </Link>
                        </Menu.Item>
                          {/*<Menu.Item key={routeBase + 'jishang_wp'}>
                            <Link to={routeBase + 'jishang_wp'}>
                                吉商微盘
                            </Link>
                        </Menu.Item>*/}
                        <Menu.Item key={routeBase + 'yueguoji_wp'}>
                            <Link to={routeBase + 'yueguoji_wp'}>
                                粤国际微盘
                            </Link>
                        </Menu.Item>
                      </SubMenu>

                      <SubMenu key="sub4" title={<span><Icon type="dot-chart" /><span className={styles.navText}>邮币卡交易列表</span></span>}>
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

                      <SubMenu key="sub5" title={<span><Icon type="solution" /><span className={styles.navText}>信息资产分配</span></span>}>
                        <Menu.Item key={routeBase + 'info_asset_allot_list'}>
                            <Link to={routeBase + 'info_asset_allot_list'}>
                                信息资产分配详情
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