import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.less';

import configureStore from './store/configureStore';
import rootSaga from '../common/sagas'

const store = configureStore();
store.runSaga(rootSaga);


ReactDOM.render(<Provider store={store}>
    <div></div>
</Provider>, document.getElementById('root'));