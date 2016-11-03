import React from 'react';
import ReactDom from 'react-dom';
import { Button, AutoComplete ,DatePicker } from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
import SearchInput from '../views/SearchInput';
import './list-container.css';
import InfoAssetAllotList from '../views/InfoAssetAllotList';
import { updatePeopleListWhoHaveInfoAssetData } from '../../actions/app-interaction-actions';
import { getPeopleListWhoHaveInfoAssetData } from '../../api/app-interaction-api';

const InfoAssetAllotListContainer = React.createClass({
    componentDidMount() {
        /* getPeopleListWhoHaveInfoAssetData({});*/
        const data =[{
            key: '1',
            name: 'John Brown',
            level: 32,
            phone: 18889898989,
            inviter: 'enjing',
            inviter_phone: 18889898989,
        },{
            key: '2',
            name: 'Brown',
            level: 322,
            phone: 18889898989,
            inviter: 'enjing2',
            inviter_phone: 18889898989,
        }];
        store.dispatch(updatePeopleListWhoHaveInfoAssetData({
            dataState :data,
        }));
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
        const dataState = this.props.dataState;
        return (
            <div>
                <div className="userListHeader border-b">
                    <SearchInput  />
                    <div className="number-info">
                        <span>54568</span>
                        <p>数据统计</p>
                    </div>
                </div>
                <InfoAssetAllotList  dataSource={dataState}  onPageChange={this.onPageChange} />
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