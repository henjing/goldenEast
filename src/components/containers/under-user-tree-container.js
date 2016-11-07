import React from 'react';
import { Table, Icon } from 'antd';
import SearchInput from '../views/SearchInput';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';
import styles from './under-user-tree.less';
import UnderUserTreeView from '../views/under-user-tree-view.js';

const data = [{
  key: '1',
  name: '马步王子',
  level: 3,
  cellphone: '15878193546',
  inviter: 'seven',
  inv_cellphone: '18577191364',
  register_date: '2016-12-30 11:52:30',
}];
const dataTree = {
		
		"list": [
            {
                "inviting": {
                    "cellphone": "13878103554",
                    "user_name": "Mio-艺"
                },
                "cellphone": "18298765432",
                "inviting_people": 8889,
                "level": 0,
                "register_date": "2016-08-10 18:23:58",
                "user_id": 430069,
                "user_name": "保险测3",
                "user_sn": "1dcb22a203c1266d64a9bbcdff893015"
            },
            {
                "inviting": {
                    "cellphone": "13878103554",
                    "user_name": "Mio-艺"
                },
                "cellphone": "18096734515",
                "inviting_people": 8889,
                "level": 0,
                "register_date": "2016-05-30 10:04:40",
                "user_id": 334964,
                "user_name": "保险测2",
                "user_sn": "2566ca293786bd34eb534b229f8bfaab"
            },
            {
                "inviting": {
                    "cellphone": "13878103554",
                    "user_name": "Mio-艺"
                },
                "cellphone": "14700001111",
                "inviting_people": 8889,
                "level": 0,
                "register_date": "2015-12-23 18:16:01",
                "user_id": 134107,
                "user_name": "保险测1",
                "user_sn": "a913e311da4a26d215df04b68b538e83"
            },
        ],
        "this_page": 1,
        "total": 21
    }

const UnderUserTreeContainer = React.createClass({
	jinLevels() {
        return ['注册用户', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
  	},
	submitSearch(){
		
	},
	onChange(){
		
	},
	getColumns(){
		var level = this.jinLevels();
		const columns = [{
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
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
		  dataIndex: 'inviter',
		  key: 'inviter',
		
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
		const columns = this.getColumns();
		const tableTitle = () => (<div style={{textAlign: 'center',color: '#333',fontSize: '14px'}}>马步王子基本信息</div>);
		return (
			<div>
				<div className="userListHeader">
					<SearchInput search={this.submitSearch} onChange={this.onChange}/>
				</div>
				<Table columns={columns} dataSource={data} bordered title={tableTitle} pagination={false}/>
				<div className={styles.underTitle}>名下用户</div>
				<div className={styles.noDataDefault}>
					<Icon type="frown-o" style={{fontSize: '16px',marginRight: '5px'}} />
					<span>暂无名下用户!</span>
				</div>
				<UnderUserTreeView data={dataTree}/>
			</div>
		)
	},
});

export default UnderUserTreeContainer;
