import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/trading-particulars-list';
import { connect } from 'react-redux';
import store from '../../store';
import { updateChuanShangBoardMarketSearch } from '../../actions/app-interaction-actions';
import { getChuanShangBoardMarketData } from '../../api/app-interaction-api';

const RangePicker = DatePicker.RangePicker;

var ChuanShangBoardMarketContainer = React.createClass({
    getInitialState() {
        let updateMarketSearch;
        let name= 2;
        switch (name)
        {
            case 1:
                updateMarketSearch=updateChuanShangBoardMarketSearch;
                break;
            case 2:
                updateMarketSearch=updateChuanShangBoardMarketSearch;
                break;
            default:
                updateMarketSearch=updateChuanShangBoardMarketSearch;
        };
        return {
            updateMarketSearch2:updateMarketSearch,
        }
    },
    componentWillMount(){
    	const user_sn = this.props.params.userSn;
                console.log('user_sn', user_sn)
        this.setState({
        	user_sn: user_sn
        })
    },
    componentDidMount() {
        const user_sn = this.state.user_sn;
        getChuanShangBoardMarketData({sn:user_sn});
    },
    componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateChuanShangBoardMarketSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },

    submitSearch() {
        getChuanShangBoardMarketData(this.props.searchState);
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(this.state.updateMarketSearch2({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(updateChuanShangBoardMarketSearch({
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
        dataState : store.chuanShangBoardMarketState.dataState,
        searchState : store.chuanShangBoardMarketState.searchState
    }
};

export default connect(mapStateToProps)(ChuanShangBoardMarketContainer);
