import React from 'react';
import { Tree, Button } from 'antd';
import styles from '../containers/under-user-tree.less';
const TreeNode = Tree.TreeNode;

function generateTreeNodes(treeNode) {
  const arr = [];
  const key = treeNode.props.eventKey;
  for (let i = 0; i < 3; i++) {
    arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  const loopLeaf = (data, lev) => {
    const l = lev - 1;
    data.forEach((item) => {
      if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
        curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  const loop = (data) => {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach((item) => {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}

const UnderUserTreeView = React.createClass({
  getInitialState() {
    return {
      treeData: [],
    };
  },
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        treeData: [
          { 
          	name: '马步王子', 
          	key: '0',
          	level: 1,
          	phone: 15878193546,
          	img: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM5pziaib7lz8r4a1OV5Ip1owCQoRZdea57fWXuLAtM646pgrpp16tXm5XkR0blFc7esy1iaReicq6yEvtlw9HQ56tUz1icvTRMQ2pRU/0'
         },{ 
          	name: '诸神', 
          	key: '1',
          	level: 2,
          	phone: 15878193546,
          	img: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM5pziaib7lz8r4a1OV5Ip1owCQoRZdea57fWXuLAtM646pgrpp16tXm5XkR0blFc7esy1iaReicq6yEvtlw9HQ56tUz1icvTRMQ2pRU/0'
         },{ 
          	name: '绝地反击', 
          	key: '2',
          	level: 3,
          	phone: 135487813546,
          	img: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM5pziaib7lz8r4a1OV5Ip1owCQoRZdea57fWXuLAtM646pgrpp16tXm5XkR0blFc7esy1iaReicq6yEvtlw9HQ56tUz1icvTRMQ2pRU/0'
         },
          
        ],
      });
    }, 100);
  },
  onSelect(info) {
    console.log('selected', info);
  },
  onLoadData(treeNode) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const treeData = [...this.state.treeData];
        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
        this.setState({ treeData });
        resolve();
      }, 1000);
    });
  },
  render() {
    const loop = data => data.map((item) => {
    	const titleNode = function(data){
    		return (
    		<div className={styles.titleNode}>
    			<span className="avatar" style={{backgroundImage: 'url('+ data.img +')'}}></span>
    			<span className="text">{data.name}</span>
    			<span className="text">{data.level}</span>
    			<span className="text">{data.phone}</span>
    			<Button size="small" type="primary" style={{marginLeft: '10px'}}>个人详情</Button>
    		</div>
    	)
    	}
      if (item.children) {
        return <TreeNode title={titleNode(item)} key={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode title={titleNode(item)} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;
    });
    const treeNodes = loop(this.state.treeData);
    return (
      <Tree onSelect={this.onSelect} loadData={this.onLoadData} className={styles.underTree}>
        {treeNodes}
      </Tree>
    );
  },
});

export default UnderUserTreeView;