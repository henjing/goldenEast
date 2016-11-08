import React from 'react';
import { Button, AutoComplete, DatePicker, message } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/allot-user-list-view.js';
import SearchUserInput from '../views/SearchUserInput.js';
import store from '../../store';
import { connect } from 'react-redux';
import { updateNoAuthorUserListDataSearch } from '../../actions/app-interaction-actions';
import { getNoAuthorUserListData, deleteSomeUserAuthor } from '../../api/app-interaction-api';
import { Link } from 'react-router';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({
	onChange(value){
		store.dispatch(updateNoAuthorUserListDataSearch({
    		'search[find]' : value,
            'page' : 1
        }));
	},
/*	onDateChange(dates, dateStrings){
		store.dispatch(updateAuthorUserListDataSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        this.submitSearch();
	},*/
	submitSearch() {
        getNoAuthorUserListData(this.props.searchState);
    },
    onPageChange(page){
    	store.dispatch(updateNoAuthorUserListDataSearch({
    		page:page
    	}));
    	
    	this.submitSearch();
    },
	componentDidMount(){
	/*	getNoAuthorUserListData();*/
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateNoAuthorUserListDataSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },
	render(){
		const data = this.props.dataState.data;
        console.log('data2', data);
        let userList;
        if (data.list.length > 0){
            userList =  <UserListTable deleteUserAuthor={this.deleteUserAuthor} data={data.list} total={data.total} currentPage={data.this_page} onPageChange={this.onPageChange}/>;
        }else {
            userList = '';
        };
		return this.props.children || (
			<div>
				<div className="userListHeader border-b">
					<SearchUserInput search={this.submitSearch} onChange={this.onChange} data={data.list}/>
					<div className="number-info">
						<span>{data.total}</span>
						<p>总数量</p>
					</div>
				</div>
                {userList}
                <div>
                    {this.props.children}
                </div>
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.allotUserListState.dataState,
        searchState : store.allotUserListState.searchState
    }
};

export default connect(mapStateToProps)(UserListContainer);

