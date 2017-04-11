/**
 * Created by ronchow on 2017/2/25.
 */

import fetch from 'isomorphic-fetch';


export const removeAllDataAction = { type: "REMOVE" };

export const requestStart = {type: "REQUEST"};

export const receiveDataAction = (dispatch) => {
  dispatch(requestStart);
  return fetch('//localhost:3000/api/topics')
    .then(response => response.json())
    .then(json => dispatch({type: "RECEIVE", result: json}));
};