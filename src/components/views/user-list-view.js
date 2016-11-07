import React from 'react';
import { Table,Button } from 'antd';
import { Link } from 'react-router';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const UserListTable = React.createClass({
	jinLevels() {
        return ['注册用户(0%)', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
  	},
	getColumns(){
		const jinLevels = this.jinLevels();
		const columns = [{
		  title: '姓名',
		  dataIndex: 'user_name',
		  render(text, row, index) {
		  		const firstName = text.slice(0,1);
		      return (
		      	<div className="user-avatar-bar">
			      	<span className="user-avatar" style={{backgroundImage:'url()'}}>
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
		  render(text){
		  	console.log(text)
		  	if(text == '0'){
	  			return <span>{jinLevels[text]}</span>
	  		}else{
	  			return <img src={jinLevels[text]}/>
	  		}
		  },
		}, {
		  title: '手机号',
		  dataIndex: 'cellphone',
		}, {
		  title: '邀请人',
		  dataIndex: 'inv_user_name',
		}, {
		  title: '邀请人手机',
		  dataIndex: 'inv_cellphone',
		}, {
		  title: '注册时间',
		  dataIndex: 'register_date',
		}, {
		  title: '操作',
		  dataIndex: '',
		  render(text, row, index){
		  	return (
		  		<Link to={`/user_list/user_detail/${row.user_sn}`}>
		  			<Button type="primary" size="small" icon="search">个人详情</Button>
		  		</Link>
		  	)
		  },
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
			<Table pagination={pagination} columns={columns} dataSource={this.props.data} bordered />
		)
	}
});

export default UserListTable;
