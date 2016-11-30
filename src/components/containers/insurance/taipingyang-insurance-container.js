import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import TaiPingYangInsuranceView from '../../views/insurance/taipingyang-insurance-view';
import { connect } from 'react-redux';
import SearchInput from '../../views/SearchInput';
import store from '../../../store';
import { updataTaiPingYangInsuranceSearch } from '../../../actions/app-interaction-actions';
import { getTaiPingYangInsuranceData } from '../../../api/app-interaction-api';

const RangePicker = DatePicker.RangePicker;

var TaiPingYangInsuranceContainer = React.createClass({
    getInitialState() {
    	return {
    		loading: false,
    	}
    },
    componentDidMount() {
    	const _this = this;
    	this.setState({ loading: true });
        getTaiPingYangInsuranceData({},function(info){
        	_this.setState({ loading: false });
        },function(info){
        	_this.setState({ loading: false });
        });
    },
    componentWillUnmount(){
    	// 清理搜索条件
    	store.dispatch(updataTaiPingYangInsuranceSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },

    onChange(value) {
        store.dispatch(updataTaiPingYangInsuranceSearch({ 
        	'search[find]' : value,
        	'page' : 1
        }));
    },
    
    submitSearch() {
    	const _this = this;
    	this.setState({ loading: true });
        getTaiPingYangInsuranceData(this.props.searchState,function(info){
        	_this.setState({ loading: false });
        },function(info){
        	_this.setState({ loading: false });
        });
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(updataTaiPingYangInsuranceSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(updataTaiPingYangInsuranceSearch({
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
				<div className="userListHeader border-b">
					<SearchInput onChange={this.onChange} search={this.submitSearch} />
					<div className="number-info">
						<span>{data.total_money_sum}</span>
						<p>交易总额</p>
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
				<TaiPingYangInsuranceView 
					defaultPageSize={12} total={data.total} 
					currentPage={data.this_page} dataSource={data.list} 
					onPageChange={this.onPageChange} loading={this.state.loading}
				/>
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.taiPingYangInsuranceState.dataState,
        searchState : store.taiPingYangInsuranceState.searchState
    }
};

export default connect(mapStateToProps)(TaiPingYangInsuranceContainer);
