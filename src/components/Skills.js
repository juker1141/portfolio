import React from 'react';
import SkillCard from './SkillCard';
import skillsDetail from './skillsdetail';

class Skills extends React.Component {
  renderCard() {
    return skillsDetail.map((skill) => {
      return (
        <SkillCard
          key={skill.title}
          title={skill.title}
          contents={skill.contents}
        />
      )
    })
  }

  render() {
    return (
      <div className="container mx-auto" >
        <div className="grid grid-cols-3 gap-10 px-48">
          {this.renderCard()}
        </div>
      </div>
    );
  }
};

export default Skills;