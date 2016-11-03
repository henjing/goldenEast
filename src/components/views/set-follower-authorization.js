import React from 'react';
import { Checkbox, Button } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['用户列表', '用户数据总览', '深文所微盘交易列表', '粤国际微盘交易列表', '吉商微盘交易列表', '深文所大盘交易列表', '川商邮币卡交易列表', '吉商邮币卡交易列表'];
const defaultCheckedList = [];

const setFollowerAuthorization = React.createClass({

    getInitialState() {
        return {
            checkedList : defaultCheckedList,
            indeterminate : true,
            checkAll : false
        }
    },

    componentWillUnmount() {
        this.setState({
            ...this.getInitialState()
        });
    },

    onChange(checkedList) {
        this.setState({
            checkedList,
            indeterminate : !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll : checkedList.length === plainOptions.length
        });
        console.log('.....', checkedList);
    },

    onCheckAllChange(e) {
        this.setState({
            checkedList : e.target.checked ? plainOptions : [],
            indeterminate : false,
            checkAll : e.target.checked
        })
    },

    render() {
        return (
            <div>
                <div style={{borderBottom : '1px solid #e9e9e9'}}>
                    <Checkbox
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                        indeterminate={this.state.indeterminate}>
                        全选
                    </Checkbox>
                </div>
                <br/>
                <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                <div style={{marginTop : '20px', textAlign : 'center'}}>
                    <Button type="primary">确认授权</Button>
                </div>
            </div>
        )
    }
});

export default setFollowerAuthorization;