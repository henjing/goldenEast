import React from 'react';
import { Table } from 'antd';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const RegisterActiveTable = React.createClass({
	getColumns(){
		const columns = [{
		  title: '居间号',
		  dataIndex: 'jujian_number',
          key : 'jujian_number',
		}, {
		  title: '居间商名称',
		  dataIndex: 'jujian_name',
          key : 'jujian_name',
		}, {
		  title: '当月注册量',
		  dataIndex: 'current_register',
          key : 'current_register'
		}, {
		  title: '当月激活量',
		  dataIndex: 'current_active',
          key : 'current_active'
		}, {
		  title: '上月注册量',
		  dataIndex: 'last_register',
		  key : 'last_register'
		}, {
		  title: '上月激活量',
		  dataIndex: 'last_active',
		  key : 'last_active'
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
			<Table pagination={pagination} columns={columns} dataSource={dataSource} bordered />
		)
	}
});

export default RegisterActiveTable;
