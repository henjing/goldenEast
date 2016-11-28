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
            title: '邮币卡账号',
            className: 'column-txt',
            dataIndex: 'account',
            key : 'account'
        }, {
            title: '总手续费',
            className: 'column-txt',
            dataIndex: 'fees',
            key : 'fees'
        }, {
            title: '持仓数量',
            className: 'column-txt',
            dataIndex: 'number',
            key : 'number'
        }, {
            title: '交易时间',
            className: 'column-txt',
            dataIndex: 'transaction_date',
            key : 'transaction_date'
        }, ];

        return columns;
    },

    onChange(page) {
        this.props.onPageChange(page);
    },

    render(){
        const columns = this.getColumns();
        let  DetailsRoute;
        const dataSource = this.props.dataSource;
        const pagination = {
            defaultPageSize : this.props.defaultPageSize,
            onChange : this.onChange,
            total : this.props.total,
            current : parseInt(this.props.currentPage)
        };
        if (dataSource.exchange_type == 'chuanshang_youbika'){
              DetailsRoute = 'chuan_shang_post_card';
        }else {
             DetailsRoute = 'ji_shang_post_card';
        };
        columns.push(
            {
                title: '操作',
                className: 'column-txt',
                render(text, record, index){
                    return (
                        <Link style={{color : 'white'}} to={`/${DetailsRoute}/trading_particulars/${dataSource.exchange_type}/${record.user_sn}`}>
                            <Button type="primary" size="small"  icon="search">交易详情</Button>
                        </Link>
                    )
                }
            }
        );
        return(
            <Table pagination={pagination} size="middle" columns={columns} dataSource={dataSource.list} bordered />
        )
    }
});

export default UserListTable;
