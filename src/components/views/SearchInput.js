import React from 'react';
import { AutoComplete, Button, Input } from 'antd';

const SearchInput = React.createClass({

    handleChange(e) {
        // console.log('133333333');
        this.props.onChange(e.target.value);
    },

    onClick() {
        // console.log('2222222222');
        // console.log('test');
        this.props.search();
    },

    render() {
        return (
            <div className="searchBar">
                <Input
                    style={{ width: '200px' }}
                    onChange={this.handleChange}
                    onPressEnter={this.onClick}
                    placeholder="输入姓名,手机号"
                  />
                <Button onClick={this.onClick} type="primary" style={{marginLeft:'20px'}}>搜索</Button>
            </div>
        )
    }
});

export default SearchInput;