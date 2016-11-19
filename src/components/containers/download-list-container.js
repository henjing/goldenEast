import React from 'react';
import { Pagination, AutoComplete, DatePicker, message, Tag } from 'antd';
import './user-list-container.css';
import DownloadModule from '../views/download-module-view';
import SearchUserInput from '../views/SearchUserInput.js';
import store from '../../store';
import { connect } from 'react-redux';
import { updateDownloadDataSearch } from '../../actions/app-interaction-actions';
import { getDownloadData } from '../../api/app-interaction-api';

var DownloadContainer = React.createClass({
	onChange(value){
		store.dispatch(updateDownloadDataSearch({
    		'search[find]' : value,
            'page' : 1
        }));
	},
	submitSearch() {
        getDownloadData(this.props.searchState);
    },
    onPageChange(page){
    	store.dispatch(updateDownloadDataSearch({
    		page:page
    	}));
        console.log('page',page)
    	this.submitSearch();
    },
	componentDidMount(){
		getDownloadData();
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateDownloadDataSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },
     handleChange() {
         console.log('You are interested in: ');
     },
	render(){
        const data = this.props.dataState.data;
        const  dataList = data.list;
        const dataKeys = [];
        const  dataTagKeys = [];
        for(var key in dataList){
            const dataArray = dataList.map(option => option);
            dataKeys.push(
                <DownloadModule data={dataArray} keyid ={key} />
            )
        };
         for(var key in data.types_count){
            dataTagKeys.push(
               <Tag className="margin-l-15" >{data.types_count[key].type_name} {data.types_count[key].type_count}</Tag>
            )
        };
		return this.props.children || (
			<div>
				<div className="userListHeader">
					<SearchUserInput onPageChange={this.onPageChange}  search={this.submitSearch} onChange={this.onChange}/>
				</div>
                <div className="download-tag"><strong>分类: </strong>{dataTagKeys}</div>
                <div className="download-module">  {dataKeys}</div>
                <div>
                    <Pagination   onChange={this.onPageChange}  defaultCurrent={data.this_page} total={data.total} />
                </div>
			</div>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        dataState : store.downloadListDetailStater.dataState,
        searchState : store.downloadListDetailStater.searchState
    }
};

export default connect(mapStateToProps)(DownloadContainer);


