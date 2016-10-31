import React from 'react';
import { Table,Row, Col } from 'antd';

const UnderInfoAssetsList = () => {
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
    const imgUrl = 'http://placeholder.qiniudn.com/100x100 ';
    return (
        <div>
            <div  className="margin-b-20 border">
                <Row className="box-align">
                    <Col xs={8} className="box-align">
                        <div className="q-info-avatar">
                            <span style={{ backgroundImage: 'url(' + imgUrl+ ')'}}></span>
                        </div>
                        <ul className="margin-l-40">
                            <li>(微信名称)</li>
                            <li></li>
                            <li>所属居间商：</li>
                            <li></li>
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
                            <Col span={18}>邀请人：浪哥哥</Col>
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

    );
};

export default UnderInfoAssetsList;