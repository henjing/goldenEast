import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import './user-list-container.css';
import UserListTable from '../views/board-market-brokerage-gain-details-table';
import { connect } from 'react-redux';
import store from '../../store';
import { updateBoardMarketBrokerageUserDetailSearch } from '../../actions/app-interaction-actions';
import { getBoardMarketUserDetailData } from '../../api/app-interaction-api';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;

var BoardMarketBrokerageGainDetailsContainer = React.createClass({
    getInitialState(){
        return {
            user_sn: '',
            userInfo: '',
            transactionStart:'',
            transactionEnd:'',
            accounts: []
        }
    },
    jinLevels() {
        return ['注册用户(0%)', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
    },
    componentWillMount(){
        const user_sn = this.props.params.details;
        const transactionStart = this.props.params.transactionStart;
        const transactionEnd = this.props.params.transactionEnd;
        this.setState({
            user_sn: user_sn,
            transactionStart:transactionStart,
            transactionEnd:transactionEnd,
        })
    },
    componentDidMount() {
        var _this = this;
    	const user_sn = this.state.user_sn;
        const transactionStart = this.props.params.transactionStart;
        const transactionEnd = this.props.params.transactionEnd;
        getBoardMarketUserDetailData({sn:user_sn,
            'search[d_begin]' : transactionStart,
            'search[d_end]' : transactionEnd,
        },function(info){
    		console.log(info)
    		_this.setState({
    			userInfo: info.data,
    			accounts: info.data.accounts
    		});
    	},function(info){
    		console.log('fail',info)});
    },
    submitSearch() {
        getBoardMarketUserDetailData(this.props.searchState);
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(updateBoardMarketBrokerageUserDetailSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1,
            sn: this.state.user_sn,
        }));
        // 启动搜索
        this.submitSearch();
    },
    onPageChange(page) {
        store.dispatch(updateBoardMarketBrokerageUserDetailSearch({
            page : page,
            sn: this.state.user_sn,
        }));
        // 启动搜索
        this.submitSearch();
    },
	render(){
         const jinLevels = this.jinLevels();
        const { data } = this.props.dataState;
        let avatar,avatarYes,user_name,level;
        let dateFormat = this.state.transactionStart;
        let dateFormat2 =  this.state.transactionEnd;
        dateFormat = dateFormat.match(/\d{4}.\d{1,2}.\d{1,2}/mg).toString();
        dateFormat = dateFormat.replace(/[^0-9]/mg, '/');
        dateFormat2 = dateFormat2.match(/\d{4}.\d{1,2}.\d{1,2}/mg).toString();
        dateFormat2 = dateFormat2.replace(/[^0-9]/mg, '/');
        try {
            user_name= data.user.user_name;
            avatar = !data.user.wechat_avatar ? data.user.user_name.slice(0,1): '';
            avatarYes = data.user.wechat_avatar;
            level = data.user.level;
        } catch(err) {}
		return (
			<div>
                <div className="userListHeader q-brokerage-user border-b">
                    <div className="q-brokerage-user">
                        <div className="q-brokerage-avatar margin-r-10">
                            <span style={{backgroundImage:'url('+avatarYes+')'}}>{avatar}</span>
                        </div>
                        <div className="">
                            <div className="margin-b-5">{user_name}</div>
                            <p className=""> <img src={jinLevels[level]} alt="jinLevel"/></p>
                        </div>
                    </div>
				</div>
				<div className="data-picker-bar">
					<label>交易日期:</label>
					<RangePicker style={{ width: '200px' }} onChange={this.onDateChange}
                     defaultValue={[moment(dateFormat), moment(dateFormat2)]}
                    />
				</div>
				<UserListTable defaultPageSize={12} total={data.total} currentPage={data.this_page} dataSource={data} onPageChange={this.onPageChange}   />
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.boardMarketBrokerageUserDetailState.dataState,
        searchState : store.boardMarketBrokerageUserDetailState.searchState
    }
};

export default connect(mapStateToProps)(BoardMarketBrokerageGainDetailsContainer);
