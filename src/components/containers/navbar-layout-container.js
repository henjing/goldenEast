import React from 'react';
import { connect } from 'react-redux';
import { getAdmin, getAgentOverviewData } from '../../api/app-interaction-api';
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
              <a href={logoutUrl}>注销</a>
            </Menu.Item>
              {<Menu.Item>
                <span onClick={this.handleClick}>修改密码</span>
                <ModifyPassword />
            </Menu.Item>}
          </Menu>
        );
        const admin = this.props.adminState.data;
        return (
            <nav className="nav-wrap">
            	<ul className="nav">
                    <li className="avatar">
                        <img src={admin.wechat_avatar} alt="avatar"/>
                        <span>{admin.wechat_nickname}</span>
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