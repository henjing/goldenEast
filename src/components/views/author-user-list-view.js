import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';
import { Link } from 'react-router';

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
          key : 'user_name',
		  render(text, row, index) {
              const firstName = text.slice(0,1);
		      return (
		      	<div className="user-avatar-bar">
			      	<span className="user-avatar" style={{backgroundImage:'url()'}}>
                        {firstName}
			      	</span>
			      	<div className="user-avatar-bar-text">
			      		<p className="name">{text}</p>
			      		{/*<span>微信昵称</span>*/}
			      	</div>

		      	</div>
		      );
		  },
		}, {
          title: '级别',
          dataIndex: 'level',
          key : 'level',
          render(text) {
            // console.log(text);
            if(text == '0'){
                return <span>{jinLevels[text]}</span>
            } else {
                return <img src={jinLevels[text]}/>
            }
          }
		}, {
		  title: '手机号',
		  dataIndex: 'cellphone',
          key : 'cellphone'
		}, {
		  title: '邀请人',
		  dataIndex: 'inv_user_name',
          key : 'inv_user_name',
		}, {
		  title: '邀请人手机',
		  dataIndex: 'inv_cellphone',
          key : 'inv_cellphone'
		}, {
		  title: '注册时间',
		  dataIndex: 'register_date',
            key : 'register_date'
		}, {
		  title: '操作',
		  render : function(text, record, index) {
		  	return (
                <div>
                    <Link style={{color : 'white'}} to={`/user_list/user_detail/${record.user_sn}`}>
                        <Button type="primary" size="small" icon="search">个人详情</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Link style={{color : 'white'}} to={`/author_user_list/set_authorization/${record.user_sn}`}>
                        <Button className="btn-warning" type="primary" size="small" icon="setting">权限设置</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Popconfirm title="确认要删除此用户的所有权限?" onConfirm={this.props.deleteUserAuthor(record.user_sn)}>
                        <Button className="btn-danger" type="primary" size="small" icon="delete">删除所有权限</Button>
                    </Popconfirm>

                </div>
		  	)
		  }.bind(this),
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
