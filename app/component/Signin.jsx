/**
 * Created by ronchow on 2017/2/25.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import {goToSignup} from '../action/signin.jsx'

class Signin extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(){

  }
  componentDidMount(){
    console.log('hahahaha');
  }
  render() {
    const {status, goToSignin} = this.props; //从store中获取到的data数据， 在这里定义， 传递到子组建；不应该定义在constructor中， 否则不会自动更新view，是因为store.subscribe默认绑定了检测render的原因吗？
    return (
      <div className="wrapper">
        <br/><br/><br/><br/><br/>
        {status}
        <button onClick={goToSignin}>Sign In</button>
      </div>
    );
  }
}

export default Signin;