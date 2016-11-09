import React from 'react';
import { Table, Icon, Button } from 'antd';
import SearchInput from '../views/SearchInput';
import styles from './under-user-tree.less';
import { getUnderUserData } from '../../api/app-interaction-api';
import { UnderUserTable , UserTable } from '../views/under-user-view';

const data = [{
	cellphone: "18192089339",
	children_sum:259,
	inv_cellphone:"15091522344",
	inv_user_name:"罗瑞平",
	inv_user_sn:"c2351607909ea9bdeef0f6c7fd0785f7",
	is_excellent:1,
	jujianshang_corp_name:"西安泽森企业管理咨询有限公司",
	level:5,
	register_date:"2015-06-02 18:14:24",
	user_name:"安然",
	user_sn:"7af0d0644be5779031587360cf91ae86",
	wechat_avatar:"http://wx.qlogo.cn/mmopen/YNLFicY8ib5QhtDv2euxQDe5BBTxarfIkmvwDhxmSAq3tgibj0cBqe7eScZeg9QXKYKKtHc9V4bZHbeW99F3N0vZlbmpPIj4eRf/0",
	wechat_nickname:"安然",
},{
	cellphone: "18192089339",
	children_sum:259,
	inv_cellphone:"15091522344",
	inv_user_name:"罗瑞平",
	inv_user_sn:"c2351607909ea9bdeef0f6c7fd0785f7",
	is_excellent:1,
	jujianshang_corp_name:"西安泽森企业管理咨询有限公司",
	level:5,
	register_date:"2015-06-02 18:14:24",
	user_name:"安然",
	user_sn:"7af0d0644be5779031587360cf91ae87",

	wechat_nickname:"安然",
}];


const UnderUserContainer = React.createClass({
	getInitialState(){
		return {
			data: {
				list: [],
				user: {},
				total: 20,
				page: 1,
			},
			searchData: {
				"search[find]": '',
				"sn": '',
				"page": 1
			},
			userTable: true,
		}
	},
	componentDidMount(){
		var _this = this;
		getUnderUserData({},function(info){
			console.log('underUserData',info)
			this.setState({
				data: info.data
			});
		},function(info){
			console.log('fail',info)
		});
	},
	
	submitSearch(){
		console.log(this.state.searchData)
		getUnderUserData(this.state.searchData,function(info){
				console.log('underUserData',info)
				this.setState({
					data: info.data
				});
			},function(info){
				console.log('fail',info)
			});
	},
	onPageChange(page){
		this.setState({
				searchData: {
					page: page
				}
			},function(){
				this.submitSearch();
			});
	},
	underClick(info){
		return function(){
			this.setState({
				userTable: false,
				searchData: {
					sn: info
				}
			},function(){
				this.submitSearch();
			});
			
		}.bind(this)
	},
	
	render(){
		
		
		return (
			<div>
				<div className="userListHeader">
					<SearchInput search={this.submitSearch} onChange={this.onChange}/>
				</div>
				{this.state.userTable ? '' : (<div className={styles.underUserNav}>
					<a>马步王子</a>>
					<a>马步王子</a>>
					<span>马步王子</span>
				</div>)}
				{!this.state.userTable ? '' : (<UserTable data={data}/>)}
				<UnderUserTable data={data} 
					currentPage={this.state.data.page} 
					total={this.state.data.total} 
					underClick={this.underClick}
					onPageChange={this.onPageChange}/>
			</div>
		)
	},
});

export default UnderUserContainer;
