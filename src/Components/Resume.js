import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { SKILLS_URL } from '../Util/Constants';

class Resume extends Component {
  // onSkillClick = (skill) => {
  //   if (skill.level < 100) {
  //     let newValue = skill.level + 5;
  //     this.props.updateSkillLevel(skill, newValue);
  //   }
  // }

  render() {
    const self = this;
    if (!_.isEmpty(this.props.data)) {
      var education = this.props.data.education.map(function (edu) {
        return <div key={edu.id} className="row item">
          <div className="twelve columns">
            <h3>{edu.school}</h3>
            <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
            <p>
              {edu.description}
            </p>
          </div>
        </div>
      });

      var work = this.props.data.work.map(function (job) {
        return <div key={job.id} className="row item">
          <div className="twelve columns">
            <h3>{job.company}</h3>
            <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>

            <p>
              {job.description}
            </p>
          </div>
        </div>
      });

      var skills = this.props.data.skills.map(function (skill) {
        var className = 'bar-expand ' + skill.name.toLowerCase();
        return <li key={skill.name} onClick={() => self.onSkillClick(skill)}><span style={{ width: `${skill.level}%` }} className={className}></span><em>{skill.name}</em></li>
      });
    }
    return (
      <section id="resume">
        {_.isEmpty(education) ? null :
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {education}
            </div>
          </div>
        }

        {_.isEmpty(work) ? null :
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {work}
            </div>
          </div>
        }

        {_.isEmpty(skills) ? null :
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>Skills I have aquired from my Computer Science education or my profesional experience in the software development field, rated by my peers (click to increase value).
              </p>
              <div className="bars">
                <ul className="skills">
                  {skills}
                </ul>
              </div>
            </div>
          </div>
        }
      </section>
    );
  }
}

export default Resume;
