import React from 'react';
import { Button, Input } from 'antd';
import RegisterActiveTable from '../views/register-active-table';
import { getRegisterActiveData } from '../../api/app-interaction-api';
import '../../test.js';

const RegisterActiveContainer = React.createClass({
	getInitialState(){
		return {
			data:{
				list:[]
			},
			page: '',
			searchData: '',
		}
	},
	submitSearch(){
		this.getData();
		console.log(this.state.searchData)
	},
	onChange(e){
		this.setState({
			searchData: e.terget.value
		});
	},
	onPageChange(page){
		this.setState({
			page: page
		});
		this.getData();
	},
	getData(){
		const data = {
			"total": 40,
			"current_total_rigister": 1234,
			"current_total_active": 660,
			"last_total_rigister": 23340,
			"last_total_active": 5640,
			"list": [{
				"jujian_number": 100000000,
				"jujian_name": '广西向前网络科技有限公司',
				"current_register": 900,
				"current_active": 530,
				"last_register": 2340,
				"last_active": 450,
			},{
				"jujian_number": 100000000,
				"jujian_name": '广西向前网络科技有限公司',
				"current_register": 900,
				"current_active": 530,
				"last_register": 2340,
				"last_active": 450,
			}]
		}
		this.setState({
			data: data
		});
	},
	componentDidMount(){
		this.getData();
//		getRegisterActiveData({},function(info){
//			alert('2')
//			console.log('dfafa')
//		},function(info){
//			console.log('info')
//		});
	},
	render(){
		console.log(this.state.data)
		const data=this.state.data;
		return (
			<div>
				<div className="userListHeader">
					<div className="searchBar">
	                <Input
	                    style={{ width: '200px' }}
	                    onChange={this.onChange}
	                    onPressEnter={this.submitSearch}
	                    placeholder="输入公司名称或居间号"
	                  />
	                <Button onClick={this.submitSearch} type="primary" style={{marginLeft:'20px'}}>搜索</Button>
	            </div>
					<div className="number-info">
						<span>{data.current_total_rigister}</span>
						<p>当月总注册量</p>
					</div>
                    <div className="number-info">
						<span>{data.current_total_active}</span>
						<p>当月总激活量</p>
					</div>
					<div className="number-info">
						<span>{data.last_total_rigister}</span>
						<p>上月总注册量</p>
					</div>
                    <div className="number-info">
						<span>{data.last_total_active}</span>
						<p>上月总激活量</p>
					</div>
				</div>
				
				<RegisterActiveTable defaultPageSize={12} total={data.total} currentPage={this.state.page} dataSource={data.list} onPageChange={this.onPageChange} />
			</div>
		)
	},
});

export default RegisterActiveContainer;
