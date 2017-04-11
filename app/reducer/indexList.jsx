/**
 * Created by ronchow on 2017/3/06;
 * Reducer for IndexList
 */

const defaultState = {
  // isFetching: false,
  // didInvalidate: false,
  // lastUpdated: 'xxxxxxx',
  data: [
    {
      id: 12345,
      content: "<h1>javascript中的这个this代表的是什么呀？</h1>",
      title: "javascript中的这个this代表的是什么呀？"
    },
    {
      id: 22345,
      content: "<h1>一张长方形的图片在正方形容器显示变形问题</h1>",
      title: "一张长方形的图片在正方形容器显示变形问题"
    },
    {
      id: 32345,
      content: "<h1>vue列表循环渲染报错item未定义</h1>",
      title: "vue列表循环渲染报错item未定义"
    }
  ],
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REMOVE':
    return {...state, data: []};
    case 'REQUEST':
      return {...state,  data: [{id: 12345, title: "正在获取数据！"}]};
    case 'RECEIVE':
      return {...state,  data: action.result["data"]};
    default:
      return state;
  }
};

export default reducer;