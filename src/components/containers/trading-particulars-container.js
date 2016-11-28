import React from 'react';
import { DatePicker } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/trading-particulars-list';
import { connect } from 'react-redux';
import store from '../../store';
import { updateShenWenSuoBoardMarketDetailsSearch } from '../../actions/app-interaction-actions';
import { updateChuanShangBoardMarketDetailsSearch } from '../../actions/app-interaction-actions';
import { getShenWenSuoBoardMarketDetailsData } from '../../api/app-interaction-api';
import { getChuanShangBoardMarketDetailsData } from '../../api/app-interaction-api';
// 微盘
import { updateShenWenSuoMicroBoardDetailsSearch } from '../../actions/app-interaction-actions';
import { updateJiShangMicroBoardDetailsSearch } from '../../actions/app-interaction-actions';
import { updateYueGuoJiMicroBoardDetailsSearch } from '../../actions/app-interaction-actions';
import { getShenWenSuoMicroBoardDetails } from '../../api/app-interaction-api';
import { getJiShangMicroBoardDetails } from '../../api/app-interaction-api';
import { getYueGuoJiMicroBoardDetails } from '../../api/app-interaction-api';
// 邮币卡
import { updateChuanShangPostCardDetailsSearch } from '../../actions/app-interaction-actions';
import { updateJiShangPostCardDetailsSearch } from '../../actions/app-interaction-actions';
import { getChuanShangPostCardDetails } from '../../api/app-interaction-api';
import { getJiShangPostCardDetails } from '../../api/app-interaction-api';

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
                break;
            case 'shenwen_dapan':
                importUpdateMarketSearch=updateShenWenSuoBoardMarketDetailsSearch;
                importUpdateMarketData=getShenWenSuoBoardMarketDetailsData;
                break;
            // 微盘
            case 'shenwen_weipan':
                importUpdateMarketSearch=updateShenWenSuoMicroBoardDetailsSearch;
                importUpdateMarketData=getShenWenSuoMicroBoardDetails;
                break;
            case 'jishang_weipan':
                importUpdateMarketSearch=updateJiShangMicroBoardDetailsSearch;
                importUpdateMarketData=getJiShangMicroBoardDetails;
                break;
            case 'yueguoji_weipan':
                importUpdateMarketSearch=updateYueGuoJiMicroBoardDetailsSearch;
                importUpdateMarketData=getYueGuoJiMicroBoardDetails;
                break;
            // 邮币卡
            case 'chuanshang_youbika':
                importUpdateMarketSearch=updateChuanShangPostCardDetailsSearch;
                importUpdateMarketData=getChuanShangPostCardDetails;
                break;
            case 'jishang_youbika':
                importUpdateMarketSearch=updateJiShangPostCardDetailsSearch;
                importUpdateMarketData=getJiShangPostCardDetails;
                break;
        };
        return {
            updateMarketSearch:importUpdateMarketSearch,
            updateMarketData:importUpdateMarketData,
            user_sn: "",
            exchange_type:marketName,
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
		return (
			<div>
				<div className="data-picker-bar">
					<label>交易时间:</label>
					<RangePicker style={{ width: '200px' }} onChange={this.onDateChange} />
				</div>
				<UserListTable defaultPageSize={12} total={data.total} currentPage={data.this_page} exchange_type={this.state.exchange_type} dataSource={data} onPageChange={this.onPageChange} />
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
