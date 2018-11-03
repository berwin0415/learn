import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConntectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory'
import './index.less';

import configureStore from './store/configureStore';
import rootSaga from '../common/sagas'
import App from './app'

const history = createHistory();
const store = configureStore();
// store.runSaga(rootSaga);


ReactDOM.render(<Provider store={store}>
    <App history={history} /> 
</Provider>, document.getElementById('root'));