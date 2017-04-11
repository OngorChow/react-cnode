/**
 * Created by ronchow on 2017/2/25.
 */
import './scss/app.scss';

import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import DevTools from './ReduxDevTools.jsx'

//UI
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

//mapStateToProps & mapDispatchToProps
function mapStateToProps(state) {
  return {
    value: state.count
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
//action
const increaseAction = { type: 'increase' };

// create container
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

//reducer
function reducer(state = { count: 0 }, action){
  const count = state.count;
  switch(action.type){
    case "increase":
      return {count: count + 1};
    default:
      return state;
  }
}

//store
const enhancer = compose(
  DevTools.instrument()
);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
