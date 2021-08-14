import { TOGGLE_MODAL } from './types';
import emailjs from 'emailjs-com';
import keys from '../config/keys';


export const sendEmail = (formValues) => async (dispatch) => {

  console.log()
  emailjs.send(
    keys.emailjsServicesID,
    keys.emailjsTemplateID,
    formValues,
    keys.emailjsUserID,
  )
    .then(() => {
      dispatch({ type: TOGGLE_MODAL, payload: 'success' });
    }, (error) => {
      console.log(error)
      dispatch({ type: TOGGLE_MODAL, payload: 'warning' });
    });
};

export const toggleModal = (status) => {
  return { type: TOGGLE_MODAL, payload: status };
};