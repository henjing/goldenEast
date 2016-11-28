import React from 'react';
import { Table,Button } from 'antd';
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
		  render(text, record, index) {
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
          key : 'level',
          render(text, record, index) {
              // console.log('text', text, 'index', index);
              if (text == '0') {
                  return <span>{jinLevels[text]}</span>
              }
              return (
                  <img src={jinLevels[text]} alt="jinLevel"/>
              )
          }
		}, {
		  title: '账号',
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
		  title: '交易时间',
		  dataIndex: 'transaction_date',
		  key : 'transaction_date'
		}, {
		  title: '操作',
		  render(text, record, index){
		  	return (
                <Link style={{color : 'white'}} to={`/shen_wen_suo_board_market/shen_wen_trading_particulars/${record.user_sn}`}>
                    <Button type="primary" size="small"  icon="search">交易详情</Button>
                </Link>
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
			<Table pagination={pagination} size="middle" columns={columns} dataSource={dataSource} bordered />
		)
	}
});

export default UserListTable;
