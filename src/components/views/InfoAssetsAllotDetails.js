import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router';
import { Table,Button } from 'antd';
import { routeBase } from '../../appConstants/urlConfig';
=======
import { Table,Button } from 'antd';
>>>>>>> dev

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const data = [{
    key: '1',
    name: 'John Brown',
    level: 32,
    phone: 18889898989,
    inviter: 'enjing',
    inviter_phone: 18889898989,
}, {
    key: '2',
    name: 'Jim Green',
    level: 42,
    phone: 18889898888,
    inviter: 'enjing',
    inviter_phone: 18889898989,
}, {
    key: '3',
    name: 'Joe Black',
    level: 32,
    phone: 18900010002,
    inviter: 'enjing',
    inviter_phone: 18889898989,
}, {
    key: '4',
    name: 'Joe Black',
    level: 32,
    phone: 18900010002,
    inviter: 'enjing',
    inviter_phone: 18889898989,
}];

const InfoAssetsAllotDetails = React.createClass({
    getColumns(){
<<<<<<< HEAD
        const columns = [
            {
=======
        const columns = [{
>>>>>>> dev
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
            render(){
                return (
                    <div>
                        <Button className="margin-r-15 btn-bg-ff9" type="primary" size="small"  icon="swap">信息资产分配</Button>
<<<<<<< HEAD
                        <Link to={routeBase + 'under_info_asset_allot_details'}><Button type="primary" size="small"  icon="search">个人详情</Button></Link>
=======
                        <Button type="primary" size="small"  icon="search">个人详情</Button>
>>>>>>> dev
                    </div>

                )
            },
        }];

        return columns;
    },
    render(){
        const columns = this.getColumns();
        return(
            <Table columns={columns} dataSource={data} bordered />
        )
    }
});

export default InfoAssetsAllotDetails;

