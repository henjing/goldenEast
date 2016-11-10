import React from 'react';
import { Table } from 'antd';

const GainInfoAssetAllotList = React.createClass({
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
    onChange(page){
		this.props.onPageChange(page)
	},
    render(){
        const data = this.props.data;
        console.log('data3', data)
        const columns = this.getColumns();
        const pagination = {
        defaultPageSize : 12,
        onChange : this.onChange,
        total : this.props.total,
        current : parseInt(this.props.currentPage)
    };
        return(
          <div>
              <Table
                  columns={columns}
                  pagination={pagination}
                  title={() => '已获信息资产详情'}
                  bordered
                  dataSource={data}
                  className={'column-txt'}
              />
          </div>
        )
    }
});

export default GainInfoAssetAllotList;


