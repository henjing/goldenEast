import React from 'react';
import styles from '../../app.less';
import { connect } from 'react-redux';
import { getAdmin } from '../../api/app-interaction-api';
import { Menu, Dropdown, Icon } from 'antd';
import ModifyPassword from '../views/modifyPassword';
import { passwordModalToggle } from '../../actions/app-interaction-actions';
import store from '../../store';
import { logoutUrl, defaultAvatar } from '../../appConstants/urlConfig';
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
              <a href={logoutUrl}>注销</a>
            </Menu.Item>
              {<Menu.Item>
                <span onClick={this.handleClick}>修改密码</span>
                <ModifyPassword />
            </Menu.Item>}
          </Menu>
        );
        const admin = this.props.admin.info;
        return (
            <nav className="nav-wrap">
            	<ul className="nav">
                    <li className="avatar">
                        <img src={admin.wechat_avatar ? admin.wechat_avatar : defaultAvatar} alt="avatar"/>
                        <span>{admin.user_name}enjing</span>
                    </li>
                    <li className="setup">
                        <Dropdown overlay={menu}>
                            <a>
                                <span className="fa fa-cog" />
                            </a>
                        </Dropdown>
                    </li>
                </ul>
            </nav>
        )
    }
});

const mapStateToProps = function (store) {
    return {
        admin : store.adminState
    }
};

export default connect(mapStateToProps)(NavbarLayoutContainer);