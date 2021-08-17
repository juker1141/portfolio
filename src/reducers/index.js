import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import modalReducer from './modalReducer';
import formReviewReducer from './formReviewReducer';

export default combineReducers({
  form: reduxForm,
  modal: modalReducer,
  formReview: formReviewReducer,
})