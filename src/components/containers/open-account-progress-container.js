import React from 'react';
import { Button, Input ,DatePicker,Select } from 'antd';
import './user-list-container.css';
import OpenAccountProgressTable from '../views/open-account-progress-view';
import { connect } from 'react-redux';
import store from '../../store';
import { updateOpenAccountProgressSearch } from '../../actions/app-interaction-actions';
import { getNotToOpenAccountData, getHaveToOpenAccountData } from '../../api/app-interaction-api'; 

const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

var OpenAccountProgressContainer = React.createClass({
	getInitialState(){
		return {
			openStatae: false,
			tableTitleChange: 0,
			loading: false,
		}
	},
    
    componentDidMount() {
    	const _this = this;
    	this.setState({ loading : true });
		//请求数据,默认是深文所大盘未开户列表
        getNotToOpenAccountData(this.props.searchState,function(info){
        	_this.setState({ loading : false });
        },function(info){
        	_this.setState({ loading : false });
        });
    },
    componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateOpenAccountProgressSearch({
    		'page' : 1,
	        'search[find]': '',
			'search[d_begin]': '',
			'search[d_end]': '',
			'search[type]': 6, //默认为6，是深文所
        }));
    },

    onInputChange(e) {
        store.dispatch(updateOpenAccountProgressSearch({ 
        	'search[find]' : e.target.value,
        	'page' : 1
        }));
    },
    
    submitSearch() {
    	const _this = this;
    	this.setState({ loading : true });
    	//请求搜索前先判断是请求已经开户的还是未开户的
    	if(this.state.openState == false){
    		getNotToOpenAccountData(this.props.searchState,function(info){
	        	_this.setState({ loading : false });
	        },function(info){
	        	_this.setState({ loading : false });
	        });
	    }else{
	    	getHaveToOpenAccountData(this.props.searchState,function(info){
	        	_this.setState({ loading : false });
	        },function(info){
	        	_this.setState({ loading : false });
	        });
    	}
        
    },
	
	//选择时间
    onDateChange(dates, dateStrings) {
        store.dispatch(updateOpenAccountProgressSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(updateOpenAccountProgressSearch({
            'page' : page
        }));
        // 启动搜索
        this.submitSearch();
    },
    selectChange(value){
    	console.log(value);
//  	console.log(`selected ${value}`);
    	if(value == 'sws_0' || value == 'js_0' || value == 'cs_0') {
    		this.setState({ openState : false ,tableTitleChange: 0 })
    	}else{
    		this.setState({ openState : true ,tableTitleChange: 1 })
    	}
    	var type;
    	if(value == 'sws_0' || value == 'sws_1'){
    		type = 6;
    	}else if(value == 'js_0' || value == 'js_1'){
    		type = 7;
    	}else if(value == 'cs_0' || value == 'cs_1'){
    		type = 4;
    	}
    	
		store.dispatch(updateOpenAccountProgressSearch({
            'page' : 1,
			'search[type]': type, //默认为6，是深文所
        }));
        
        setTimeout(function(){
        	// 启动搜索
        	this.submitSearch();
        }.bind(this),100)
    },

	render(){
		console.log('openstate',this.state.openState)
        const { data } = this.props.dataState;
        console.log('dataSource', data);
        var dateLabelText = this.state.tableTitleChange == 0 ? '按提交资料时间查询' : '按注册时间查询';
		return (
			<div>
				<div className="userListHeader">
					<div className="searchBar" style={{marginRight: '20px'}}>
						<label>按条件查询：</label>
						<Select defaultValue="sws_0" style={{ width: 200 }} onChange={this.selectChange}>
					      <Option value="sws_0">深文所已提交资料未开户</Option>
					      <Option value="sws_1">深文所已开户</Option>
					      <Option value="js_0">吉商邮币卡已提交资料未开户</Option>
					      <Option value="js_1">吉商邮币卡已开户</Option>
					      <Option value="cs_0">川商邮币卡已提交资料未开户</Option>
					      <Option value="cs_1">川商邮币卡已开户</Option>
					    </Select>
				    </div>

					<div className="searchBar">
		                <Input
		                    style={{ width: '200px' }}
		                    onChange={this.onInputChange}
		                    onPressEnter={this.submitSearch}
		                    placeholder="输入姓名或手机号"
		                  />
		                <Button onClick={this.submitSearch} type="primary" style={{marginLeft:'10px'}}>搜索</Button>
		            </div>
					<div className="number-info">
						<span>{data.total_users_sum}</span>
						<p>总人数</p>
					</div>
                    &nbsp;
                    <div className="number-info">
						<span>{data.today_users_sum}</span>
						<p>今日新增</p>
					</div>
				</div>
				<div className="data-picker-bar">
					<label>{dateLabelText}：</label>
					<RangePicker style={{ width: '200px' }} onChange={this.onDateChange} />
				</div>
				<OpenAccountProgressTable 
					defaultPageSize={12}
					total={data.total}
					currentPage={data.this_page} 
					dataSource={data.list} 
					onPageChange={this.onPageChange}
					loading={this.state.loading}
					tableTitleChange={this.state.tableTitleChange}/>
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.openAccountProgressState.dataState,
        searchState : store.openAccountProgressState.searchState,
        openState : store.openAccountProgressState.openState
    }
};

export default connect(mapStateToProps)(OpenAccountProgressContainer);
