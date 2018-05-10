import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import shop from 'reducers/shop';
import {combineReducers} from "redux";

export default combineReducers({
    counter,
    userInfo,
    shop
});