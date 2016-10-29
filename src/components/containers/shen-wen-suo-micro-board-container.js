import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './list-container.css';
import UserListTable from '../views/chuan-shang-board-market-table';
import { connect } from 'react-redux';
import SearchInput from '../views/SearchInput';
import store from '../../store';
import { updateShenWenSuoMicroBoardSearch } from '../../actions/app-interaction-actions';
import { getShenWenSuoMicroBoardData } from '../../api/app-interaction-api';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({

    componentDidMount() {
        getShenWenSuoMicroBoardData({});
    },

    onChange(value) {
        store.dispatch(updateShenWenSuoMicroBoardSearch({ 'search[find]' : value}));
    },

    submitSearch() {
        getShenWenSuoMicroBoardData(this.props.searchState);
        // console.log('test', this.props.searchState);
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(updateShenWenSuoMicroBoardSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1]
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(updateShenWenSuoMicroBoardSearch({
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
						<p>总手续费</p>
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
				<UserListTable defaultPageSize={12} total={data.total} currentPage={data.this_page} dataSource={data} onPageChange={this.onPageChange} />
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.shenWenSuoMicroBoardState.dataState,
        searchState : store.shenWenSuoMicroBoardState.searchState
    }
};

export default connect(mapStateToProps)(UserListContainer);
