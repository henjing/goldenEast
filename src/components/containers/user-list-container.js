import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/user-list-view.js';
import SearchInput from '../views/SearchInput.js';
import store from '../../store';
import { connect } from 'react-redux';
import { updateUserListDataSearch } from '../../actions/app-interaction-actions';
import { getUserListData } from '../../api/app-interaction-api';
import { Link } from 'react-router';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({
	getInitialState(){
		return {
			whenSearchHide: false,
			loading: false
		}
	},
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
		const _this = this;
		_this.setState({ loading: true })
        getUserListData(this.props.searchState,function(info){
			_this.setState({ loading: false })
		},function(info){
			_this.setState({ loading: false })
		});
        //当搜索的时候隐藏右上角的总注册量
        this.setState({ whenSearchHide: true })
        if(!this.props.searchState['search[find]'] && !this.props.searchState['search[d_begin]'] ){
        	this.setState({ whenSearchHide: false })
        }
    },
    onPageChange(page){
    	store.dispatch(updateUserListDataSearch({
    		page:page
    	}));
    	
    	this.submitSearch();
    },
	componentDidMount(){
		const _this = this;
		_this.setState({ loading: true })
		getUserListData({},function(info){
			_this.setState({ loading: false })
		},function(info){
			_this.setState({ loading: false })
		});
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
		return this.props.children || (
			<div>
				<div className="userListHeader">
					<SearchInput search={this.submitSearch} onChange={this.onChange}/>
					{!this.state.whenSearchHide ? (<div className="number-info">
						<span>{data.total}</span>
						<p>总注册量</p>
					</div>) : ''}
				</div>
				<div className="data-picker-bar">
					<label>注册时间:</label>
					<RangePicker style={{ width: 200 }} onChange={this.onDateChange} />
				</div>
				<UserListTable 
					data={data.list}
					total={data.total}
					currentPage={data.this_page} 
					onPageChange={this.onPageChange}
					loading={this.state.loading}
				/>
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

