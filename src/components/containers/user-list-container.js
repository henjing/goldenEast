import React from 'react';
import ReactDom from 'react-dom';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './list-container.css';
import UserListTable from '../views/user-list-view.js';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({
	render(){
		return (
			<div>
				<div className="userListHeader">
					<SearchBar />
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

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

function onSelect(value) {
  console.log('onSelect', value);
}

var SearchBar = React.createClass({
	getInitialState() {
    return {
      dataSource: [],
    };
  },
  handleChange(value) {
    this.setState({
      dataSource: value.length<7 ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  },
  render() {
    const { dataSource } = this.state;
    return (
    	<div className="searchBar">
			<AutoComplete
		        dataSource={dataSource}
		        style={{ width: 200 }}
		        onSelect={onSelect}
		        onChange={this.handleChange}
		      />
			<Button type="primary" style={{marginLeft:'20px'}}>搜索</Button>
		</div>
    );
  },
});

module.exports = UserListContainer;
