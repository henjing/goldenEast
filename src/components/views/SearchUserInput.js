import React from 'react';
import { AutoComplete, Button, Input } from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
import { updatePeopleListWhoHaveInfoAssetData } from '../../actions/app-interaction-actions';

const Option = AutoComplete.Option;
const SearchUserInput = React.createClass({
    getInitialState() {
        return {
            result: [],
        };
    },
    handleChange(value) {
        let result;
        const avatar = [
            '1',
            '2',
            '3'
        ];

        if (!value || value.length < 2 || value.indexOf('-') >= 0) {
            result = [];
        } else {
            result = avatar.map(domain => `${value}-${domain}`);
        };
        this.setState({ result });
    },

    onClick() {
        this.props.search();
        const data =[{
            key: '1',
            name: 'John Brown',
            level: 32,
            phone: 18889898989,
            yqr:'dsdsdsd',
            qjs: '空店',
            time: '2016-10-21',
        }];
        store.dispatch(updatePeopleListWhoHaveInfoAssetData({
            dataState :data,
        }));
    },

    render() {
        const { result } = this.state;
        console.log('result',result)
        var children;
        if (false){
             children = result.map((avatar) => {
                return <Option key={avatar}>{avatar}</Option>;
            });
        }else {
             children = result.map((avatar) => {
                 return <Option key={avatar}>{avatar}</Option>;
             });
        }
        return (
            <div className="searchBar">
                <AutoComplete
                    style={{ width: 300 }}
                    onChange={this.handleChange}
                    placeholder="输入姓名或手机号"
                >
                    {children}
                </AutoComplete>
                <Button onClick={this.onClick} type="primary" style={{marginLeft:'20px'}}>搜索</Button>
            </div>
        )
    }
});

export default SearchUserInput;