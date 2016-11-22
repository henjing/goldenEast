import React from 'react';
import { Button, AutoComplete ,DatePicker, Spin } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/micro-market-brokerage-table';
import { connect } from 'react-redux';
import SearchInput from '../views/SearchInput';
import store from '../../store';
import { updateMicroBoardBrokerageSearch } from '../../actions/app-interaction-actions';
import { getMicroBoardBrokerageData } from '../../api/app-interaction-api';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({
	getInitialState(){
		return {
			loading: true,
		}
	},
    componentDidMount() {
        const _this = this;
        getMicroBoardBrokerageData({},function(info){
			_this.setState({loading: false});
		},function(info){
			_this.setState({loading: false});
		});
    },
    componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateMicroBoardBrokerageSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },

    onChange(value) {
        store.dispatch(updateMicroBoardBrokerageSearch({ 'search[find]' : value,'page' : 1 }));
    },

    submitSearch() {
        const _this = this;
        _this.setState({loading: true});
        getMicroBoardBrokerageData(this.props.searchState,function(info){
			_this.setState({loading: false});
		},function(info){
			_this.setState({loading: false});
		});
        // console.log('test', this.props.searchState);
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(updateMicroBoardBrokerageSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(updateMicroBoardBrokerageSearch({
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
					<label>交易时间:</label>
					<RangePicker style={{ width: '200px' }} onChange={this.onDateChange} />
				</div>
                <Spin spinning={this.state.loading} size="large">
                    <UserListTable defaultPageSize={12} total={data.total} currentPage={data.this_page} dataSource={data} onPageChange={this.onPageChange} />
                </Spin>
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.microBoardBrokerageState.dataState,
        searchState : store.microBoardBrokerageState.searchState
    }
};

export default connect(mapStateToProps)(UserListContainer);
