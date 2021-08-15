import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions';
import ContactForm from './ContactForm';
import ContactFormReview from './ContactFormReview';
import ContactInfowindow from './ContactInfowindow';

class Contact extends React.Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <ContactFormReview
        onCancel={() => this.setState({ showFormReview: false })}
        onEmailSend={() => {
          this.setState({ showFormReview: false });
        }}
      />;
    }

    return <ContactForm
      onFormSubmit={() => this.setState({ showFormReview: true })}
    />;
  };

  renderInfowindow() {
    if (this.props.modal) {
      if (this.props.modal === 'success') {
        this.props.reset();
      }
      return <ContactInfowindow
        status={this.props.modal}
        onCancel={() => { this.props.toggleModal(false) }}
      />
    }
    return
  }

  render() {
    return (
      <div className="w-full pb-4">
        <div className="w-full flex justify-center items-center mt-32" >
          <div className="flex flex-col items-center w-full lg:w-1/2 px-8 lg:px-0">
            <div className="font-Raleway text-5xl lg:text-6xl w-full px-6 lg:px-0 text-center relative">
              <span id="contact" className="absolute -top-36 lg:-top-52"></span>Contact
            </div>
            <div className="mt-10 lg:text-xl w-full flex flex-col w-full">
              {this.renderContent()}
              {this.renderInfowindow()}
            </div>
          </div>
        </div >
      </div >
    );
  };
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  }
}

const Form = reduxForm({
  form: 'surveyForm',
})(Contact);

export default connect(mapStateToProps, { toggleModal })(Form);