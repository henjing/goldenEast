import React from 'react';
import { Table, Spin, Input, Button } from 'antd';
import { connect } from 'react-redux';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';
import styles from './under-user-tree.less';
import UnderUserTreeView from '../views/under-user-tree-view.js';
import { getUnderUserTreeData } from '../../api/app-interaction-api';
import { updateUnderUserTreeSearch } from '../../actions/app-interaction-actions';
import store from '../../store';

const UnderUserTreeContainer = React.createClass({
	getInitialState(){
		return {
			loading: true
		}
	},
	componentDidMount(){
		const _this = this;
		getUnderUserTreeData({},function(){
			_this.setState({ loading : false });
		},function(){
			_this.setState({ loading : false });
		});
	},
	jinLevels() {
    return ['注册用户', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
	},
	submitSearch(){
		const _this = this;
		getUnderUserTreeData(this.props.searchState,function(){
			_this.setState({ loading : false });
		},function(){
			_this.setState({ loading : false });
		});
		this.refs.userTree.getUserList(this.props.searchState)
	},
	onChange(e){
		store.dispatch(updateUnderUserTreeSearch({ 
		 	'search[find]' : e.target.value,
		 	'page' : 1 ,
		 	'sn' : '',
		}));
	},

	getColumns(){
		var level = this.jinLevels();
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
	render(){
		const { user, list} = this.props.dataState.data;
		const columns = this.getColumns();
		const tableTitle = (cont) => {
			try{
				return (<div style={{textAlign: 'center',color: '#333',fontSize: '14px'}}>{cont[0].user_name}基本信息</div>);
			}catch(e){}
		} 
		return this.props.children || (
			<Spin spinning={this.state.loading} size="large">
			<div>
				<div className="userListHeader">
					<div className="searchBar">
						<label style={{fontSize: '14px',marginRight: '10px'}}>搜索名下用户：</label>
		                <Input
		                    style={{ width: '200px' }}
		                    onChange={this.onChange}
		                    onPressEnter={this.submitSearch}
		                    placeholder="输入姓名或手机号"
		                  />
		                <Button onClick={this.submitSearch} type="primary" style={{marginLeft:'20px'}}>搜索</Button>
		            </div>
				</div>
				<Table columns={columns} dataSource={user} bordered title={tableTitle} pagination={false} size="middle"/>
				<div className={styles.underTitle}>名下用户</div>
				<UnderUserTreeView ref="userTree" />
				
			</div>
			</Spin>
		)
	},
});

const mapStateToProps = function (store) {
    return {
        dataState : store.underUserTreeState.dataState,
        searchState : store.underUserTreeState.searchState
    }
};

export default connect(mapStateToProps)(UnderUserTreeContainer);

