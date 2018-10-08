import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const context = require.context('./', true, /.js$/);
const keys = context.keys().filter(item => item !== './index.js');
const reducers = {};
keys.forEach(element => {
    
    let exp = context(element);
    for (const fn in exp) {
        if (exp.hasOwnProperty(fn)) {
            reducers[fn] = exp[fn];
        }
    }
});


const rootReducer = combineReducers({
    router: routerReducer,
    ...reducers,
})
export default rootReducer;
