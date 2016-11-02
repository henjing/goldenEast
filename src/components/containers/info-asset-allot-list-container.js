import React from 'react';
import { getPeopleListWhoHaveInfoAssetData } from '../../api/app-interaction-api';

const InfoAssetAllotListContainer = React.createClass({
    
    componentDidMount() {
        getPeopleListWhoHaveInfoAssetData({});
    },
    
    render() {
        return (
            <div>信息资产</div>
        )
    }
});

export default InfoAssetAllotListContainer;