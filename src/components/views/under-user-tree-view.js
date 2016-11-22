import React from 'react';
import { Tree, Button, Spin, Icon } from 'antd';
import { Link } from 'react-router';
import styles from '../containers/under-user-tree.less';
import weiGuDong from '../../appConstants/assets/images/微股东.png';
import normalCard from '../../appConstants/assets/images/普卡.png';
import silverCard from '../../appConstants/assets/images/银卡.png';
import goldenCard from '../../appConstants/assets/images/金卡.png';
import superGoldenCard from '../../appConstants/assets/images/白金卡.png';
import { getUnderUserTreeOpenData } from '../../api/app-interaction-api';
import { getUnderUserTreeDataTree } from '../../api/app-interaction-api';
const TreeNode = Tree.TreeNode;

const jinLevels = ['注册用户', weiGuDong, normalCard, silverCard, goldenCard, superGoldenCard];

function getNewTreeData(treeData, curKey, child, level) {
  const loop = (data) => {
    data.forEach((item) => {
			if (item.children) {
	      loop(item.children);
	    } else {
	    	if(item.user_sn == curKey)
	      item.children = child;
	    }
	    });
  };
  loop(treeData);
}

const UnderUserTreeView = React.createClass({
  getInitialState() {
    return {
      treeData: [],
      loading: true
    };
  },
  getUserList(inputValue){
  	const _this = this;
		getUnderUserTreeDataTree(inputValue,function(info){
			_this.setState({ treeData : info.data.list});
			_this.setState({ loading : false})
		},function(info){
			_this.setState({ loading : false})
		});
  },
	componentDidMount(){
		this.getUserList({});
	},

	onLoadData(treeNode) {
		var _this = this;
		const user_sn = treeNode.props.eventKey;
		return getUnderUserTreeOpenData({sn : user_sn},function(info){
			var treeData = [..._this.state.treeData];
			getNewTreeData(treeData, user_sn, info.data.list);
			_this.setState({ treeData })
		},function(info){
//				失败
		});
	},
  render() {
    const loop = data => data.map((item) => {
    	const titleNode = function(data){
    		return (
	    		<div className={styles.titleNode}>
	    			<span className="avatar" style={{backgroundImage: 'url('+ data.wechat_avatar +')'}}></span>
	    			<span className="text">{data.user_name}</span>
	    			{data.level == 0 ? <span className="text">{jinLevels[data.level]}</span> : 
	    			<img src={jinLevels[data.level]} style={{verticalAlign: 'middle'}}/>}
	    			<span className="text">{data.cellphone}</span>
	    			<Link to={`/under_user_tree/user_detail/${data.user_sn}`} style={{verticalAlign: 'middle'}}>
	    				<Button size="small" type="primary" style={{marginLeft: '10px'}}>个人详情</Button>
	    			</Link>
	    		</div>
	    	)
    	}
      if (item.children) {
        return <TreeNode title={titleNode(item)} key={item.user_sn} isLeaf={!item.has_children}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode title={titleNode(item)} key={item.user_sn} isLeaf={!item.has_children} />;
    });

    const treeNodes = loop(this.state.treeData);
    return (
    	<Spin spinning={this.state.loading} size="large">
    		{(this.state.treeData.length == 0) ? (<div className={styles.noDataDefault}>
					<Icon type="frown-o" style={{fontSize: '16px',marginRight: '5px'}} />
					<span>暂无名下用户!</span>
				</div>) : (<Tree loadData={this.onLoadData} className={styles.underTree}>
	        {treeNodes}
	      </Tree>)}
      </Spin>
    );
  },
});

export default UnderUserTreeView;