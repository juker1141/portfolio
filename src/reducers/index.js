import { combineReducers } from 'redux';
import themeColorReducer from './themeColorReducer';
// import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  themeColor: themeColorReducer,
})