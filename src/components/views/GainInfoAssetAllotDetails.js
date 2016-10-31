import React, { PropTypes } from 'react';
import { Table,Pagination } from 'antd';

const InfoAssetsList = (props) => {
    const columns = [{
        title: '用户姓名',
        className: 'column-txt',
        width: 100,
        dataIndex: 'name',
    },  {
        title: '手机号',
        className: 'column-txt',
        width: 100,
        dataIndex: 'phone',
    }, {
        title: '获得信息资产',
        className: 'column-txt',
        width: 100,
        dataIndex: 'assets',
    },{
        title: '最新获得时间',
        className: 'column-txt',
        width: 100,
        dataIndex: 'time',
    }, {
        title: '获得详情',
        className: 'column-txt',
        width: 100,
        dataIndex: 'source',
        }];

    return (
        <Table
            columns={columns}
            title={() => '名下小金信息资产分配详情'}
            bordered
            pagination={{defaultCurrent:1 ,total:500,}}
            className={'column-txt'}
        />
    );
};

export default InfoAssetsList;