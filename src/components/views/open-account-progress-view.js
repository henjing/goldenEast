import React from 'react';
import { Table,Button } from 'antd';
import { Link } from 'react-router';

const OpenAccountProgressTable = React.createClass({
	getColumns(){
		var tableTitleChange = this.props.tableTitleChange == 0 ? '提交资料时间' : '注册时间';
		const columns = [{
		  title: '姓名',
		  dataIndex: 'user_name',
		  key: 'user_name',
		  render(text, row, index) {
		  	  var firstName = !row.wechat_avatar ? text.slice(0,1) : '';
		      return (
		      	<div className="user-avatar-bar">
			      	<span className="user-avatar" style={{backgroundImage:'url('+ row.wechat_avatar +')'}}>
						{firstName}
			      	</span>
			      	<div className="user-avatar-bar-text">
			      		<p className="name">{text}</p>
			      	</div>
		      	</div>
		      );
		  },
		}, {
		  title: '手机号码',
		  dataIndex: 'cellphone',
		  key: 'cellphone',
		}, {
		  title: '账号',
		  dataIndex: 'account_status',
		  key: 'account_status',
		  render(text,row,index) {
		  	const styles = {
		  		display: 'linline-block',
		  		padding: '4px 8px',
		  		background: '#FF5B5B',
		  		borderRadius: '4px',
		  		color: '#fff',
		  	}
		  	if(text == 0 || text == 1){
		  		return (<span style={styles}>{row.type_name}未开户</span>)
		  	}else{
		  		return <span>{row.account}</span>
		  	}
		  },
		}, {
		  title: tableTitleChange,
		  dataIndex: 'update_time',
		  key: 'update_time',
		}];
		
		return columns;
	},
	onChange(page){
		this.props.onPageChange(page)
	},
	render(){
		const columns = this.getColumns();
		const pagination = {
        defaultPageSize : 12,
        onChange : this.onChange,
        total : this.props.total,
        current : parseInt(this.props.currentPage)
    };
		return(
			<Table pagination={pagination} size="middle" columns={columns} 
				dataSource={this.props.dataSource} bordered loading={this.props.loading} />
		)
	}
});

export default OpenAccountProgressTable;
