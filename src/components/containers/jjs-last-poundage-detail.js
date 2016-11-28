import React from 'react';
import { Table } from 'antd';
import { getJjsLastMonthPoundageData } from '../../api/app-interaction-api.js';

const dataSource = [];
const JjsLastPoundageContainer = React.createClass({
	getInitialState(){
		return {
			jjsid: '',
			fees_sum: '',
			jujianshang_corp_name: '',
			title: '',
			list: [],
			loading: true,
		}
	},
	componentWillMount(){
		const jjsid = this.props.params.jjsid;
		this.setState({ jjsid : jjsid });
	},
	componentDidMount(){
		const _this = this;
		getJjsLastMonthPoundageData({jjs: this.state.jjsid},function(info){
			const { fees_sum, jujianshang_corp_name, title, list} = info.data;
			_this.setState({ 
				fees_sum: fees_sum,
				jujianshang_corp_name: jujianshang_corp_name,
				title: title,
				list: list,
				loading: false,
			});
		},function(info){
			_this.setState({ loading: false })
		});
	},
	getColumns(){
		const columns = [{
		  title: 'name',
		  dataIndex: 'name',
		  key: 'name',
		  width: '50%',
		  className: 'table-text-center',
		}, {
		  title: 'poundage',
		  dataIndex: 'fees_sum',
		  key: 'fees_sum',
		  width: '50%',
		  className: 'table-text-center',
		}];
		
		return columns;
	},
	render(){
		const columns = this.getColumns();
		const tableTitle = (cont) => {
			try{
				return (<div style={{color: '#333',fontSize: '14px',textAlign: 'center'}}>{this.state.title}</div>);
			}catch(e){}
		} 
		const tableFooter = (cont) => {
			try{
				return (<div style={{color: '#333',fontSize: '14px',textAlign: 'center'}}>合计：{this.state.fees_sum}</div>);
			}catch(e){}
		} 
		
		return (
			<Table 
				dataSource={this.state.list}
				columns={columns}
				showHeader={false} bordered
				title={tableTitle}
				footer={tableFooter}
				pagination={false}
				loading={this.state.loading}
			/>
		)
	}
});

export default JjsLastPoundageContainer;
