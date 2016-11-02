import React from 'react';
import ReactDom from 'react-dom';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './list-container.css';
import UserListTable from '../views/user-list-view.js';
import SearchInput from '../views/SearchInput.js';
import store from '../../store';
import { connect } from 'react-redux';
import { updateUserListDataSearch } from '../../actions/app-interaction-actions';
import { getUserListData } from '../../api/app-interaction-api';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({
	onChange(value){
		store.dispatch(updateUserListDataSearch({
    		'search[find]' : value,
            'page' : 1
        }));
	},
	onDateChange(dates, dateStrings){
		store.dispatch(updateUserListDataSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        this.submitSearch();
	},
	submitSearch() {
        getUserListData(this.props.searchState);
    },
    onPageChange(page){
    	store.dispatch(updateUserListDataSearch({
    		page:page
    	}));
    	
    	this.submitSearch();
    },
	componentDidMount(){
		getUserListData();
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateUserListDataSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },
    
	render(){
		const data = this.props.dataState.data;
		return (
			<div>
				<div className="userListHeader">
					<SearchInput search={this.submitSearch} onChange={this.onChange}/>
					<div className="number-info">
						<span>{data.total}</span>
						<p>总注册量</p>
					</div>
				</div>
				<div className="data-picker-bar">
					<label>注册时间:</label>
					<RangePicker style={{ width: 200 }} onChange={this.onDateChange} />
				</div>
				<UserListTable data={data.list} total={data.total} currentPage={data.this_page} onPageChange={this.onPageChange}/>
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.userListState.dataState,
        searchState : store.userListState.searchState
    }
};

export default connect(mapStateToProps)(UserListContainer);

