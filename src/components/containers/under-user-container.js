import React from 'react';
import { Table, Icon, Button, AutoComplete, Input  } from 'antd';
import { connect } from 'react-redux';
import styles from './under-user-tree.less';
import { getUnderUserData } from '../../api/app-interaction-api';
import { UnderUserTable , UserTable } from '../views/under-user-view';
import { updateUnderUserSearch } from '../../actions/app-interaction-actions';
import store from '../../store';

const UnderUserContainer = React.createClass({
	getInitialState(){
		return {
			inputValue: '',
		}
	},
	componentDidMount(){
		getUnderUserData({});
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateUnderUserSearch({
    		'search[find]' : '',
            'sh' : '',
            'sn' : '',
            'page' : 1
        }));
    },
	onChange(e){
		this.setState({ inputValue: e.target.value });
		store.dispatch(updateUnderUserSearch({ 
		 	'search[find]' : e.target.value,
		 	'page' : 1 ,
		 	'sh' : 1,
		 	'sn' : '',
		}));
	},
	
	submitSearch(){
		getUnderUserData(this.props.searchState);
	},
	onPageChange(page){
		store.dispatch(updateUnderUserSearch({ 
			'page' : page,
			'sh' : ''
		}));
		this.submitSearch()
	},
	underClick(user_sn){
		return function(){
			store.dispatch(updateUnderUserSearch({ 
				'sn' : user_sn,
				'page' : 1,
				'sh' : '',
				'search[find]' : '',
			}));
			this.submitSearch();
			this.setState({ inputValue: '' });
		}.bind(this)
	},
	onNavClick(user_sn){
		return function(){
			store.dispatch(updateUnderUserSearch({
				'sn': user_sn,
				'page' : 1,
				'sh' : ''
			}));
			this.submitSearch();
			this.setState({ inputValue: '' });
		}.bind(this)
	},

	render(){
		const {data} = this.props.dataState;
		var routes=[];
		try{for(let i=0;i<data.route.length;i++){
			if(i == data.route.length-1){
				routes.push((<span>{data.route[i].user_name}</span>));
			}else{
				routes.push((<span><a onClick={this.onNavClick(data.route[i].user_sn)}>{data.route[i].user_name}</a>></span>));
			}
		}}catch(e){};

		return (
			<div>
				<div className="userListHeader">
					<div className="searchBar">
		                <Input
		                    style={{ width: '200px' }}
		                    onChange={this.onChange}
		                    onPressEnter={this.submitSearch}
		                    placeholder="输入姓名或手机号"
		                    value={this.state.inputValue}
		                  />
		                <Button onClick={this.submitSearch} type="primary" style={{marginLeft:'20px'}}>搜索</Button>
		            </div>
				</div>
				<div className={styles.underUserNav}>
					{routes}
				</div>
				<UnderUserTable data={data.list} 
					currentPage={data.this_page} 
					total={data.total} 
					underClick={this.underClick}
					onPageChange={this.onPageChange}/>
			</div>
		)
	},
});

const mapStateToProps = function (store) {
    return {
        dataState : store.underUserState.dataState,
        searchState : store.underUserState.searchState
    }
};

export default connect(mapStateToProps)(UnderUserContainer);

