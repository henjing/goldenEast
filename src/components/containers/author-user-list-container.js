import React from 'react';
import { Button, AutoComplete, DatePicker, message } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/author-user-list-view.js';
import SearchInput from '../views/SearchInput.js';
import store from '../../store';
import { connect } from 'react-redux';
import { updateAuthorUserListDataSearch } from '../../actions/app-interaction-actions';
import { getAuthorUserListData, deleteSomeUserAuthor } from '../../api/app-interaction-api';
import { Link } from 'react-router';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({
	onChange(value){
		store.dispatch(updateAuthorUserListDataSearch({
    		'search[find]' : value,
            'page' : 1
        }));
	},
	onDateChange(dates, dateStrings){
		store.dispatch(updateAuthorUserListDataSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        this.submitSearch();
	},
	submitSearch() {
        getAuthorUserListData(this.props.searchState);
    },
    onPageChange(page){
    	store.dispatch(updateAuthorUserListDataSearch({
    		page:page
    	}));
    	
    	this.submitSearch();
    },
	componentDidMount(){
		getAuthorUserListData();
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateAuthorUserListDataSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },

    deleteUserAuthor(user_sn) {
        return function () {
            deleteSomeUserAuthor({ sn : user_sn }, function (info) {
                message.info('删除成功');
            }.bind(this), function (info) {
                message.info('删除失败 ' + info.info);
            }.bind(this))
        }.bind(this);
    },
    
	render(){
		const data = this.props.dataState.data;
		return this.props.children || (
			<div>
				<div className="userListHeader">
					<SearchInput search={this.submitSearch} onChange={this.onChange}/>
					<div className="number-info">
						<span>{data.total}</span>
						<p>总数量</p>
					</div>
				</div>
				<div className="data-picker-bar">
					<label>注册时间:</label>
					<RangePicker style={{ width: 200 }} onChange={this.onDateChange} />
				</div>
				<UserListTable deleteUserAuthor={this.deleteUserAuthor} data={data.list} total={data.total} currentPage={data.this_page} onPageChange={this.onPageChange}/>

                <div>
                    {this.props.children}
                </div>
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.authorUserListState.dataState,
        searchState : store.authorUserListState.searchState
    }
};

export default connect(mapStateToProps)(UserListContainer);

