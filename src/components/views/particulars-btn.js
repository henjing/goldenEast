import React from 'react';
import { Link } from 'react-router';
import { Table,Button } from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
import { routeBase } from '../../appConstants/urlConfig';
import { updateParticularsBtnData } from '../../actions/app-interaction-actions';

const ParticularsBtn = React.createClass({
    handleInfo() {
        const  data  = this.props.data;
        return function (){
            store.dispatch(updateParticularsBtnData({
                dataState: data,
            }));
        }
        },
    render(text, record, index){
        return(
            <div>
                <Link to={routeBase + 'under_info_asset_allot_list'}>
                    <Button className="margin-r-15 btn-bg-ff9" type="primary" size="small"  icon="swap"  onClick={this.handleInfo(record)}>信息资产分配</Button>
                </Link>
                <Button type="primary" size="small" icon="search" >个人详情</Button>

            </div>
        )
    }
});

export default ParticularsBtn;



