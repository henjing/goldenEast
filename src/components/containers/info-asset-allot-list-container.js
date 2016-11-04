import React from 'react';
import ReactDom from 'react-dom';
import { Button,Table, AutoComplete ,DatePicker } from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
import SearchUserInput from '../views/SearchUserInput';
import './list-container.css';
import InfoAssetAllotList from '../views/InfoAssetAllotList';
import { updatePeopleListWhoHaveInfoAssetData } from '../../actions/app-interaction-actions';
import { getPeopleListWhoHaveInfoAssetData } from '../../api/app-interaction-api';

const InfoAssetAllotListContainer = React.createClass({
    componentDidMount() {
        /* getPeopleListWhoHaveInfoAssetData({});*/

    },
    componentWillUnmount(){
        //清理搜索条件
        store.dispatch(updatePeopleListWhoHaveInfoAssetData({
            'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },

    onChange(value) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetData({ 'search[find]' : value,'page' : 1 }));
    },

    submitSearch() {
        getPeopleListWhoHaveInfoAssetData(this.props.searchState);
    },

    onDateChange(dates, dateStrings) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetData({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        // 启动搜索
        this.submitSearch();
    },

    onPageChange(page) {
        store.dispatch(updatePeopleListWhoHaveInfoAssetData({
            page : page
        }));
        // 启动搜索
        this.submitSearch();
    },
    render(){
        let userList;
        const data = this.props.dataState;
        if (data.length>=1){
            userList =  <UserList dataState={data} />;
        }else {
            userList = '';
        }
        return (
            <div>
                <div className="userListHeader border-b">
                    <SearchUserInput
                        search={this.submitSearch}
                    />
                </div>
                {userList}
            </div>
        )
    }
});

const UserList = React.createClass({
    getColumnsUser(){
        const columnsUser =  [{
            title: '用户姓名',
            className: 'column-txt',
            dataIndex: 'name',
            render(text, row, index) {
                const firstName = 'vvv';
                return (
                    <div className="box-align">
			      	<span className="user-avatar" style={{backgroundImage:'url()'}}>
								{firstName}
			      	</span>
                        <div className="user-avatar-bar-text">
                            <p className="name">{text}</p>

                        </div>
                    </div>
                );
            },
        },  {
            title: '级别',
            className: 'column-txt',
            dataIndex: 'level',
        }, {
            title: '手机号码',
            className: 'column-txt',
            dataIndex: 'phone',
        },{
            title: '邀请人',
            className: 'column-txt',
            dataIndex: 'yqr',
        }, {
            title: '所属居间商',
            className: 'column-txt',
            dataIndex: 'qjs',
        },{
            title: '注册时间',
            className: 'column-txt',
            dataIndex: 'time',
        }];

        return columnsUser;
    },
    render(){
        const data = this.props.dataState;
        console.log('sdsd',data)
        const columnsUser = this.getColumnsUser();
        return(
            <div>
                <Table
                    columns={columnsUser}
                    title={() => data[0].name+'基本详情'}
                    bordered
                    dataSource={data}
                    pagination={false}
                    className={'column-txt margin-b-20'}
                />
                <InfoAssetAllotList  dataSource={data}  onPageChange={this.onPageChange} />
            </div>
        )
    }
});

const mapStateToProps = function (store) {
    return {
        dataState : store.infoAssetAllotListState.dataState,
        searchState : store.infoAssetAllotListState.searchState
    }
};

export default connect(mapStateToProps) (InfoAssetAllotListContainer);