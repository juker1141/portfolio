import { TOGGLE_MODAL, TOGGLE_FORMREVIEW } from './types';
import emailjs from 'emailjs-com';
import keys from '../config/keys';

export const sendEmail = (formValues) => async (dispatch) => {
  dispatch({ type: TOGGLE_MODAL, payload: 'loading' });
  emailjs.send(
    keys.emailjsServicesID,
    keys.emailjsTemplateID,
    formValues,
    keys.emailjsUserID,
  )
    .then(() => {
      dispatch({ type: TOGGLE_MODAL, payload: 'success' });
    }, () => {
      dispatch({ type: TOGGLE_MODAL, payload: 'error' });
    });
};

export const toggleModal = (status) => {
  return { type: TOGGLE_MODAL, payload: status };
};

export const toggleFormReview = (status) => {
  return { type: TOGGLE_FORMREVIEW, payload: status };
}