import React from 'react';
import { Row, Col, Badge,Table,Button  } from 'antd';
import styles from './home-container.less';
import { getAgentOverviewData } from '../../api/app-interaction-api';
import { connect } from 'react-redux';

var HomeContainer = React.createClass({
	getInitialState(){
		return {
			month: '',
		}
	},
	componentDidMount(){
		getAgentOverviewData({});
		//获取当前月份
		let date = new Date();
		const month = date.getMonth() + 1;
		this.setState({
			month: month,
		});
	},
	render(){
		const data = this.props.agentData;

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
			    <Row className={styles.brokerageInfo}>
			    	<Col span={8} className={styles.standardInfo}>
			    		<div className={styles.standardCont}>
			    			<div className={styles.standardContTop}>
			    				<p className="title">{this.state.month}月份手续费:</p>
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
			    		<BrokerageTable data={data.this_month} tatol={data.this_month_fees_sum} month={this.state.month}/>
			    	</Col>
			    </Row>
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
				<li>{this.props.month}月份手续费详情(元)</li>
				{listLoop}				
				<li>合计:{this.props.total}</li>
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

