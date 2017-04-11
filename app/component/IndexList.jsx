/**
 * Created by ronchow on 2017/2/25.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import IndexNav from './IndexNav.jsx';

class ListItem extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <li>
        {this.props.title}
      </li>
    )
  }
}

class TopicList extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidUpdate(){
    console.log('TopicList did update');
    console.log(this.props.listData);
  }
  componentDidMount(){
    console.log('TopicList componentDidMount');
    console.log(this.props.listData);
  }
  render(){
    return(
      <ul className="topicList">
        {
          this.props.listData.map((item,index) => {
            return <ListItem key={item.id} {...item} />
          })
        }
      </ul>
    );
  }
}

class IndexList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(){
    console.log('IndexList did update');
    console.log(this.props.data);
  }
  componentDidMount(){
    console.log('IndexList componentDidMount');
    console.log(this.props.data);
  }
  render() {
    const {data, removeAllData, receiveData} = this.props; //从store中获取到的data数据， 在这里定义， 传递到子组建；不应该定义在constructor中， 否则不会自动更新view，是因为store.subscribe默认绑定了检测render的原因吗？
    return (
      <div className="wrapper">
        <IndexNav />
        <TopicList listData={data} />
        <button onClick={removeAllData}>remove</button>
        <button onClick={receiveData}>receive</button>
      </div>
    );
  }
}

export default IndexList;