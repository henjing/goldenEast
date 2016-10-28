import React from 'react';
import { Row, Col, Badge,Table,Button  } from 'antd';
import styles from './home-container.less';

var HomeContainer = React.createClass({
	getInitialState(){
		return {
			updataMsg: {},
			standardMsg: {},
			brokerageMsg: {}
		}
	},
	componentDidMount(){
		
		const data ={
			updataMsg: {
				trade: '2016-10-20',
				redbag: '2016-10-2',
				giving: '2016-11-25',
			},
			standardMsg: {
				month: '11',
				all: '2,315.00',
				status: '未达到标准',
				need: '123.00'
			},
			brokerage: {
				month: '11',
				total: '4,565,422.00',
				list: [{
				  id: '1',
				  name: '川商邮币卡总手续费',
				  mony: 32,
				}, {
				  id: '2',
				  name: '吉商邮币卡总手续费',
				  mony: 42,
				}, {
				  id: '3',
				  name: '深文所大盘总手续费',
				  mony: 42,
				}, {
				  id: '4',
				  name: '深文所微盘总手续费',
				  mony: 42,
				}, {
				  id: '5',
				  name: '粤国际微盘总手续费',
				  mony: 42,
				}, {
				  id: '6',
				  name: '吉商微盘总手续费',
				  mony: 42,
				}]
			},
		}
		
		this.setState({
			updataMsg: data.updataMsg,
			standardMsg: data.standardMsg,
			brokerageMsg: data.brokerage
		});
	},
	render(){
		const {updataMsg , standardMsg , brokerageMsg} = this.state;
		console.log(this.state.brokerageMsg)
		return (
			<div>
				<Row className={styles.borderBottom}>
			      <Col span={8} className={styles.borderRight}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="processing" />交易数据已更新至:</p>
			      		<time>{updataMsg.trade}</time>
			      	</div>
			      </Col>
			      <Col span={8} className={styles.borderRight}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="error" />红包已送至日期:</p>
			      		<time>{updataMsg.redbag}</time>
			      	</div>
			      </Col>
			      <Col span={8}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="warning" />深文所首次入金赠送体验券已送至:</p>
			      		<time>{updataMsg.giving}</time>
			      	</div>
			      </Col>
			    </Row>
			    <Row className={styles.brokerageInfo}>
			    	<Col span={8} className={styles.standardInfo}>
			    		<div className={styles.standardCont}>
			    			<div className={styles.standardContTop}>
			    				<p className="title">{standardMsg.month}月份手续费:</p>
			    				<p className="text">￥{standardMsg.all}</p>
			    				<Button type="primary">{standardMsg.status}</Button>
			    			</div>
			    			<div className={styles.standardContBottom}>
			    				<p>距离合格还差:</p>
			      				<span>{standardMsg.need}</span>
			    			</div>
			    		</div>
			    	</Col>
			    	<Col span={16} className={styles.brokerageTable}>
			    		<BrokerageTable data={brokerageMsg}/>
			    	</Col>
			    </Row>
			</div>
		)
	}
});

var BrokerageTable = React.createClass({
	
	render(){
		const { list , month , total } = this.props.data;
		let listLoop = '';
		try {
			listLoop = list.map((cont)=>{
				return (
					<li key={cont.id}>
						<Row>
					      <Col span={12} className={styles.borderRight}>{cont.name}</Col>
					      <Col span={12}>{cont.mony}</Col>
					    </Row>
					</li>
				)
			});
		} catch(e){}
		return (
			<ul className={styles.brokerageDetailBar}>
				<li>{month}月份手续费详情(元)</li>
				{listLoop}				
				<li>合计:{total}</li>
			</ul>
		)
	}
});

module.exports = HomeContainer;
