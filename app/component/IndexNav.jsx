/**
 * Created by ronchow on 2017/2/25.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class IndexNav extends React.Component{
  render(){
    return(
      <nav className="index-nav">
        <ul className="primary menu-bar">
          <li>
            <Link to="/?tab=all" activeClassName="active">全部</Link>
          </li>
          <li>
            <Link to="/?tab=good" activeClassName="active">精华</Link>
          </li>
          <li>
            <Link to="/?tab=share" activeClassName="active">分享</Link>
          </li>
          <li>
            <Link to="/?tab=ask" activeClassName="active">问答</Link>
          </li>
          <li>
            <Link to="/?tab=job" activeClassName="active">招聘</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default IndexNav;