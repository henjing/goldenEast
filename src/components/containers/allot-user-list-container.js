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
        console.log("data",data)
        function UserData() {
             if (data.list.length < 5 && data.list.length > 0 ){
                 userList =  <UserListTable  data={data.list} />;
             }else if (data.list.length <= 0 ){
                   userList = ' ';
             }
             else {
                 userList = <h3 className="q-user-txt">同名人数过多，请输入详细信息搜索</h3>;
             };
        };
        let userList;
        if (data.length == 0){
            userList = <h3 className="q-user-txt">请输入详细信息搜索</h3>;
        }else {
            UserData()
        };
		return this.props.children || (
			<div>
				<div className="userListHeader border-b">
					<SearchUserInput search={this.submitSearch} onChange={this.onChange} />
				</div>
                <div className="column-txt">
                   {userList}
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

