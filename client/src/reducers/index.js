import {combineReducers} from 'redux';
import blodsukkerReducer from './blodsukkerReducer';

export default combineReducers({
    blodsukkerVerdier: blodsukkerReducer
});