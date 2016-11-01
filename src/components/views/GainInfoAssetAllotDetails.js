import React from 'react';
import { Table } from 'antd';

const GainInfoAssetAllotList = (props) => {
    const data = [
        {
            key: '1',
            name: '浪哥哥',
            phone: 18889898989,
            assets: 400.00,
            time: '2016-10-25 17:10:10',
            source:'合格奖励'
        },
        {
            key: '2',
            name: '浪哥哥',
            phone: 18889898989,
            assets: 400.00,
            time: '2016-10-25 17:10:10',
            source:'合格奖励'
        },
        {
            key: '3',
            name: '浪哥哥',
            phone: 18889898989,
            assets: 400.00,
            time: '2016-10-25 17:10:10',
            source:'合格奖励'
        }
    ];

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
            dataSource={data}
            className={'column-txt'}
        />
    );
};

export default GainInfoAssetAllotList;