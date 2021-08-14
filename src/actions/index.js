import { TOGGLE_MODAL } from './types';
import emailjs from 'emailjs-com';
const SERVICES_ID = process.env.REACT_APP_EMAILJS_SERVICES_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;


export const sendEmail = (formValues) => async (dispatch) => {

  console.log(process.env.REACT_APP_EMAILJS_SERVICES_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, process.env.REACT_APP_EMAILJS_USER_ID)
  emailjs.send(
    SERVICES_ID,
    TEMPLATE_ID,
    formValues,
    USER_ID
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