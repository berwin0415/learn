import { createStore, compose, applyMiddleware } from 'redux';
import CreateSagaMiddleware, { END } from 'redux-saga';

import rootReducer from 'kReducers'
// 创建一个 Redux middleware,并将 Sagas 连接到 Redux Store
const sagaMiddleware = CreateSagaMiddleware();

const enhancer = compose(
    applyMiddleware(sagaMiddleware)
)

export default function configureStore(initialstate) {
    // 创建store对象
    const store = createStore(rootReducer, initialstate, enhancer);
    // 将sagaMiddleware.run方法挂载到store上，在别处runSaga(rootSaga)
    store.runSaga = sagaMiddleware.run;
    // saga提供的END action,终止阻塞的saga
    store.close = () => store.dispatch(END);
    return store;
}

