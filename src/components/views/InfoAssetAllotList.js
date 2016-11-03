import React from 'react';
import { Link } from 'react-router';
import { Table } from 'antd';
import ParticularsBtn from '../views/particulars-btn';

const InfoAssetAllotList = React.createClass({
    getColumns(){
        const columns = [
            {
                title: '姓名',
                className:'box-align',
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
                className: 'column-txt',
                dataIndex: 'level',
            }, {
                title: '手机号码',
                className: 'column-txt',
                dataIndex: 'phone',
            }, {
                title: '邀请人',
                className: 'column-txt',
                dataIndex: 'inviter',
            }, {
                title: '邀请人手机',
                className: 'column-txt',
                dataIndex: 'inviter_phone',
            }, {
                title: '操作',
                className: 'column-txt',
                dataIndex: '',
                width: 400,
                render(text, record, index){
                    return (
                        <ParticularsBtn data={text} />
                    )
                },
            }];
        return columns;
    },
    render(){
        const data= this.props.dataSource;
        const columns = this.getColumns();
        return(
            <Table columns={columns} dataSource={data}  bordered />
        )
    }
});

export default InfoAssetAllotList;


