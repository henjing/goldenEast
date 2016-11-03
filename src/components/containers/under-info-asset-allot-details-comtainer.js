import React from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'antd';
import './list-container.css';

var UnderInfoAssetsAllotDetailsContainer = React.createClass({
    getColumns(){
        const columns = [{
            title: '用户姓名',
            className: 'column-txt',
            dataIndex: 'name',
        },  {
            title: '手机号',
            className: 'column-txt',
            dataIndex: 'phone',
        }, {
            title: '获得信息资产',
            className: 'column-txt',
            dataIndex: 'assets',
        },{
            title: '最新获得时间',
            className: 'column-txt',
            dataIndex: 'time',
        }, {
            title: '关系',
            className: 'column-txt',
            dataIndex: 'source',
        }];

        return columns;
    },
    render(){
        const data = this.props.dataState;
        const columns = this.getColumns();
        return (
            <div>
                <div  className="margin-b-20 border">
                    <Row className="box-align">
                        <Col xs={8} className="box-align">
                            <div className="q-info-avatar">
                                <span style={{ backgroundImage: 'url()'}}></span>
                            </div>
                            <ul className="margin-l-40">
                                <li>{data.name}(微信名称)</li>
                                <li>{data.phone}</li>
                                <li>所属居间商:{data.inviter}</li>
                                <li>{data.level}</li>
                            </ul>
                        </Col>
                        <Col xs={8} className="border-l border-r">
                            <Row type="flex" justify="start" className="q-user-txt border-t">
                                <Col span={18}>本月个人手续费总额：0.00</Col>
                            </Row>
                            <Row type="flex" justify="start" className="q-user-txt border-t">
                                <Col span={18} >本月名下小金手续费总额：0.00</Col>
                            </Row>
                            <Row type="flex" justify="start" className="q-user-txt border-t">
                                <Col span={18}>本月名下小金手续费总额(居间商范围内)：1100</Col>
                            </Row>
                        </Col>
                        <Col xs={8}>
                            <Row type="flex" justify="start"  className="q-user-txt border-t">
                                <Col span={18}>邀请人：{data.inviter}</Col>
                            </Row>
                            <Row type="flex" justify="start"  className="q-user-txt border-t">
                                <Col span={18}>注册时间：2016-10-25 18:00:36</Col>
                            </Row>
                            <Row type="flex" justify="start"  className="q-user-txt border-t">
                                <Col span={18}>&nbsp;</Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Table
                    columns={columns}
                    title={() => '信息资产分配详情'}
                    bordered
                    pagination={false}
                    className={'column-txt'}
                />

            </div>
        )
    }
});

const mapStateToProps = function (store) {
    return {
        dataState : store.particularsBtnState.dataState,
        searchState : store.particularsBtnState.searchState
    }
};

export default connect(mapStateToProps)(UnderInfoAssetsAllotDetailsContainer);