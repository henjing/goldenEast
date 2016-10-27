import React from 'react';
import { Row, Col, Badge,Table  } from 'antd';
import styles from './home-container.less';

var HomeContainer = React.createClass({
	render(){
		return (
			<div>
				<Row className={styles.borderBottom}>
			      <Col span={8} className={styles.borderRight}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="processing" />交易数据已更新至:</p>
			      		<time>2016-10-27</time>
			      	</div>
			      </Col>
			      <Col span={8} className={styles.borderRight}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="error" />红包已送至日期:</p>
			      		<time>2016-10-27</time>
			      	</div>
			      </Col>
			      <Col span={8}>
			      	<div className={styles.numberUpdataStatus}>
			      		<p className="info"><Badge status="warning" />深文所首次入金赠送体验券已送至:</p>
			      		<time>2016-10-27</time>
			      	</div>
			      </Col>
			    </Row>
			    <Row className={styles.brokerageInfo}>
			    	<Col span={8} className={styles.standardInfo}>
			    		<div className={styles.standardCont}>
			    			<div className={styles.standardContTop}></div>
			    			<div className='aaa'></div>
			    			<div className={styles.standardContBottom}>
			    				<p>距离合格还差:</p>
			      				<span>2016.00</span>
			    			</div>
			    		</div>
			    	</Col>
			    	<Col span={16} className={styles.brokerageTable}>
			    		<BrokerageTable />
			    	</Col>
			    </Row>
			</div>
		)
	}
});

const data = [{
  key: '1',
  name: '川商邮币卡总手续费',
  mony: 32,
}, {
  key: '2',
  name: '吉商邮币卡总手续费',
  mony: 42,
}, {
  key: '3',
  name: '深文所大盘总手续费',
  mony: 42,
}, {
  key: '4',
  name: '深文所微盘总手续费',
  mony: 42,
}, {
  key: '5',
  name: '粤国际微盘总手续费',
  mony: 42,
}, {
  key: '6',
  name: '吉商微盘总手续费',
  mony: 42,
}];

var BrokerageTable = React.createClass({
	getColumns(){
		const columns = [{
		  dataIndex: 'name',
		  key: 'name',
		  render: text => <p>{text}</p>,
		}, {
		  dataIndex: 'mony',
		  key: 'mony',
		}];
		return columns;
	},
	render(){
		const columns = this.getColumns();
		return (
			<Table columns={columns} dataSource={data} pagination={false} showHeader = {false} bordered />
		)
	}
});

module.exports = HomeContainer;
