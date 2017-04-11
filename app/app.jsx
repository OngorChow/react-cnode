/**
 * Created by ronchow on 2017/2/25.
 */
import './scss/app.scss';
import DevTools from './ReduxDevTools.jsx';

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store.jsx';
import routes from './router/Index.jsx';


ReactDOM.render(
  <div>
    <Provider store={store}>
       {routes}
    </Provider>
    <DevTools store={store} />
  </div>,
  document.getElementById('app')
);
