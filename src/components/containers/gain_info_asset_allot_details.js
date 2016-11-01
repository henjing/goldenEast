import React from 'react';
import { connect } from 'react-redux';
import './list-container.css';
import GainInfoAssetAllotList from '../views/GainInfoAssetAllotDetails';

var GainInfoAssetAllotDetails = React.createClass({
    render(){
        return (
            <GainInfoAssetAllotList />
        )
    }
});

const mapStateToProps = function (store) {
    return {
        dataState : store.chuanShangBoardMarketState.dataState,
        searchState : store.chuanShangBoardMarketState.searchState
    }
};

export default connect(mapStateToProps)(GainInfoAssetAllotDetails);