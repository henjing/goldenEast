import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/board-market-brokerage-table';
import { connect } from 'react-redux';
import SearchInput from '../views/SearchInput';
import store from '../../store';
import { updateBoardMarketBrokerageSearch } from '../../actions/app-interaction-actions';
import { getBoardMarketBrokerageData } from '../../api/app-interaction-api';

const RangePicker = DatePicker.RangePicker;

var BoardMarketBrokerageContainer = React.createClass({
    
    componentDidMount() {
        getBoardMarketBrokerageData({});
    },
    componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateBoardMarketBrokerageSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },

    onChange(value) {
        store.dispatch(updateBoardMarketBrokerageSearch({ 'search[find]' : value,'page' : 1 }));
    },
    
    submitSearch() {
        getBoardMarketBrokerageData(this.props.searchState);
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(updateBoardMarketBrokerageSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(updateBoardMarketBrokerageSearch({
            page : page
        }));
        // 启动搜索
        this.submitSearch();
    },

	render(){
        const { data } = this.props.dataState;
        console.log('dataSource', data);
		return this.props.children || (
			<div>
				<div className="userListHeader border-b">
					<SearchInput onChange={this.onChange} search={this.submitSearch} />
					<div className="number-info">
						<span>{data.total_amount_sum}</span>
						<p>总佣金</p>
					</div>
                    &nbsp;
                    <div className="number-info">
						<span>{data.total_users_sum}</span>
						<p>总人数</p>
					</div>
				</div>
				<div className="data-picker-bar">
					<label>交易日期:</label>
					<RangePicker style={{ width: '200px' }} onChange={this.onDateChange} />
				</div>
				<UserListTable defaultPageSize={12} total={data.total} currentPage={data.this_page} dataSource={data} onPageChange={this.onPageChange} />
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.boardMarketBrokerageState.dataState,
        searchState : store.boardMarketBrokerageState.searchState
    }
};

export default connect(mapStateToProps)(BoardMarketBrokerageContainer);
