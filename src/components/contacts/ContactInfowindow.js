import React from 'react';
import Modal from '../Modal';

class ContactInfowindow extends React.Component {
  renderContent() {
    if (this.props.status === 'success') {
      return (
        <React.Fragment>
          <div className="text-xl font-black mb-5">Success !</div>
          <div className="mb-3 font-bold">We have already received your reply</div>
          <div className="font-bold">and will get back to you shortly.</div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <div className="text-xl font-black mb-5">Oops !</div>
        <div className="mb-3 font-bold">Something went wrong</div>
        <div>Please wait for moment and try again on sending email</div>
      </React.Fragment>
    );
  }

  renderActions(status) {
    return (
      <React.Fragment>
        <button
          onClick={() => { this.props.onCancel() }}
          className={`${status === 'success' ? 'bg-green-400' : 'bg-yellow-400'} text-blue-900 text-base font-bold py-4 lg:py-2 px-6 flex items-center rounded justify-center mb-5 lg:mb-0`}
        >
          Close window
        </button>
      </React.Fragment>
    )
  };

  render() {
    return (
      <Modal
        icon={this.props.status === 'success' ? 'done' : 'priority_high'}
        colorStatus={this.props.status === 'success' ? 'success' : 'warning'}
        content={this.renderContent()}
        actions={this.renderActions(this.props.status)}
        onCancel={() => { this.props.onCancel() }}
      />
    )
  }
};

export default ContactInfowindow;