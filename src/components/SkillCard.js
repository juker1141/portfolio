import React from 'react';

class SkillCard extends React.Component {
  renderContent() {
    return this.props.contents.map((content) => {
      return <div>{content}</div>
    })
  }

  render() {
    return (
      <div className="border rounded-lg bg-white">
        <div className="flex flex-col items-center justify-center p-10 text-2xl mb-3">
          <i className="fab fa-html5 text-6xl mb-3 text-violet-500"></i>
          <div className="font-Oswald">{this.props.title}</div>
        </div>
        <div className="flex flex-col items-center justify-center px-10 text-xl mb-3">
          {this.renderContent()}
        </div>
      </div>
    );
  }
};

export default SkillCard;