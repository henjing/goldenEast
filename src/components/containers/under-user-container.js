import React from 'react';
import { Table, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import SearchInput from '../views/SearchInput';
import styles from './under-user-tree.less';
import { getUnderUserData } from '../../api/app-interaction-api';
import { UnderUserTable , UserTable } from '../views/under-user-view';
import { updateUnderUserSearch } from '../../actions/app-interaction-actions';
import store from '../../store';

const UnderUserContainer = React.createClass({
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
	onChange(value){
		 store.dispatch(updateUnderUserSearch({ 
		 	'search[find]' : value,
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
				'sh' : ''
			}));
			this.submitSearch()
		}.bind(this)
	},
	
	render(){
		const {data} = this.props.dataState;
		return (
			<div>
				<div className="userListHeader">
					<SearchInput search={this.submitSearch} onChange={this.onChange}/>
				</div>
				<div className={styles.underUserNav}>
					<a>马步王子</a>>
					<a>马步王子</a>>
					<span>马步王子</span>
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

