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
            key : 'user_name',
            render(text, record, index) {
                var firstName = !record.wechat_avatar ? text.slice(0,1) : '';
                return (
                    <div className="user-avatar-bar">
			      	<span className="user-avatar" style={{backgroundImage:'url('+ record.wechat_avatar +')'}}>
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
            className: 'column-txt',
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
            title: '手机号码',
            className: 'column-txt',
            dataIndex: 'cellphone',
            key : 'cellphone'
        }, {
            title: '佣金',
            className: 'column-txt',
            dataIndex: 'amount',
            key : 'amount'
        },{
            title: '交易日期',
            className: 'column-txt',
            dataIndex: 'transaction_date',
            key : 'transaction_date'
        }, {
            title: '操作',
            className: 'column-txt',
            render(text, record, index){
                return (
                    <div>
                        <Link style={{color : 'white'}} to={`/board_market_brokerage/board_market_brokerage_gain_details/${record.user_sn}/${record.transaction_month_date_b}/${record.transaction_month_date_e}`}>
                            <Button type="primary" size="small"  icon="search">佣金获得详情</Button>
                        </Link>
                    </div>

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
			<Table pagination={pagination} columns={columns}  size="middle" dataSource={dataSource} bordered />
		)
	}
});

export default UserListTable;
