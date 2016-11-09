import React from 'react';
import { AutoComplete, Button, Input } from 'antd';

const SearchUserInput = React.createClass({
    getInitialState() {
        return {
            result: [],
        };
    },
    handleChange(value) {
        this.props.onChange(value);
        /* let result;
        const phone = ['1', '2', '3'];
        if (!value || value.length < 2 || value.indexOf(' ') >= 0) {
            result = [];
        } else {
            result = phone.map(domain => `${value} ${domain}`);
        };
        if (value.length >= 3){
            this.props.search();
        }
           this.setState({ result });*/
    },
    onClick() {
        this.props.search();
    },

    render() {
        return (
            <div className="searchBar">
                <AutoComplete
                    style={{ width: 200 }}
                    onChange={this.handleChange}
                    placeholder="输入姓名或手机号 "
                    onPressEnter={this.onClick}
                >
                </AutoComplete>
                <Button onClick={this.onClick} type="primary"  style={{marginLeft:'20px'}}>搜索</Button>
            </div>
        )
    }
});

export default SearchUserInput;