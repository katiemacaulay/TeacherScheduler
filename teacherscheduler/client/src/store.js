import {createStore} from 'redux';
import state from "./state";
import reducers from "./reducers";

var store = createStore(reducers,state);

export default store;