import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import HongBaoListTable from '../views/hongbao-list-view';
import SearchInput from '../views/SearchInput.js';
import store from '../../store';
import { connect } from 'react-redux';
import { updateHongBaoListDataSearch } from '../../actions/app-interaction-actions';
import { getHongBaoListData } from '../../api/app-interaction-api';


const RangePicker = DatePicker.RangePicker;

var HongBaoListContainer = React.createClass({
	getInitialState(){
		return {
			whenSearchHide: false,
			loading: false
		}
	},
	onChange(value){
		store.dispatch(updateHongBaoListDataSearch({
    		'search[find]' : value,
            'page' : 1
        }));
	},
	onDateChange(dates, dateStrings){
		store.dispatch(updateHongBaoListDataSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        this.submitSearch();
	},
	submitSearch() {
		const _this = this;
		_this.setState({ loading: true })
        getHongBaoListData(this.props.searchState,function(info){
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
    	store.dispatch(updateHongBaoListDataSearch({
    		page:page
    	}));
    	this.submitSearch();
    },
	componentDidMount(){
		const _this = this;
		_this.setState({ loading: true })
		getHongBaoListData({},function(info){
			_this.setState({ loading: false })
		},function(info){
			_this.setState({ loading: false })
		});
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateHongBaoListDataSearch({
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
					{!this.state.whenSearchHide ? (<div className="number-info">
						<span>{data.total}</span>
						<p>数据统计人数</p>
					</div>) : ''}
				</div>
				<div className="data-picker-bar">
					<label>交易日期:</label>
					<RangePicker style={{ width: 200 }} onChange={this.onDateChange} />
				</div>
				<HongBaoListTable 
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
        dataState : store.hongBaoListState.dataState,
        searchState : store.hongBaoListState.searchState
    }
};

export default connect(mapStateToProps)(HongBaoListContainer);

