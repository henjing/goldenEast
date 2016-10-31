import React from 'react';
import { Button, AutoComplete ,DatePicker } from 'antd';
import { connect } from 'react-redux';
import './list-container.css';
import InfoAssetsList from '../views/InfoAssetsList';


var InfoAssetsAllotList = React.createClass({

    render(){

        return (
            <div>
                <InfoAssetsList />
            </div>
        )
    }
});

const mapStateToProps = function (store) {
    return {
        dataState : store.chuanShangBoardMarketState.dataState,
        searchState : store.chuanShangBoardMarketState.searchState
    }
};

export default connect(mapStateToProps)(InfoAssetsAllotList);