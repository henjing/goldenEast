import React from 'react';
import { Row, Col, Badge,Table,Button,Tabs  } from 'antd';
import styles from './home-container.less';
import { getAgentOverviewData } from '../../api/app-interaction-api';
import { connect } from 'react-redux';

const TabPane = Tabs.TabPane;

var HomeContainer = React.createClass({
	getInitialState(){
		return {
			month: '',
		}
	},
	componentDidMount(){
		getAgentOverviewData({});
	},
	onChangeTabs(key){
		this.setState({
			month: key,
		});
	},
	render(){
		const data = this.props.agentData.data;

		return (
			<div>
				<Row className={styles.borderBottom}>
			      <Col span={8} className={styles.borderRight}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="processing" />交易数据已更新至:</p>
			      		<time>{data.refresh_date}</time>
			      	</div>
			      </Col>
			      <Col span={8} className={styles.borderRight}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="error" />红包已送至日期:</p>
			      		<time>{data.redpack_date}</time>
			      	</div>
			      </Col>
			      <Col span={8}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="warning" />深文所首次入金赠送体验券已送至:</p>
			      		<time>{data.shenw_coupon_date}</time>
			      	</div>
			      </Col>
			    </Row>
			    <Tabs defaultActiveKey="2" type="card" onChange={this.onChangeTabs} style={{margin: '20px'}}>
				    <TabPane tab="上月手续费" key="1">
					    <Row>
					    	<Col span={8} className={styles.standardInfo}>
					    		<div className={styles.standardCont}>
					    			<div className={styles.standardContTop}>
					    				<p className="text">￥{data.last_month_fees_sum}</p>
					    				<Button type="primary">{data.last_month_hege ? '上月合格' : '上月未合格'}</Button>
					    			</div>
					    			<div className={styles.standardContBottom}>
					    				<p>距离合格还差:</p>
					      				<span>{data.last_month_for_hege}</span>
					    			</div>
					    		</div>
					    	</Col>
					    	<Col span={16} className={styles.brokerageTable}>
					    		<BrokerageTable data={data.last_month} total={data.last_month_fees_sum} month={this.state.month}/>
					    	</Col>
					    </Row>
				    </TabPane>
				    <TabPane tab="本月手续费" key="2">
					    <Row className={styles.brokerageInfo}>
					    	<Col span={8} className={styles.standardInfo}>
					    		<div className={styles.standardCont}>
					    			<div className={styles.standardContTop}>
					    				<p className="text">￥{data.this_month_fees_sum}</p>
					    				<Button type="primary">{data.this_month_hege ? '本月合格' : '本月未合格'}</Button>
					    			</div>
					    			<div className={styles.standardContBottom}>
					    				<p>距离合格还差:</p>
					      				<span>{data.this_month_for_hege}</span>
					    			</div>
					    		</div>
					    	</Col>
					    	<Col span={16} className={styles.brokerageTable}>
					    		<BrokerageTable data={data.this_month} total={data.this_month_fees_sum} month={this.state.month}/>
					    	</Col>
					    </Row>
				    </TabPane>
				 </Tabs>
			    
			</div>
		)
	}
});

var BrokerageTable = React.createClass({
	render(){
		let listLoop = '';
		try {
			listLoop = this.props.data.map((cont,id)=>{
				return (
					<li key={id}>
						<Row>
					      <Col span={12} className={styles.borderRight}>{cont.name}</Col>
					      <Col span={12}>{cont.fees_sum}</Col>
					    </Row>
					</li>
				)
			});
		} catch(e){}
		return (
			<ul className={styles.brokerageDetailBar}>
				<li>{this.props.month === '1' ? '上' : '本'}月份手续费详情(元)</li>
				{listLoop}				
				<li>合计：{this.props.total}</li>
			</ul>
		)
	}
});

const mapStateToProps = function (store) {
    return {
        agentData : store.agentOverviewDataState
    }
};

export default connect(mapStateToProps)(HomeContainer);

