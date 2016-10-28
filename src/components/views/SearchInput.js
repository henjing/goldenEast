import React from 'react';
import { AutoComplete, Button } from 'antd';

const SearchInput = React.createClass({

    handleChange(value) {
        this.props.onChange(value);
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
                  />
                <Button onClick={this.onClick} type="primary" style={{marginLeft:'20px'}}>搜索</Button>
            </div>
        )
    }
});

export default SearchInput;