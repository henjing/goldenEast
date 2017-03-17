import React from 'react';
import { Row, Col, Badge,Table,Button,Tabs, Spin  } from 'antd';
import styles from './home-container.less';
import { getAgentOverviewData } from '../../api/app-interaction-api';
import { connect } from 'react-redux';

const TabPane = Tabs.TabPane;

var HomeContainer = React.createClass({
	getInitialState(){
		return {
			month: '',
			loading: true,
			lastMonth: '',
			currentMonth: ''
		}
	},
	componentDidMount(){
		const month = new Date().getMonth();
		var lastMonth = month == 0 ? 12 : month;
		var currentMonth = month + 1;
		this.setState({
			lastMonth: lastMonth,
			currentMonth: currentMonth
		});
		const _this = this;
		getAgentOverviewData({},function(info){
			_this.setState({ loading: false});
		},function(info){
			_this.setState({ loading: false});
		});
	},
	onChangeTabs(key){
		this.setState({
			month: key,
		});
	},
	render(){
		const data = this.props.agentData.data;
		const lastTab = this.state.lastMonth + '月手续费';
		const currentTab = this.state.currentMonth + '月手续费';
		return (
			<Spin spinning={this.state.loading} size="large">
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
				    <TabPane tab={lastTab} key="1">
					    <Row>
					    	<Col span={8} className={styles.standardInfo}>
					    		<div className={styles.standardCont}>
					    			<div className={styles.standardContTop}>
					    				<p className="text">￥{data.last_month_fees_sum}</p>
					    				<Button type="primary">{data.last_month_hege ? this.state.lastMonth +'月合格' : this.state.lastMonth +'月未合格'}</Button>
					    			</div>
					    			<div className={styles.standardContBottom}>
					    				<p>距离合格还差:</p>
					      				<span>{data.last_month_for_hege}</span>
					    			</div>
					    		</div>
					    	</Col>
					    	<Col span={16} className={styles.brokerageTable}>
					    		<BrokerageTable data={data.last_month}
						    		total={data.last_month_fees_sum}
						    		month={this.state.month}
					    			lastMonth={this.state.lastMonth}
					    		/>
					    	</Col>
					    </Row>
				    </TabPane>
				    <TabPane tab={currentTab} key="2">
					    <Row className={styles.brokerageInfo}>
					    	<Col span={8} className={styles.standardInfo}>
					    		<div className={styles.standardCont}>
					    			<div className={styles.standardContTop}>
					    				<p className="text">￥{data.this_month_fees_sum}</p>
					    				<Button type="primary">{data.this_month_hege ? this.state.currentMonth +'月合格' : this.state.currentMonth +'月未合格'}</Button>
					    			</div>
					    			<div className={styles.standardContBottom}>
					    				<p>距离合格还差:</p>
					      				<span>{data.this_month_for_hege}</span>
					    			</div>
					    		</div>
					    	</Col>
					    	<Col span={16} className={styles.brokerageTable}>
					    		<BrokerageTable 
						    		data={data.this_month} 
						    		total={data.this_month_fees_sum}
						    		month={this.state.month}
						    		currentMonth={this.state.currentMonth}
					    		/>
					    	</Col>
					    </Row>
				    </TabPane>
				 </Tabs>
			    {data.is_excellent == 1 ? '' : (
			    <div>
			    <a href={`http://caiwu.dfxjin.com/Billdown/billAgents.html?sn=${data.jujianshang_sn}&m=11`}>
			    	<Button style={{marginLeft: '20px'}} type="primary">下载2016年11月对账单</Button>
			    </a>
			    <a href={`http://caiwu.dfxjin.com/Billdown/billAgents.html?sn=${data.jujianshang_sn}&m=12`}>
			    	<Button style={{marginLeft: '20px'}} type="primary">下载2016年12月对账单</Button>
			    </a>
			    <a href={`http://caiwu.dfxjin.com/Billdown/billAgents.html?sn=${data.jujianshang_sn}&m=1`}>
			    	<Button style={{marginLeft: '20px'}} type="primary">下载2017年1月对账单</Button>
			    </a>
			    <a href={`http://caiwu.dfxjin.com/Billdown/billAgents.html?sn=${data.jujianshang_sn}&m=huamao`}>
			    	<Button style={{marginLeft: '20px'}} type="primary">下载2017年1月华茂通对账单</Button>
			    </a>
			    <a href={`http://caiwu.dfxjin.com/Billdown/billAgents.html?sn=${data.jujianshang_sn}&m=2`}>
			    	<Button style={{marginLeft: '20px'}} type="primary">下载2017年2月对账单</Button>
			    </a>
			    </div>)}
			</Spin>
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
				<li>{this.props.month === '1' ? this.props.lastMonth : this.props.currentMonth}月份手续费详情(元)</li>
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

