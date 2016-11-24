import React from 'react';
import { Table,} from 'antd';

const UserListTable = React.createClass({
    getInitialState: function() {
        return {liked: true};
    },
    componentWillMount(){
        const dataSource = this.props.dataSource.exchange_type;
        if (dataSource == "chuanshang_dapan" ){
            this.setState({
                liked: false,
            })
        };
    },
    getColumns(){
        const columns = [{
            title: '手续费(元)',
            className: 'column-txt',
            dataIndex: 'cellphone',
            key : 'cellphone'
        }, {

            title:  this.state.liked ? '总盈亏(元)' : '持仓枚数',
            className: 'column-txt',
            dataIndex: 'amount',
            key : 'amount'
        },{
            title: '交易日期',
            className: 'column-txt',
            dataIndex: 'transaction_date',
            key : 'transaction_date'
        }];

        return columns;
    },
    onChange(page) {
        this.props.onPageChange(page);
    },

    render(){
        const columns = this.getColumns();
        const dataSource = this.props.dataSource.list;
        const pagination = {
            defaultPageSize : this.props.defaultPageSize,
            onChange : this.onChange,
            total : this.props.total,
            current : parseInt(this.props.currentPage)
        };
        return(
            <div>
                <Table
                    pagination={pagination}
                    title={() => 'www的交易详情'}
                     className={'column-txt margin-b-20'}
                    columns={columns}  size="middle"
                    dataSource={dataSource}
                    bordered />
            </div>

        )
    }
});

export default UserListTable;
