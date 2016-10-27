import React from 'react';
import ReactDom from 'react-dom';
import { Button, AutoComplete  } from 'antd';
import './user-list-container.less';

var UserListContainer = React.createClass({
	render(){
		return (
			<div>
				<div className="userListHeader">
					<SearchBar />
					<div className="">
						
					</div>
				</div>
			</div>
		)
	}
});

function onSelect(value) {
  console.log('onSelect', value);
}

var SearchBar = React.createClass({
	getInitialState() {
    return {
      dataSource: [],
    };
  },
  handleChange(value) {
    this.setState({
      dataSource: value.length<7 ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  },
  render() {
    const { dataSource } = this.state;
    return (
    	<div className="searchBar">
			<AutoComplete
		        dataSource={dataSource}
		        style={{ width: 200 }}
		        onSelect={onSelect}
		        onChange={this.handleChange}
		      />
			<Button type="primary" style={{marginLeft:'20px'}}>搜索</Button>
		</div>
    );
  },
});

module.exports = UserListContainer;
