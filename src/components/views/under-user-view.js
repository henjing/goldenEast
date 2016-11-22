import React from 'react';
import { Table, Button } from 'antd';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';

const jinLevels = ['注册用户', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];

export const UnderUserTable = React.createClass({
	
	getColumns(){
		var _this = this;
		const columns = [{
		  title: '姓名',
		  dataIndex: 'user_name',
		  key: 'user_name',
		  render(text, row, index) {
		  	  var firstName = !row.wechat_avatar ? text.slice(0,1) : '';
		      return (
		      	<div className="user-avatar-bar">
			      	<span className="user-avatar" style={{backgroundImage:'url('+row.wechat_avatar+')'}}>
			      		{firstName}
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
		  key: 'level',
		  render(value){
		  	if(value == 0){
		  		return jinLevels[0]
		  	}else{
		  		return <img src={jinLevels[value]} />
		  	}
		  },
		}, {
		  title: '手机号码',
		  dataIndex: 'cellphone',
		  key: 'cellphone',
		}, {
		  title: '邀请人',
		  dataIndex: 'inv_user_name',
		  key: 'inv_user_name',
		
		}, {
		  title: '邀请人号码',
		  dataIndex: 'inv_cellphone',
		  key: 'inv_cellphone',
		
		}, {
		  title: '注册时间',
		  dataIndex: 'register_date',
		  key: 'register_date',
		
		}, {
		  title: '操作',
			dataIndex: '',
		  render(value, record, row){
		  	return (
		  		<Button type="primary" size="small" icon="team" onClick={_this.props.underClick(record.user_sn)}>一度人脉</Button>
		  	)
		  },
		}];
		
		return columns;
	},
	onChange(page){
		this.props.onPageChange(page)
	},
	render(){
		const data = this.props.data;
		const columns = this.getColumns();
		const pagination = {
	        defaultPageSize : 12,
	        onChange : this.onChange,
	        total : this.props.total,
	        current : parseInt(this.props.currentPage)
	    };
		return (
			<Table columns={columns} dataSource={data} bordered pagination={pagination} size="middle"/>
		)
	},
});

