import React from 'react';
import { connect } from 'react-redux';
import './list-container.css';
import UnderInfoAssetsList from '../views/UnderInfoAssetAllotDetails';

var UnderInfoAssetsAllotDetails = React.createClass({
    render(){
        return (
            <UnderInfoAssetsList />
        )
    }
});

const mapStateToProps = function (store) {
    return {
        dataState : store.chuanShangBoardMarketState.dataState,
        searchState : store.chuanShangBoardMarketState.searchState
    }
};

export default connect(mapStateToProps)(UnderInfoAssetsAllotDetails);