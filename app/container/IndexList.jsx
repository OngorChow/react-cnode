/**
 * Created by ronchow on 2017/2/25.
 */

import { connect } from 'react-redux';
import {removeAllDataAction, requestStart, receiveDataAction} from '../action/IndexList.jsx';
import IndexList from '../component/IndexList.jsx'; //首页组件

function mapStateToProps(state){
  return {
    data: state.indexList.data // 这里必须加上 indexList, 因为在store中， 我们用了combineReducers来把各个子reducer合并成一个root reducer， 对应的state，也合并成了一个root state， 所以直接state.data是获取不到indexList里面的data的， 必须加上对应的子路径
  }
}
function mapDispatchToProps(dispatch){
  return {
    removeAllData: () => dispatch(removeAllDataAction),
    receiveData: () => dispatch(receiveDataAction)
  }
}

const IndexListContainer = connect(mapStateToProps, mapDispatchToProps)(IndexList);

export default IndexListContainer;