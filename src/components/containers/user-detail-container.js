import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import styles from './user-detail-container.less';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';
import goodJujianshang from '../../appConstants/assets/images/good-jjs.png';
import { getUserDetailData } from '../../api/app-interaction-api.js';

const UserDetailContainer = React.createClass({
	getInitialState(){
		return {
			user_sn: '',
			userInfo: '',
			accounts: []
		}
	},
	jinLevels() {
        return ['注册用户', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard, goodJujianshang];
    },
    componentWillMount(){
    	const user_sn = this.props.params.userId;
        this.setState({
        	user_sn: user_sn
        })
    },
    componentDidMount(){
    	var _this = this;
    	const user_sn = this.state.user_sn;
    	getUserDetailData({sn:user_sn},function(info){
    		console.log(info)
    		_this.setState({
    			userInfo: info.data,
    			accounts: info.data.accounts
    		});
    	},function(info){
    		console.log('fail',info)
    	});
    },
	render(){
		const level = this.jinLevels();
        const data = this.state.userInfo;
        var levelmark = data.level == 0 ? '注册用户' : (
        		<span style={{marginRight: '10px'}}><img src={level[data.level]}/></span>
        	);
        var goodJjsMark = data.is_excellent == 1 ? (
        		<span><img src={level[6]}/></span>
        ) : '';
        
        const accountList = this.state.accounts.map(function(data,index){
        	var accountStatus;
    		if(data.account_status == 1){
    			accountStatus = (<li className="footer">
    				<Icon className="ing" type="clock-circle-o" />
    				<div className="text">带审核</div></li>)
    		}else if(data.account_status == 2){
    			accountStatus = (<li className="footer">
    				<Icon className="success" type="check-circle-o" />
    				<div className="text">已审核通过</div></li>)
    		}else if(data.account_status == 3){
    			accountStatus = (<li className="footer">
    				<Icon className="fail" type="info-circle-o" />
    				<div className="text">审核未通过</div></li>)
    		}else{
    			accountStatus = '';
    		}
    		return (
		    	<Col span={8} className={styles.userAccountList}>
					<ul className="user-account-item">
						<li className="header">{data.type_name}</li>
		    			<li className="content">
		    				<labal>账号</labal>
		    				<p>{data.account || (<span style={{color:'red'}}>用户未开户</span>)}</p>
		    			</li>
		    			<li className="content">
		    				<labal>身份证姓名</labal>
		    				<p>{data.real_name}</p>
		    			</li>
		    			<li className="content">
		    				<labal>身份证号</labal>
		    				<p>{data.id_card_no}</p>
		    			</li>
		    			<li className="content">
		    				<labal>银行卡号</labal>
		    				<p>{data.bank_card_no}</p>
		    			</li>
		    			{accountStatus}
		    		</ul>
				</Col>
    		)
    	});
		return (
			<div>
				<div className={styles.userInfoBox}>
					<div className={styles.userInfo}>
						<div className="header">
							<div className="avatar" style={{backgroundImage:'url('+data.wechat_avatar+')'}}></div>
							<p className="name">{data.user_name}</p>
							<p className="wx-name">({data.wechat_nickname})</p>
							<p className="level">{levelmark}{goodJjsMark}</p>
						</div>
						<ul>
							<li>手机号码：{data.cellphone}</li>
							<li>所属居间商：{data.jujianshang_corp_name}</li>
							<li>一度人脉数量：{data.children_sum}</li>
							<li>邀请人：{data.inv_user_name}</li>
							<li>注册时间：{data.register_date}</li>
						</ul>
					</div>
					<Row className={styles.userAccount}>
						{accountList}
				    </Row>
				</div>
			</div>
		)
	},
});

export default UserDetailContainer;