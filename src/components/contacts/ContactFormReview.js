import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions';
import formFields from './formFields';

const ContactFormReview = (props) => {
  const reviewFields = _.map(formFields, (field) => {
    return (
      <div className="mb-4" key={field.name}>
        <label className="font-bold">{field.label}</label>
        <div className="mt-4 italic">{props.formValues[field.name]}</div>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center">
      <div className="w-2/3">
        {reviewFields}
      </div>
      <div className="mt-8 flex flex-col lg:flex-row lg:justify-center">
        <button
          className="text-base font-bold py-4 lg:py-2 px-6 lg:mr-24 mb-5 lg:mb-0
            focus:outline-none focus:shadow-outline rounded flex justify-center items-center"
          onClick={props.onCancel}
        >
          <span className="material-icons mr-2">
            edit
          </span>
          Edit
        </button>
        <button
          className="bg-purple-700 text-white text-base font-bold py-4 px-24
                flex items-center rounded justify-center"
          onClick={() => {
            props.sendEmail(props.formValues);
            props.onEmailSend();
          }}
        >
          Send
          <span className="material-icons ml-3">
            mail
          </span>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, { sendEmail })(ContactFormReview);