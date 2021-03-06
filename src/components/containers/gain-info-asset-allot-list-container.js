import React from 'react';
import { Table, AutoComplete ,DatePicker } from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
import SearchUserInput from '../views/SearchUserInput';
import './user-list-container.css';
import GainInfoAssetAllotList from '../views/GainInfoAssetAllotList';
import { updateGainPeopleListWhoHaveInfoAssetDataSearch } from '../../actions/app-interaction-actions';
import { getGainPeopleListWhoHaveInfoAssetData } from '../../api/app-interaction-api';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';

const GainInfoAssetAllotListContainer = React.createClass({
  	onChange(value){
		store.dispatch(updateGainPeopleListWhoHaveInfoAssetDataSearch({
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
        getGainPeopleListWhoHaveInfoAssetData(this.props.searchState);
    },
    onPageChange(page){
    	store.dispatch(updateGainPeopleListWhoHaveInfoAssetDataSearch({
    		page:page
    	}));
    	this.submitSearch();
    },
	componentWillUnmount(){
    	//清理搜索条件
    	store.dispatch(updateGainPeopleListWhoHaveInfoAssetDataSearch({
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
             if (typeof(data)=="undefined"){
                  userList = ' ';
             }else {
                  userList = <UserList  data={data}  onPageChange={this.onPageChange} />;
            }
            }catch(err){
            };
        return (
            <div>
                <div className="userListHeader border-b">
                    <SearchUserInput
                        search={this.submitSearch}
                        onChange={this.onChange}
                        placeholder="输入姓名或手机号"
                    />
                </div>
                <div>{userList}</div>
            </div>
        )
    }
});

//搜索用户和名下小金列表
const UserList = React.createClass({
    jinLevels() {
        return ['注册用户(0%)', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
    },
    getColumnsUser(){
        const jinLevels = this.jinLevels();
        const columnsUser =  [{
            title: '用户姓名',
            className: 'column-txt',
            dataIndex: 'user_name',
            render(text, row, index) {
                var firstName = !row.wechat_avatar ? text.slice(0,1) : '';
                return (
                    <div className="box-align">
			      	<span className="user-avatar" style={{backgroundImage:'url('+ row.wechat_avatar +')'}}>
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
            render(text){
                console.log(text)
                if(text == '0'){
                    return <span>{jinLevels[text]}</span>
                }else{
                    return <img src={jinLevels[text]}/>
                }
            },
        }, {
            title: '手机号码',
            className: 'column-txt',
            dataIndex: 'cellphone',
        },{
            title: '邀请人',
            className: 'column-txt',
            dataIndex: 'inv_user_name',
        }, {
            title: '邀请人手机',
            className: 'column-txt',
            dataIndex: 'inv_cellphone',
        }, {
            title: '所属居间商',
            className: 'column-txt',
            dataIndex: 'jujianshang_corp_name',
        },{
            title: '注册时间',
            className: 'column-txt',
            dataIndex: 'register_date',
        }];

        return columnsUser;
    },
    render(){
        const data = this.props.data;
        let dataList ;
        let UserName;
        if(data.user == null){
            UserName="";
            dataList = [];
        }else {
             dataList = [data.user]
             UserName = dataList[0].user_name;
        }
        const columnsUser = this.getColumnsUser();
        return(
            <div>
                <Table
                    columns={columnsUser}
                    title={() => UserName+'的基本详情'}
                    bordered
                    dataSource={dataList}
                    pagination={false}
                    className={'column-txt margin-b-20'}
                />
                <GainInfoAssetAllotList  onPageChange={this.props.onPageChange} data={data.list} total={data.total} currentPage={data.this_page} />
            </div>
        )
    }
});

const mapStateToProps = function (store) {
    return {
        dataState  : store.gainInfoAssetAllotListState.data,
        searchState : store.gainInfoAssetAllotListState.searchState
    }
};

export default connect(mapStateToProps) (GainInfoAssetAllotListContainer);