import React from 'react';
import { Table } from 'antd';

const InfoAssetAllotList = React.createClass({
    getColumns(){
        const columns = [{
            title: '用户姓名',
            className: 'column-txt',
            dataIndex: 'user_name',
        },  {
            title: '手机号码',
            className: 'column-txt',
            dataIndex: 'cellphone',
        }, {
            title: '获得信息资产',
            className: 'column-txt',
            dataIndex: 'amount',
        },{
            title: '最新时间',
            className: 'column-txt',
            dataIndex: 'handle_date',
        }];
        return columns;
    },
    render(){
        const columns = this.getColumns();
        return(
          <div>
              <Table
                  columns={columns}
                  title={() => '信息资产分配详情'}
                  bordered
                  dataSource={this.props.data}
                  className={'column-txt'}
              />
          </div>
        )
    }
});

export default InfoAssetAllotList;


