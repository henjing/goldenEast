import React from 'react';
import { Table, Icon, Button } from 'antd';
import SearchInput from '../views/SearchInput';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';
import styles from './under-user-tree.less';
import { getUnderUserData } from '../../api/app-interaction-api';

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
			searchData: '',
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
	jinLevels() {
        return ['注册用户', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
  	},
	submitSearch(){
		
	},
	onChange(){
		
	},
	underClick(id){
		console.log(id)
	},
	getColumns(){
		var level = this.jinLevels();
		const columns = [{
		  title: '姓名',
		  dataIndex: 'user_name',
		  key: 'user_name',
		  render(text, row, index) {
		  		const firstName = text.slice(0,1);
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
		  		return level[0]
		  	}else{
		  		return <img src={level[value]} />
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
		
		}];
		
		return columns;
	},
	getUnderColumns(){
		var level = this.jinLevels();
		const columns = [{
		  title: '姓名',
		  dataIndex: 'user_name',
		  key: 'user_name',
		  render(text, row, index) {
		  		const firstName = text.slice(0,1);
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
		  		return level[0]
		  	}else{
		  		return <img src={level[value]} />
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
		  		<Button type="primary" size="small" icon="team" onClick={this.underClick}>一度人脉</Button>
		  	)
		  },
		}];
		
		return columns;
	},
	render(){
		const columns = this.getColumns();
		const tableTitle = () => (<div style={{textAlign: 'center',color: '#333',fontSize: '14px'}}>马步王子基本信息</div>);
		const UnderColumns = this.getUnderColumns();
		const UnderTableTitle = () => (<div style={{textAlign: 'center',color: '#333',fontSize: '14px'}}>一度人脉</div>);
		const pagination = {
        defaultPageSize : 12,
        onChange : this.onChange,
        total : this.state.data.total,
        current : parseInt(this.state.data.page)
    };
		return (
			<div>
				<div className="userListHeader">
					<SearchInput search={this.submitSearch} onChange={this.onChange}/>
				</div>
				<div className={styles.underUserNav}>
					<a>马步王子</a>>
					<a>马步王子</a>>
					<span>马步王子</span>
				</div>
				<Table columns={columns} dataSource={data} bordered title={tableTitle} pagination={false} size="middle" style={{marginBottom: '15px'}}/>
				<Table columns={UnderColumns} dataSource={data} bordered title={UnderTableTitle} pagination={pagination} size="middle"/>
			</div>
		)
	},
});

export default UnderUserContainer;
