/**
 * Created by ronchow on 2017/3/06;
 * Reducer for IndexList
 */

const defaultState = {
  status: '未登录'
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'signInREQUEST':
      return { status: '正在登录...'};
    case 'signInRECEIVE':
      return { status: '登录成功'};
    default:
      return state;
  }
};

export default reducer;