import React from 'react';
import { connect } from 'react-redux';
import { getAdmin } from '../../api/app-interaction-api';
import { Menu, Dropdown, Icon } from 'antd';
import ModifyPassword from '../views/modifyPassword';
import { passwordModalToggle } from '../../actions/app-interaction-actions';
import store from '../../store';
import { logoutUrl } from '../../appConstants/urlConfig';
import './navbar-layout.css';

const NavbarLayoutContainer = React.createClass({
    
    componentDidMount : function () {
        getAdmin({});
    },

    handleClick() {
        store.dispatch(passwordModalToggle());
    },

    render : function () {
        const menu = (
          <Menu>
            <Menu.Item>
              <a href={logoutUrl}>退出</a>
            </Menu.Item>
              {/*{<Menu.Item>
                <span onClick={this.handleClick}>修改密码</span>
                <ModifyPassword />
            </Menu.Item>}*/}
          </Menu>
        );
        const admin = this.props.adminState.data;
        const url = 'url('+admin.wechat_avatar+')';
        return (
            <nav className="nav-wrap">
            	<ul className="nav">
                    <li className="admin-avatar-wrap">
                    	<span className="admin-avatar" style={{backgroundImage: url}}></span>
						<div className="admin-name">
							<p>{admin.wechat_nickname}</p>
							<span></span>
						</div>
                        
                    </li>

                    <Dropdown overlay={menu}>
                        <li className="setup">
                        <a>
                            <span className="fa fa-cog" />
                        </a>
                        </li>
                    </Dropdown>

                </ul>
            </nav>
        )
    }
});

const mapStateToProps = function (store) {
    return {
        adminState : store.adminState
    }
};

export default connect(mapStateToProps)(NavbarLayoutContainer);