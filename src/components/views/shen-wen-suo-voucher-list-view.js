import React from 'react';
import { Table,Button } from 'antd';
import { Link } from 'react-router';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const ShenWenVoucherListTable = React.createClass({
    jinLevels() {
        return ['注册用户(0%)', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
    },
    getColumns(){
        const jinLevels = this.jinLevels();
        const columns = [{
            title: '姓名',
            dataIndex: 'user_name',
            key:'user_name',
            render(text, row, index) {
                var firstName = !row.wechat_avatar ? text.slice(0,1) : '';
                return (
                    <div className="user-avatar-bar">
			      	<span className="user-avatar" style={{backgroundImage:'url('+ row.wechat_avatar +')'}}>
						{firstName}
			      	</span>
                        <div className="user-avatar-bar-text">
                            <p className="name">{text}</p>
                        </div>
                    </div>
                );
            },
        }, {
            title: '级别',
            dataIndex: 'level',
            className: 'column-txt',
            key:'level',
            render(text){
                console.log(text)
                if(text == '0'){
                    return <span>{jinLevels[text]}</span>
                }else{
                    return <img src={jinLevels[text]}/>
                }
            },
        }, {
            title: '手机号',
            dataIndex: 'cellphone',
            className: 'column-txt',
            key:'cellphone',
        }, {
            title: '深文所账号',
            dataIndex: 'account',
            className: 'column-txt',
            key:'account',
        }, {
            title: '体验券',
            dataIndex: 'received',
            className: 'column-txt',
            key:'received',
        }, {
            title: '入金日期',
            dataIndex: 'first_deposit_time',
            className: 'column-txt',
            key:'first_deposit_time',
        }, {
            title: '送券日期',
            dataIndex: 'give_time',
            className: 'column-txt',
            key:'give_time',
        }];

        return columns;
    },
	onChange(page){
		this.props.onPageChange(page)
	},
	render(){
		const columns = this.getColumns();
		const pagination = {
        defaultPageSize : 12,
        onChange : this.onChange,
        total : this.props.total,
        current : parseInt(this.props.currentPage)
    };
		return(
			<Table 
				pagination={pagination}
				size="middle"
				columns={columns}
				dataSource={this.props.data} 
				bordered loading={this.props.loading}
			/>
		)
	}
});

export default ShenWenVoucherListTable;
