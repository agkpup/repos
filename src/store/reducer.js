// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export default rootReducer;