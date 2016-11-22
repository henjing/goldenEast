import React from 'react';
import {  AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import ShenWenVoucherListTable from '../views/shen-wen-suo-voucher-list-view';
import SearchInput from '../views/SearchInput.js';
import store from '../../store';
import { connect } from 'react-redux';
import { updateShenWenSuoVoucherListDataListDataSearch } from '../../actions/app-interaction-actions';
import { getShenWenSuoVoucherListData } from '../../api/app-interaction-api';

const RangePicker = DatePicker.RangePicker;

var UserListContainer = React.createClass({
	getInitialState(){
		return {
			whenSearchHide: false
		}
	},
	onChange(value){
		store.dispatch(updateShenWenSuoVoucherListDataListDataSearch({
    		'search[find]' : value,
            'page' : 1
        }));
	},
	onDateChange(dates, dateStrings){
		store.dispatch(updateShenWenSuoVoucherListDataListDataSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        this.submitSearch();
	},
	submitSearch() {
        getShenWenSuoVoucherListData(this.props.searchState);
        //当搜索的时候隐藏右上角的总注册量
        this.setState({ whenSearchHide: true })
        if(!this.props.searchState['search[find]'] && !this.props.searchState['search[d_begin]'] ){
        	this.setState({ whenSearchHide: false })
        }
    },
    onPageChange(page){
    	store.dispatch(updateShenWenSuoVoucherListDataListDataSearch({
    		page:page
    	}));
    	
    	this.submitSearch();
    },
	componentDidMount(){
		getShenWenSuoVoucherListData();
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateShenWenSuoVoucherListDataListDataSearch({
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
				<div className="userListHeader border-b">
					<SearchInput search={this.submitSearch} onChange={this.onChange}/>
                    <div className="number-info">
                        <span>{data.total_users_sum}</span>
                        <p>入金总人数</p>
                    </div>
                    &nbsp;
                    <div className="number-info">
                        <span>{data.total_tickets_sum}</span>
                        <p>已赠送体验券</p>
                    </div>
				</div>
				<div className="data-picker-bar">
					<label>入金时间:</label>
					<RangePicker style={{ width: 200 }} onChange={this.onDateChange} />
				</div>
				<ShenWenVoucherListTable data={data.list} total={data.total} currentPage={data.this_page} onPageChange={this.onPageChange}/>
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.shenWenSuoVoucherListStater.dataState,
        searchState : store.shenWenSuoVoucherListStater.searchState
    }
};

export default connect(mapStateToProps)(UserListContainer);

