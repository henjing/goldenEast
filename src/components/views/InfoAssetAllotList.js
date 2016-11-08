import React from 'react';
import { Table } from 'antd';

const InfoAssetAllotList = React.createClass({
    getColumns(){
        const columns = [{
            title: '用户姓名',
            className: 'column-txt',
            dataIndex: 'name',
        },  {
            title: '手机号码',
            className: 'column-txt',
            dataIndex: 'phone',
        }, {
            title: '获得信息资产',
            className: 'column-txt',
            dataIndex: 'info',
        },{
            title: '最新时间',
            className: 'column-txt',
            dataIndex: 'time',
        }, {
            title: '获得详情',
            className: 'column-txt',
            dataIndex: 'source',
        }];
        return columns;
    },
    render(){
        const data = this.props.data;
        console.log('data3', data)
        const columns = this.getColumns();
        return(
          <div>
              <Table
                  columns={columns}
                  title={() => '信息资产分配详情'}
                  bordered
                  dataSource={data}
                  className={'column-txt'}
              />
          </div>
        )
    }
});

export default InfoAssetAllotList;


