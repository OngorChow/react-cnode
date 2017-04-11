/**
 * Created by ronchow on 2017/2/25.
 */
import DevTools from './ReduxDevTools.jsx';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import indexList from './reducer/indexList.jsx';
import signin from './reducer/signin.jsx';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
);
// const reducers = combineReducers({indexList: indexList,signin: signin});
const reducers = combineReducers({indexList: indexList,signin: signin});
const store = createStore(reducers, enhancer);
// const store = createStore(indexList, enhancer);

export default store;