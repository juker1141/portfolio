import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import ContactField from './ContactField';
import validateEmail from '../../utils/validateEmail';
import formFields from './formFields';

class ContactForm extends React.Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field key={name} component={ContactField} type="text" label={label} name={name} />
      );
    });
  };

  render() {
    return (
      <form
        className="flex flex-col"
        onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
      // handleSubmit 是 reduxForm 的函式
      >
        {this.renderFields()}
        <div className="mt-4 lg:mt-8 flex flex-col lg:flex-row lg:justify-between lg:mx-24">
          <button
            className="text-base font-bold py-4 lg:py-2 px-6
                focus:outline-none focus:shadow-outline rounded flex justify-center items-center
                disabled:opacity-80 mb-5 lg:mb-0"
            type="button"
            onClick={this.props.reset}
            disabled={this.props.pristine || this.props.submitting}
          >
            <span className="material-icons mr-3">
              clear
            </span>
            Cancel

          </button>
          <button
            className="bg-blue-900 text-white text-base font-bold py-4 px-24
                flex items-center rounded justify-center disabled:opacity-70"
            disabled={this.props.invalid || this.props.pristine}
          >
            Next
            <span className="material-icons ml-3">
              done
            </span>
          </button>
          {/* <button
            className="relative rounded-lg overflow-hidden border-2 py-4 px-24 group"
            disabled={this.props.invalid || this.props.pristine}
          >
            <span className="absolute w-96 h-96 transform -rotate-45 group-hover:text-white group-hover:-top-14 group-hover:-left-14 transition-all ease-linear duration-300 bg-blue-900 left-52 top-14"></span>
            <span className="relative group-hover:text-white duration-300 flex items-center">
              Next
              <span className="material-icons ml-3">
                done
              </span>
            </span>
          </button> */}
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.email = validateEmail(values.email || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `Please provide a ${name}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate, // 驗證用戶輸入的資料
  form: 'surveyForm',
  destroyOnUnmount: false
})(ContactForm);