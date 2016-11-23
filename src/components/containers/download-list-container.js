import React from 'react';
import { Pagination, AutoComplete, DatePicker, message, Tag, Radio, Spin   } from 'antd';
import './user-list-container.css';
import DownloadModule from '../views/download-module-view';
import SearchUserInput from '../views/SearchUserInput.js';
import store from '../../store';
import { connect } from 'react-redux';
import { updateDownloadDataSearch } from '../../actions/app-interaction-actions';
import { getDownloadData } from '../../api/app-interaction-api';

const RadioGroup = Radio.Group;
const DownloadContainer = React.createClass({
     getInitialState() {
         return {
             type_count: 1000,
             loading: true
         };
     },
	onChange(value){
		store.dispatch(updateDownloadDataSearch({
    		'search[find]' : value,
            'page' : 1
        }));
	},
	submitSearch() {
        const _this = this;
		_this.setState({loading: true});
        getDownloadData(this.props.searchState,function(info){
			_this.setState({loading: false});
		},function(info){
			_this.setState({loading: false});
		});
    },
    onPageChange(page){
    	store.dispatch(updateDownloadDataSearch({
    		page:page
    	}));
        console.log('page',page)
    	this.submitSearch();
    },
	componentDidMount(){
        const _this = this;
		getDownloadData({},function(info){
			_this.setState({loading: false});
		},function(info){
			_this.setState({loading: false});
		});
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateDownloadDataSearch({
    		'search[find]' : '',
            'page' : 1,
            'search[type]':''
        }));
    },
    onTagChange(e) {
        console.log(`radio checked:${e.target.value}`);
        this.setState({
            type_count: e.target.value,
        });
        store.dispatch(updateDownloadDataSearch({
    		'search[type]':e.target.value,
    	}));
    	this.submitSearch();
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
                <RadioGroup onChange={this.onTagChange} value={this.state.type_count}>
                    <Radio  className="margin-l-15"  value={data.types_count[key].file_type}>{data.types_count[key].type_name} {data.types_count[key].type_count}</Radio>
                </RadioGroup>
            )
        };
		return this.props.children || (
			<div>
				<div className="userListHeader">
					<SearchUserInput  placeholder="输入物资名搜索"
 onPageChange={this.onPageChange}  search={this.submitSearch} onChange={this.onChange}/>
                    {!this.state.whenSearchHide ? (<div className="number-info">
						<span>{data.total}</span>
						<p>总数量</p>
					</div>) : ''}
				</div>
                <div className="download-tag"><strong>分类: </strong>{dataTagKeys}</div>
                <Spin spinning={this.state.loading}>
                    <div className="download-module">
                        {dataKeys}
                    </div>
                    <div className="margin-b-20">
                        <Pagination  onChange={this.onPageChange}  defaultCurrent={data.this_page} total={data.total} />
                    </div>
                </Spin>
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


