import React from 'react';
import { Table,} from 'antd';

const UserListTable = React.createClass({
    getInitialState: function() {
        return {liked: true};
    },
    componentWillMount(){
        const exchange_type = this.props.exchange_type;
        console.log('exchange_type', this.props.exchange_type)
        if (exchange_type == "chuanshang_youbika" || exchange_type == "jishang_youbika" ){
            this.setState({
                liked: false,
            })
        };
    },
    getColumns(){
        const columns = [{
            title: '手续费(元)',
            className: 'column-txt',
            dataIndex: 'fees',
            key : 'fees'
        }, {
            title:  this.state.liked ? '总盈亏(元)' : '持仓数量',
            className: 'column-txt',
            dataIndex:  this.state.liked ? 'profit_and_loss' : 'number',
            key : this.state.liked ? 'profit_and_loss' : 'number',
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
        const data = this.props.dataSource;
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
                    title={() => data.user_name+'的交易详情'}
                     className={'column-txt margin-b-20'}
                    columns={columns}  size="middle"
                    dataSource={data.list}
                    bordered />
            </div>

        )
    }
});

export default UserListTable;
