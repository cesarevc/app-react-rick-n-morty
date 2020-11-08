import { combineReducers } from 'redux';
import dataApiReducer from './dataApiReducer';

const rootReducers = combineReducers({
    dataApi: dataApiReducer
});

export default rootReducers;