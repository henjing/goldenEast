import React from 'react';
import { Tag,Button, Icon } from 'antd';

const DownloadModule = React.createClass({
    render(){
        const data = this.props.data;
        const keyid =this.props.keyid;
        return(
            <div className="download-module-list">
                <ul className="">
                    <li className="download-module-cover">
                        <span style={{backgroundImage:'url('+data[keyid].src+')'}}> </span>
                    </li>
                    <li className="download-describe">
                        <h5 className="margin-b-5">{data[keyid].file_name}</h5>
                        <div className="border-b">{data[keyid].file_type}</div>
                        <div className="">上传时间: {data[keyid].add_time}</div>
                    </li>
                    <li className="box-justify-flex download-btn border-t">
                        <div><Icon className="font16" type="download"   />   {data[keyid].download_times}</div>
                        <Button type="primary" size="small"><a href={data[keyid].url}>下载</a></Button>
                    </li>
                </ul>
            </div>
        )
    }
});

export default DownloadModule;



