import React from 'react';
import { Checkbox, Button, message, Row, Col } from 'antd';
const CheckboxGroup = Checkbox.Group;
import { getSomeUserAuthorDetail, setSomeUserAuthorDetail } from '../../api/app-interaction-api';
import { connect } from 'react-redux';
import _ from 'lodash';
import { hashHistory } from 'react-router';
// window.hashHistory = hashHistory;

const setFollowerAuthorization = React.createClass({

    getInitialState() {
        return {
            checkedList : [],
            // indeterminate : true,
            // checkAll : false,
            indeterminate : true,
            checkAll : false,
            idArray : [],
            titleArray : [],
            sn : ''
        }
    },

    componentWillUnmount() {
        this.setState({
            ...this.getInitialState()
        });
    },

    returnIdAndName() {
        const idArray = this.props.systemAuthor.data.map(option => option.gate_id);
        const titleArray = this.props.systemAuthor.data.map(option => option.title);
        this.setState({ idArray, titleArray });
    },

    componentDidMount() {
        let userSn = this.props.params.userSn;
        this.returnIdAndName();
        getSomeUserAuthorDetail({ sn : userSn}, function (info) {
            // console.log('infooooooo', info);
            const checkedList = info.data.map(option => option.title);
            this.setState({ checkedList, sn : userSn});
        }.bind(this));
    },

    onChange(checkedList) {
         let userSn = this.props.params.userSn;
        this.setState({
            checkedList,
            indeterminate : !!checkedList.length && (checkedList.length < this.state.titleArray.length),
            checkAll : checkedList.length === this.state.titleArray.length,
            sn: userSn
        });
        // console.log('.....', checkedList);
    },

    onCheckAllChange(e) {
        let userSn = this.props.params.userSn;
        this.setState({
            checkedList : e.target.checked ? this.state.titleArray : [],
            indeterminate : false,
            checkAll : e.target.checked,
           sn: userSn
        })
    },

    handleSubmit() {
        console.log('aaaa', this.state);
        console.log('bbb', this.filterGateIdToSubmit());
        setSomeUserAuthorDetail({
            sn : this.state.sn,
            'gates' : this.filterGateIdToSubmit()
        }, function (info) {
            message.success('修改成功');
            // this.context.router.goBack();
        }.bind(this), function (info) {
            message.error('修改失败 ' + info.info )
        }.bind(this))
    },

    filterGateIdToSubmit() {
        const { idArray, titleArray, checkedList } = this.state;
        let resultedIdArray = [];
        for (let i = 0; i < checkedList.length; i++) {
            let key = _.findIndex(titleArray, function (option) {return option == checkedList[i]});
            if (key != -1) {
                resultedIdArray.push(idArray[key]);
            }
        };
        return resultedIdArray;
    },

    render() {
        const userSn = this.props.params.userSn;
        // console.log('userId2222', userSn);
        const { idArray, titleArray } = this.state;
        // console.log(idArray, titleArray);
        return (
            <div>
                <div>
                 <div className="box-align  q-user-txt border-t">权限匹配细则</div>
                <Row className='border-tb box-align'>
                           <Col span={2} className='box-align'>居间商</Col>
                           <Col span={22}>
                               <Row className='border-l' >
                                   <Col span={24} className='user-avatar-bar q-padding-tb-15 border-b' style={{paddingLeft : '15px'}}>
                                       <Checkbox
                                           onChange={this.onCheckAllChange}
                                           checked={this.state.checkAll}
                                           indeterminate={this.state.indeterminate}>
                                           交易列表：
                                       </Checkbox>
                                       <CheckboxGroup options={titleArray}  value={this.state.checkedList} onChange={this.onChange} />
                                   </Col>
                                   <Col span={24} className='q-padding-tb-15border-b'>

                                   </Col>
                                   <Col span={24} className='q-padding-tb-15'>

                                   </Col>
                               </Row>
                           </Col>
                    </Row>
                </div>
                <div style={{marginTop : '20px', textAlign : 'center'}}>
                    <Button onClick={this.handleSubmit} type="primary">确认授权</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button onClick={hashHistory.goBack} type="default">返回</Button>
                </div>
            </div>
        )
    }
});

const mapStateToProps = function (store) {
    return {
        systemAuthor : store.adminState.systemAuthor
    }
};

export default connect(mapStateToProps)(setFollowerAuthorization);