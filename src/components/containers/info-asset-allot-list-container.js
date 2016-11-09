import React from 'react';
import { Table, AutoComplete ,DatePicker } from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
import SearchUserInput from '../views/SearchUserInput';
import './user-list-container.css';
import InfoAssetAllotList from '../views/InfoAssetAllotList';
import { updatePeopleListWhoHaveInfoAssetDataSearch } from '../../actions/app-interaction-actions';
import { getPeopleListWhoHaveInfoAssetData } from '../../api/app-interaction-api';

const InfoAssetAllotListContainer = React.createClass({
  	onChange(value){
		store.dispatch(updatePeopleListWhoHaveInfoAssetDataSearch({
    		'search[find]' : value,
            'page' : 1
        }));
	},
/*	onDateChange(dates, dateStrings){
		store.dispatch(updateAuthorUserListDataSearch({
            'search[d_begin]' : dateStrings[0],
            'search[d_end]' : dateStrings[1],
            'page' : 1
        }));
        this.submitSearch();
	},*/
	submitSearch() {
        getPeopleListWhoHaveInfoAssetData(this.props.searchState);
    },
    onPageChange(page){
    	store.dispatch(updatePeopleListWhoHaveInfoAssetDataSearch({
    		page:page
    	}));

    	this.submitSearch();
    },
	componentDidMount(){
		getPeopleListWhoHaveInfoAssetData();
	},
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updatePeopleListWhoHaveInfoAssetDataSearch({
    		'search[find]' : '',
            'search[d_begin]' : '',
            'search[d_end]' : '',
            'page' : 1
        }));
    },
    render(){
        let userList;
        const data = this.props.dataState;
         try{
             if (data.list.length = 1){
                 userList =  <UserList  data={data.list} />;
             }else {
                 userList = <h3 className="q-user-txt column-txt">同名人数过多，请输入手机号码搜索</h3>;
            }
            }catch(err){
            };
        return (
            <div>
                <div className="userListHeader border-b">
                    <SearchUserInput
                        search={this.submitSearch}
                        onChange={this.onChange}
                    />
                </div>
                <div>{userList}</div>
            </div>
        )
    }
});

//搜索用户和名下小金列表
const UserList = React.createClass({
    getColumnsUser(){
        const columnsUser =  [{
            title: '用户姓名',
            className: 'column-txt',
            dataIndex: 'user_name',
            render(text, row, index) {
                const firstName = text.slice(0,1);
                return (
                    <div className="box-align">
			      	<span className="user-avatar" style={{backgroundImage:'url(echat_avatar)'}}>
								{firstName}
			      	</span>
                        <div className="user-avatar-bar-text">
                            <p className="name">{text}</p>

                        </div>
                    </div>
                );
            },
        },  {
            title: '级别',
            className: 'column-txt',
            dataIndex: 'level',
        }, {
            title: '手机号码',
            className: 'column-txt',
            dataIndex: 'cellphone',
        },{
            title: '邀请人',
            className: 'column-txt',
            dataIndex: 'wechat_nickname',
        }, {
            title: '所属居间商',
            className: 'column-txt',
            dataIndex: 'qjs',
        },{
            title: '注册时间',
            className: 'column-txt',
            dataIndex: 'register_date',
        }];

        return columnsUser;
    },
    render(){
        const data = this.props.data;
     console.log('data2', data[2])
        const columnsUser = this.getColumnsUser();
        return(
            <div>
                <Table
                    columns={columnsUser}
                    title={() => '基本详情'}
                    bordered
                    dataSource={data}
                    pagination={false}
                    className={'column-txt margin-b-20'}
                />
                <InfoAssetAllotList  data={data} />
            </div>
        )
    }
});

const mapStateToProps = function (store) {
    return {
        dataState  : store.infoAssetAllotListState.data,
        searchState : store.infoAssetAllotListState.searchState
    }
};

export default connect(mapStateToProps) (InfoAssetAllotListContainer);