import React from 'react';
import { Table,Button } from 'antd';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const UserListTable = React.createClass({
	getColumns(){

		const columns = [{
		  title: '姓名',
		  dataIndex: 'user_name',
          key : 'user_name',
		  render(text, row, index) {
		      return (
		      	<div className="user-avatar-bar">
			      	<span className="user-avatar" style={{backgroundImage:'url()'}}>
                        {text.slice(0, 1)}
			      	</span>
			      	<div className="user-avatar-bar-text">
			      		<p className="name">{text}</p>
			      	</div>
			      	
		      	</div>
		      );
		  },
		}, {
		  title: '级别',
		  dataIndex: 'level',
          key : 'level'
		}, {
		  title: '大盘账号',
		  dataIndex: 'account',
          key : 'account'
		}, {
		  title: '总手续费',
		  dataIndex: 'fees',
          key : 'fees'
		}, {
		  title: '总盈亏',
		  dataIndex: 'profit_and_loss',
		  key : 'profit_and_loss'
		}, {
		  title: '最近交易时间',
		  dataIndex: 'transaction_date',
		  key : 'transaction_date'
		}, {
		  title: '操作',
		  render(text, record, index){
		  	return (
		  		<Button type="primary" size="small" disabled icon="search">个人详情</Button>
		  	)
		  }
		}];
		
		return columns;
	},

    onChange(page) {
        this.props.onPageChange(page);
    },

	render(){
		const columns = this.getColumns();
        const dataSource = this.props.dataSource.list;
        const pagination = {
            defaultPageSize : this.props.defaultPageSize,
            onChange : this.onChange,
            total : this.props.total,
            current : parseInt(this.props.currentPage)
        };
		return(
			<Table pagination={pagination} columns={columns} dataSource={dataSource} bordered />
		)
	}
});

export default UserListTable;
