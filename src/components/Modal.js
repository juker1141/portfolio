import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const iconClass = (props) => {
    switch (props.colorStatus) {
      case 'success':
        return `bg-green-500`;
      case 'warning':
        return `bg-yellow-400`;
      case 'danger':
        return `bg-red-600`;
      default:
        return null;
    };
  }

  const borderClass = (props) => {
    switch (props.colorStatus) {
      case 'success':
        return `border-green-500`;
      case 'warning':
        return `border-yellow-400`;
      case 'danger':
        return `border-red-600`;
      default:
        return null;
    };
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 w-full h-full z-20 bg-black
            bg-opacity-50 duration-300 overflow-y-auto"
      onClick={props.onCancel}
    >
      <div
        onClick={(e) => { e.stopPropagation() }}
        className="relative w-11/12 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-1/5 mx-auto mt-52 lg:mt-72 opacity-100"
      >
        <div
          className="relative bg-white shadow-lg rounded-lg text-blue-900 z-20"
        >
          <div className="absolute inset-x-1/2 -top-6 flex justify-center">
            <div className={`w-16 h-16 rounded-full ${iconClass(props)}`}>
              <span className="material-icons-outlined text-5xl p-2 text-third">
                {props.icon}
              </span>
            </div>
          </div>
          <div className={`border-8 rounded-t-lg ${borderClass(props)}`}></div>
          <div className="px-4 pt-8 pb-6">
            <div className="text-center mt-6">
              {props.content}
            </div>
          </div>
          <div className="flex justify-center px-16 py-3">
            {props.actions}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal"),
  );
};

export default Modal;