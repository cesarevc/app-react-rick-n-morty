import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';


// STORE
const store = createStore(rootReducers, composeWithDevTools());


export default store;