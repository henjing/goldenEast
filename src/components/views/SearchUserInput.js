import React from 'react';
import { AutoComplete, Button, Input } from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
import { updatePeopleListWhoHaveInfoAssetData } from '../../actions/app-interaction-actions';
import { getPeopleListWhoHaveInfoAssetData } from '../../api/app-interaction-api';

const SearchUserInput = React.createClass({
    getInitialState() {
        return {
            result: [],
        };
    },
    handleChange(value) {
        let result;
        const phone = ['18889898989', '18889898988', '18889898987'];
        if (!value || value.length < 2 || value.indexOf(' ') >= 0) {
            result = [];
        } else {
            store.dispatch(updatePeopleListWhoHaveInfoAssetData({ 'search[find]' : value,'page' : 1 }));
            result = phone.map(domain => `${value} ${domain}`);
        };
        this.setState({ result });
    },

    onClick() {
        this.props.search();
        //测试
        const data =[{
            key: '1',
            name: 'John Brown',
            level: 32,
            phone: 18889898989,
            yqr:'dsdsdsd',
            qjs: '空店',
            time: '2016-10-21',
            under:[
                {
                    key: '2',
                    name: 'John Brown',
                    info: 3200,
                    phone: 18889898989,
                    source:'dsdsdsd',
                    qjs: '空店',
                    time: '2016-10-21',
                }
            ]
        }];
        store.dispatch(updatePeopleListWhoHaveInfoAssetData({
            dataState :data,
        }));

    },

    render() {
        const { result } = this.state;
        return (
            <div className="searchBar">
                <AutoComplete
                    style={{ width: 300 }}
                    onChange={this.handleChange}
                    placeholder="输入姓名或手机号"
                    dataSource={result}
                >
                </AutoComplete>
                <Button onClick={this.onClick} type="primary" style={{marginLeft:'20px'}}>搜索</Button>
            </div>
        )
    }
});

export default SearchUserInput;