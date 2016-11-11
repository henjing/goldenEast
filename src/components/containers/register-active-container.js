import React from 'react';
import { Button, Input, message } from 'antd';
import RegisterActiveTable from '../views/register-active-table';
import { getRegisterActiveData } from '../../api/app-interaction-api';
import { mergeDeep} from '../../helpers/helpers';

const RegisterActiveContainer = React.createClass({
	getInitialState(){
		return {
			data:{
				list:[],
				sum: {},
				this_page: '',
				total: '',
			},
			page: 1,
			search: '',
			loading: false,
		}
	},
	submitSearch(){
		this.getData();	
	},
	onChange(e){
		this.setState({
			page: 1,
			search:  e.target.value
		});
	},
	onPageChange(page){
		this.setState({
			page: page,
		},function(){
			this.getData();
		});
		
	},
	getData(){
		this.setState({
			loading: true
		});
		var _this = this;
		getRegisterActiveData({page:this.state.page,'search[find]':this.state.search},function(info){
			_this.setState({
				data: info.data,
				loading: false,
			});
		},function(info){
			message.error(info.info,5);
			var template = { data : _this.state.data};
			var resault = {
				data : {
					list:[],
					sum: {
						activated_total: 0,
						fees_total: 0,
						registered_total: 0,
					},
					this_page: '',
					total: '',
				}
			}
            var merged = mergeDeep(template, resault);
			_this.setState({
				data: merged.data,
				loading: false,
			});
		});
		
	},
	componentDidMount(){
		this.getData();
	},
	render(){
		const { list, sum, this_page, total } = this.state.data;
		return (
			<div>
				<div className="userListHeader">
					<div className="searchBar">
	                <Input
	                    style={{ width: '200px' }}
	                    onChange={this.onChange}
	                    onPressEnter={this.submitSearch}
	                    placeholder="输入公司名称"
	                  />
	                <Button onClick={this.submitSearch} type="primary" style={{marginLeft:'20px'}}>搜索</Button>
	            </div>
					<div className="number-info">
						<span>{sum.activated_total}</span>
						<p>当月总激活量</p>
					</div>
					<div className="number-info">
						<span>{sum.registered_total}</span>
						<p>当月总注册量</p>
					</div>
					<div className="number-info">
						<span>{sum.fees_total}</span>
						<p>当月总手续费</p>
					</div>
				</div>
				
				<RegisterActiveTable defaultPageSize={12} total={total} currentPage={this_page} dataSource={list} onPageChange={this.onPageChange} loading={this.state.loading}/>
			</div>
		)
	},
});

export default RegisterActiveContainer;
