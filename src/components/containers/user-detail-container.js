import React from 'react';
import { Row, Col } from 'antd';
import styles from './user-detail-container.less';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';

const UserDetailContainer = React.createClass({
	jinLevels() {
        return ['注册用户(0%)', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];
    },
	render(){
		const level = this.jinLevels()[4];
		return (
			<div>
				<Row  className={styles.userInfo}>
			      <Col span={8}>
			      	<div className="user-info-base">
			      		<div className="user-avatar" style={{backgroundImage:'url()'}}></div>
			      		<div className="user-info">
			      			<p>用户姓名</p>
			      			<p>15878193546</p>
			      			<p>所属居间商:广西向前网络科技有限公司</p>
			      			<p><img src={level}/></p>
			      		</div>
			      	</div>
			      </Col>
			      <Col span={8}>
			      	<div className="user-info-more">123</div>
			      </Col>
			      <Col span={8}>
			      	<div className="user-info-more">123</div>
			      </Col>
			    </Row>
			</div>
		)
	},
});

export default UserDetailContainer;
