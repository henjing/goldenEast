import React from 'react';
import { Link } from 'react-router';
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
            dataIndex: 'level',
        }, {
            title: '获得信息资产',
            className: 'column-txt',
            dataIndex: 'phone',
        },{
            title: '最新时间',
            className: 'column-txt',
            dataIndex: 'qjs',
        }, {
            title: '获得详情',
            className: 'column-txt',
            dataIndex: 'source',
        }];
        return columns;
    },
    render(){
        const data= this.props.dataSource;
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


