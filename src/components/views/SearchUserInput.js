import React from 'react';
import { AutoComplete, Button, Input } from 'antd';

const SearchUserInput = React.createClass({
    getInitialState() {
        return {
            result: [],
        };
    },
    handleChange(e) {
        this.props.onChange(e.target.value);
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
           const {  placeholder } = this.props;
        return (
            <div className="searchBar">
                <Input
                    style={{ width: 200 }}
                    onChange={this.handleChange}
                     onPressEnter={this.onClick}
                    placeholder={placeholder}
                >
                </Input>
                <Button onClick={this.onClick} type="primary"  style={{marginLeft:'20px'}}>搜索</Button>
            </div>
        )
    }
});

export default SearchUserInput;