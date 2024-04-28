import {combineReducers} from 'redux';
import menuReducer from "./MenuModule";

const rootReducer = combineReducers({
    menuReducer
});

export default rootReducer;