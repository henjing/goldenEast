import React from 'react';
import ReactDom from 'react-dom';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './list-container.css';
import UserListTable from '../views/user-list-view.js';
import SearchInput from '../views/SearchInput.js';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({
	render(){
		return (
			<div>
				<div className="userListHeader">
					<SearchInput />
					<div className="number-info">
						<span>54568</span>
						<p>数据统计</p>
					</div>
				</div>
				<div className="data-picker-bar">
					<label>注册时间:</label>
					<RangePicker style={{ width: 200 }} onChange={onChange} />
				</div>
				<UserListTable />
			</div>
		)
	}
});

module.exports = UserListContainer;
