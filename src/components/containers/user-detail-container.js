import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import styles from './user-detail-container.less';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';
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
        return ['注册用户(0%)', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
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
		const level = this.jinLevels()[4];
        const data = this.state.userInfo;
        const accountList = this.state.accounts.map(function(data,index){
        	var accountStatus = '';
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
    		}
    		return (
    			<Col span={6} className={styles.userAccountList}>
		    		<Card title={data.type_name} bodyStyle={{ padding: 0 }}>
					    <ul className="user-account-item">
			    			<li className="content">
			    				<labal>账号</labal>
			    				<p>{data.account}</p>
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
					  </Card>
		    	</Col>
    		)
    	});
		return (
			<div>
				<Row className={styles.userInfo}>
			      <Col span={8}>
			      	<div className="user-info-base">
			      		<div className="avatar" style={{backgroundImage:'url()'}}></div>
			      		<div className="info">
			      			<p className="name">{data.user_name}</p>
			      			<p className="phone">15878193546</p>
			      			<p className="company">所属居间商: 广西向前网络科技有限公司</p>
			      			<p className="level"><img src={level}/></p>
			      		</div>
			      	</div>
			      </Col>
			      <Col span={8}>
			      	<ul className="user-info-more">
			      		<li>本月个人手续费总额:0.00</li>
			      		<li>本月名下小金手续费总额:0.00</li>
			      		<li>本月名下小金手续费总额(居间商范围内):0.00</li>
			      	</ul>
			      </Col>
			      <Col span={8}>
			      	<ul className="user-info-more">
			      		<li>邀请人:马上山</li>
			      		<li>注册时间:2016-4-25 12:30:00</li>
			      		<li>名下小金:250</li>
			      	</ul>
			      </Col>
			    </Row>
			    <Row className={styles.userAccount}>
			    	{accountList}
			    </Row>
			</div>
		)
	},
});

export default UserDetailContainer;
