import React from 'react';
import { Table } from 'antd';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const RegisterActiveTable = React.createClass({
	getColumns(){
		const columns = [{
		  title: '居间商名称',
		  dataIndex: 'jujianshang_corp_name',
          key : 'jujianshang_corp_name',
		}, {
		  title: '级别',
		  dataIndex: 'level_name',
          key : 'level_name'
		}, {
		  title: '当月手续费',
		  dataIndex: 'this_month_fees_total',
          key : 'this_month_fees_total'
		}, {
		  title: '上月手续费',
		  dataIndex: 'last_month_fees_total',
          key : 'last_month_fees_total'
		}, {
		  title: '当月注册量',
		  dataIndex: 'this_month_registered_total',
          key : 'this_month_registered_total'
		}, {
		  title: '上月注册量',
		  dataIndex: 'last_month_registered_total',
          key : 'last_month_registered_total'
		}, {
		  title: '当月激活量',
		  dataIndex: 'this_month_activated_total',
          key : 'this_month_activated_total'
		},{
		  title: '上月激活量',
		  dataIndex: 'last_month_activated_total',
		  key : 'last_month_activated_total'
		}];
		
		return columns;
	},

    onChange(page) {
        this.props.onPageChange(page);
    },

	render(){
		const columns = this.getColumns();
        const dataSource = this.props.dataSource;
        const pagination = {
            defaultPageSize : this.props.defaultPageSize,
            onChange : this.onChange,
            total : this.props.total,
            current : parseInt(this.props.currentPage)
        };
		return(
			<Table loading={this.props.loading} pagination={pagination} columns={columns} dataSource={dataSource} bordered />
		)
	}
});

export default RegisterActiveTable;
