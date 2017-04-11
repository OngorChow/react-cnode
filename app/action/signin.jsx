/**
 * Created by ronchow on 2017/2/25.
 */

import fetch from 'isomorphic-fetch';

export const requestStart = {type: "signInREQUEST"};

export const goToSignin = (dispatch) => {
  dispatch(requestStart);
  return fetch('https://cnodejs.org/api/v1/accesstoken', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "accesstoken=3cc5bd5e-0d5e-445f-b491-432c86b33180"
    })
      .then(response => response.json())
      .then(json => {
        if (json.success){
          dispatch({type: 'signInRECEIVE'})
        }
      })
};