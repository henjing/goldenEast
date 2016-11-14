
import React from 'react';
import { Checkbox, Button, message, Row, Col } from 'antd';
const CheckboxGroup = Checkbox.Group;
import { getSomeUserAuthorDetail, setSomeUserAuthorDetail } from '../../api/app-interaction-api';
import _ from 'lodash';

const setChecboxGroup = React.createClass({
    getInitialState() {
        return {
            checkedList : [],
            // indeterminate : true,
            // checkAll : false,
            indeterminate : true,
            checkAll : false,
            idArray : [],
            titleArray : [],
        }
    },
    componentWillUnmount() {
        this.setState({
            ...this.getInitialState()
        });
    },

    returnIdAndName() {
        const idArray = this.props.data.map(option => option.gate_id);
        const titleArray = this.props.data.map(option => option.title);
        this.setState({ idArray, titleArray });
    },

    componentDidMount() {
        this.returnIdAndName();
    },

    onChange(checkedList) {
        this.setState({
            checkedList,
            indeterminate : !!checkedList.length && (checkedList.length < this.state.titleArray.length),
            checkAll : checkedList.length === this.state.titleArray.length,
        }, function () {
            this.props.uploadState({
                flag : 'type_1',
                state : this.state
            })
        }.bind(this));
        // console.log('.....', checkedList);
    },

    onCheckAllChange(e) {
        this.setState({
            checkedList : e.target.checked ? this.state.titleArray : [],
            indeterminate : false,
            checkAll : e.target.checked,
        })
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
                 <Checkbox
                       onChange={this.onCheckAllChange}
                       checked={this.state.checkAll}
                       indeterminate={this.state.indeterminate}>
                       交易列表：
                   </Checkbox>
                   <CheckboxGroup options={titleArray}  value={this.state.checkedList} onChange={this.onChange} />
            </div>
        )
    }
});


export default setChecboxGroup;