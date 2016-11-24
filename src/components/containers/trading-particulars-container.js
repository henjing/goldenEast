import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/trading-particulars-list';
import { connect } from 'react-redux';
import store from '../../store';
import { updateShenWenSuoBoardMarketDetailsSearch } from '../../actions/app-interaction-actions';
import { updateChuanShangBoardMarketDetailsSearch } from '../../actions/app-interaction-actions';


import { getShenWenSuoBoardMarketDetailsData } from '../../api/app-interaction-api';
import { getChuanShangBoardMarketDetailsData } from '../../api/app-interaction-api';



const RangePicker = DatePicker.RangePicker;

var ChuanShangBoardMarketContainer = React.createClass({
    getInitialState() {
        let importUpdateMarketSearch;
        let importUpdateMarketData;
        let marketName= this.props.params.marketName;
        switch (marketName)
        {
            case 'chuanshang_dapan':
                importUpdateMarketSearch=updateChuanShangBoardMarketDetailsSearch;
                importUpdateMarketData=getChuanShangBoardMarketDetailsData;
                console.log(11111);
                break;
            case 'shenwen_dapan':
                importUpdateMarketSearch=updateShenWenSuoBoardMarketDetailsSearch;
                importUpdateMarketData=getShenWenSuoBoardMarketDetailsData;
                  console.log(22222);
                break;
        };
        return {
            updateMarketSearch:importUpdateMarketSearch,
            updateMarketData:importUpdateMarketData,
            user_sn: ""
        }
    },
    componentWillMount(){
    	const user_sn = this.props.params.userSn;
        this.setState({
        	user_sn: user_sn
        })
    },
    componentDidMount() {
        const user_sn = this.state.user_sn;
        this.state.updateMarketData({sn:user_sn});
    },
    componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(this.state.updateMarketSearch({
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1,
        }));
    },

    submitSearch() {
        this.state.updateMarketData(this.props.searchState);
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(this.state.updateMarketSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1,
            sn: this.state.user_sn
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(this.state.updateMarketSearch({
            page : page,
             sn: this.state.user_sn
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
        dataState : store. boardBoardUserDetailsState.dataState,
        searchState : store. boardBoardUserDetailsState.searchState
    }
};

export default connect(mapStateToProps)(ChuanShangBoardMarketContainer);
