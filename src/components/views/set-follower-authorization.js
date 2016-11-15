import React from 'react';
import { Checkbox, Button, message, Row, Col } from 'antd';
const CheckboxGroup = Checkbox.Group;
import { getSomeUserAuthorDetail, setSomeUserAuthorDetail } from '../../api/app-interaction-api';
import { connect } from 'react-redux';
import _ from 'lodash';
import { hashHistory } from 'react-router';
import SetChecboxGroup from './SetCheckboxGroup';
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
        const keyArray = this.props.systemAuthor.data;
        let idArray=[];
        let titleArray=[];
        for(var key in keyArray){
            const keyTitle= keyArray[key].map(option => option.title);
            const keyId = keyArray[key].map(option => option.gate_id);
            idArray.push( keyId );
            titleArray.push( keyTitle );
        };
        let keyIdArray= [];
        let keyTitleArray= [];
        const loopIdArray = function (idArray) {
            for(var i= 0; i<idArray.length; i++){
                const keyArray= idArray[i];
                if (typeof  keyArray == "object"){
                    loopIdArray(keyArray)
                }else {
                    keyIdArray.push(keyArray)
                }
            };
        };
         loopIdArray(idArray);
        const loopTitleArray = function (titleArray) {
            for(var i= 0; i<titleArray.length; i++){
                const keyArray= titleArray[i];
                if (typeof  keyArray == "object"){
                    loopTitleArray(keyArray)
                }else {
                    keyTitleArray.push(keyArray)
                }
            };
        };
         loopTitleArray(titleArray);
         this.setState({  idArray : keyIdArray, titleArray : keyTitleArray});
    },

    componentDidMount() {
        let userSn = this.props.params.userSn;
        this.returnIdAndName();
        getSomeUserAuthorDetail({ sn : userSn}, function (info) {
          /*  console.log('infooooooo', info);*/
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
      /*  console.log('.....', checkedList);*/
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
        const dataType = this.props.systemAuthor.data
        const dataKeys=[];
        for(var key in dataType){
            const dataTitleArray = dataType[key].map(option => option.title);
            if (dataType[key]) {
                dataKeys.push(
                       <SetChecboxGroup  data={dataTitleArray} value={this.state.checkedList} onChange={this.onChange} />
                )
            }
        };
        return (
            <div>
                 <div className="box-align  q-user-txt border-t">权限匹配细则</div>
                <Row className='border-tb box-align'>
                           <Col span={2} className='box-align'>
                               居间商 &nbsp;
                               <Checkbox
                                   onChange={this.onCheckAllChange}
                                   checked={this.state.checkAll}
                                   indeterminate={this.state.indeterminate}>
                               </Checkbox>
                           </Col>
                           <Col span={22}>
                               <Row className='border-l' >
                                        {dataKeys}
                               </Row>
                           </Col>
                </Row>
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