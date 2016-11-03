import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import store from '../../store';
import './list-container.css';
import { updatePeopleListWhoHaveInfoAssetAllotData } from '../../actions/app-interaction-actions';
import { getPeopleWhoHaveInfoAssetAllotData } from '../../api/app-interaction-api';

var GainInfoAssetAllotListContainer = React.createClass({
    componentDidMount() {
         getPeopleListWhoHaveInfoAssetData({});
    },
    getColumns(){
        const columns = [
            {
                title: '用户姓名',
                className: 'column-txt',
                width: 100,
                dataIndex: 'user_name',
            },  {
                title: '手机号',
                className: 'column-txt',
                width: 100,
                dataIndex: 'cellphone',
            }, {
                title: '获得信息资产',
                className: 'column-txt',
                width: 100,
                dataIndex: 'amount_sum',
            },{
                title: '最新获得时间',
                className: 'column-txt',
                width: 100,
                dataIndex: 'last_receive_time',
            }, {
                title: '获得详情',
                className: 'column-txt',
                width: 100,
                dataIndex: 'source',
            }];
        return columns;
    },
    render(){
        const data = this.props.dataState;
        const columns = this.getColumns();
        return (
            <Table
                columns={columns}
                title={() => '名下小金信息资产分配详情'}
                bordered
                dataSource={data}
                className={'column-txt'}
            />
        );
    }
});

const mapStateToProps = function (store) {
    return {
        dataState : store.gainInfoAssetAllotListState.dataState,
        searchState : store.gainInfoAssetAllotListState.searchState
    }
};

export default connect(mapStateToProps)(GainInfoAssetAllotListContainer);
