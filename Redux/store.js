
import {createStore} from 'redux';
import pizzaReducer from './Pizza/pizzaReducer';
import burgerReducer from './Burger/burgerReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    burgerReducer: burgerReducer,
    pizzaReducer: pizzaReducer
})
  
// Passing burgerReducer to createStore
const store=createStore(allReducers);
  
export default store;