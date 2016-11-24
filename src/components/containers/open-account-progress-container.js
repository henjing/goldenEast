import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/chuan-shang-post-card-table';
import { connect } from 'react-redux';
import SearchInput from '../views/SearchInput';
import store from '../../store';
import { updateOpenAccountProgressSearch } from '../../actions/app-interaction-actions';
import { getNotToOpenAccountData, getHaveToOpenAccountData } from '../../api/app-interaction-api'; 

const RangePicker = DatePicker.RangePicker;

var OpenAccountProgressContainer = React.createClass({
    
    componentDidMount() {
        getNotToOpenAccountData(this.props.searchState);
    },
    componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateOpenAccountProgressSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },

    onChange(value) {
        store.dispatch(updateOpenAccountProgressSearch({ 'search[find]' : value,'page' : 1 }));
    },
    
    submitSearch() {
    	//请求搜索前先判断是请求已经开户的还是未开户的
    	if(this.props.openState == false){
    		getNotToOpenAccountData(this.props.searchState);
    	}else{
    		getHaveToOpenAccountData(this.props.searchState);
    	}
        
    },
	
	//选择时间
    onDateChange(dates, dateStrings) {
        store.dispatch(updateOpenAccountProgressSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(updateOpenAccountProgressSearch({
            page : page
        }));
        // 启动搜索
        this.submitSearch();
    },

	render(){
        const { data } = this.props.dataState;
        console.log('dataSource', data);
		return (
			<div>
				<div className="userListHeader">
					<SearchInput onChange={this.onChange} search={this.submitSearch} />
					<div className="number-info">
						<span>{data.total_fees_sum}</span>
						<p>深文所总人数</p>
					</div>
                    &nbsp;
                    <div className="number-info">
						<span>{data.total_users_sum}</span>
						<p>今日新增</p>
					</div>
				</div>
				<div className="data-picker-bar">
					<label>交易时间:</label>
					<RangePicker style={{ width: '200px' }} onChange={this.onDateChange} />
				</div>
				<UserListTable defaultPageSize={12} total={data.total} currentPage={data.this_page} dataSource={data} onPageChange={this.onPageChange} />
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.openAccountProgressState.dataState,
        searchState : store.openAccountProgressState.searchState,
        openState : store.openAccountProgressState.openState
    }
};

export default connect(mapStateToProps)(OpenAccountProgressContainer);
