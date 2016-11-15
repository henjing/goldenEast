import React from 'react';
import { Checkbox, message,Col  } from 'antd';
const CheckboxGroup = Checkbox.Group;

const SetChecboxGroup = React.createClass({
    onChange(checkedList) {
        this.props.onChange(checkedList)
    },
    render() {
        const data = this.props.data;
        return (
            <div >
                       <Col span={24} className='q-padding-tb-15 border-b' style={{paddingLeft : '15px'}}>
                                <CheckboxGroup options={data}  value={this.props.value} onChange={this.onChange}  />
                       </Col>
            </div>

        )
    }
});

export default SetChecboxGroup;