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

    render() {
        const collapse = this.props.collapse;
        const sidebarWrapperName = collapse ? 'sidebarWrapperCollapse' : 'sidebarWrapper';
        const mode = collapse ? 'vertical' : 'inline';
        const pathName = window.location.pathname;
        return (
                <div className={styles[sidebarWrapperName]} style={{transition: 'all 0.3s ease'}}>
                    <div className={styles.logo}>
                        <Link to={routeBase}>
                            <img src={imgSrc} alt="logo"/>
                        </Link>
                    </div>

                    <Menu mode={mode}
                      defaultSelectedKeys={[pathName]} defaultOpenKeys={['sub1']}>
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
                        <Menu.Item key={routeBase + 'chuan_shang_board_market'}>
                            <Link to={routeBase + 'chuan_shang_board_market'}>
                                川商大盘
                            </Link>
                        </Menu.Item>
                        
                      </SubMenu>
                      <SubMenu key="sub2" title={<span><Icon type="home" /><span className={styles.navText}>大盘交易列表</span></span>}>
                      	<Menu.Item key={routeBase + 'sws'}>
                            <Link to={routeBase + ''}>
                                深文所大盘
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'cs'}>
                            <Link to={routeBase + ''}>
                                川商大盘
                            </Link>
                        </Menu.Item>
                        
                      </SubMenu>
                      <SubMenu key="sub3" title={<span><Icon type="home" /><span className={styles.navText}>微盘交易列表</span></span>}>
                      	<Menu.Item key={routeBase + 'senwensuo_wp'}>
                            <Link to={routeBase + ''}>
                                深文所微盘
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'jishang_wp'}>
                            <Link to={routeBase + ''}>
                                吉商微盘
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'yueguoji_wp'}>
                            <Link to={routeBase + ''}>
                                粤国际微盘
                            </Link>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub4" title={<span><Icon type="home" /><span className={styles.navText}>邮币卡交易列表</span></span>}>
                      	<Menu.Item key={routeBase + 'chuanshang_post_card'}>
                            <Link to={routeBase + ''}>
                                川商邮币卡
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={routeBase + 'jishan_post_card'}>
                            <Link to={routeBase + ''}>
                                吉商邮币卡
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