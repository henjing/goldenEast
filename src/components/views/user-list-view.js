import React from 'react';
import { Table,Button } from 'antd';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const data = [{
  key: '1',
  name: 'John Brown',
  level: 32,
  phone: 18889898989,
  inviter: 'enjing',
  inviter_phone: 18889898989,
  time: '2016-5-16 12:30:6',
}, {
  key: '2',
  name: 'Jim Green',
  level: 42,
  phone: 18889898888,
  inviter: 'enjing',
  inviter_phone: 18889898989,
  time: '2016-5-16 12:30:6',
}, {
  key: '3',
  name: 'Joe Black',
  level: 32,
  phone: 18900010002,
  inviter: 'enjing',
  inviter_phone: 18889898989,
  time: '2016-5-16 12:30:6',
}];

const UserListTable = React.createClass({
	getColumns(){
		const renderContent = function (value, row, index) {
		  const obj = {
		    children: value,
		    props: {},
		  };
		  if (index === 4) {
		    obj.props.colSpan = 0;
		  }
		  return obj;
		};
		const columns = [{
		  title: '姓名',
		  dataIndex: 'name',
		  render(text, row, index) {
		      return (
		      	<div className="user-avatar-bar">
			      	<span className="user-avatar" style={{backgroundImage:'url()'}}>

			      	</span>
			      	<div className="user-avatar-bar-text">
			      		<p className="name">{text}</p>
			      		<span>微信昵称</span>
			      	</div>
			      	
		      	</div>
		      );
		  },
		}, {
		  title: '级别',
		  dataIndex: 'level',
		  render: renderContent,
		}, {
		  title: '手机号',
		  dataIndex: 'phone',
		  render: renderContent,
		}, {
		  title: '邀请人',
		  dataIndex: 'inviter',
		  render: renderContent,
		}, {
		  title: '邀请人手机',
		  dataIndex: 'inviter_phone',
		  render: renderContent,
		}, {
		  title: '注册时间',
		  dataIndex: 'time',
		  render: renderContent,
		}, {
		  title: '操作',
		  dataIndex: '',
		  render(){
		  	return (
		  		<Button type="primary" size="small" disabled icon="search">个人详情</Button>
		  	)
		  },
		}];
		
		return columns;
	},
	render(){
		const columns = this.getColumns();
		return(
			<Table columns={columns} dataSource={data} bordered />
		)
	}
});

export default UserListTable;
