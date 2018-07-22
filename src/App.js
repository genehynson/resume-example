import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import { main, resume, testimonials } from '../public/resumeData';
import _ from 'lodash';
import axios from 'axios';
import { PROFILE_URL, EXPERIENCE_URL, EDUCATION_URL, SKILLS_URL } from './Util/Constants';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {
        main: main,
        resume: resume,
        testimonials: testimonials
      }
    }
  }

  async getProfile() {
    try {
      const res = await axios.get(PROFILE_URL);
      return res.data;
    } catch (e) {
      return {};
    }
  }

  async getExperience() {
    try {
      const res = await axios.get(EXPERIENCE_URL);
      return res.data;
    } catch (e) {
      return [];
    }
  }

  async getEducation() {
    try {
      const res = await axios.get(EDUCATION_URL);
      return res.data;
    } catch (e) {
      return [];
    }
  }

  // updateSkillLevel(skill, newLevel) {
  //   axios.put(`${SKILLS_URL}/${skill.id}`, {
  //     name: skill.name,
  //     level: newLevel
  //   });
  //   this.setState(
  //     {
  //       resumeData:
  //       {
  //         ...this.state.resumeData,
  //         resume: {
  //           ...this.state.resumeData.resume,
  //           skills: _.map(this.state.resumeData.resume.skills, (s) => s.id == skill.id ? { id: s.id, name: s.name, level: newLevel } : s)
  //         }
  //       }
  //     }
  //   )
  // }

  componentDidMount() {
    if (_.isEmpty(this.state.resumeData.main)) {
      (async () => {
        let profile = await this.getProfile();
        let experience = await this.getExperience();
        let education = await this.getEducation();
        this.updateState(profile, experience, education);
      })();
    }
  }

  updateState(profile, experience, education) {
    this.setState(
      {
        resumeData:
        {
          main: profile,
          resume: {
            education: education,
            work: experience,
            skills: [], //TODO
          }
        }
      }
    );
  }


  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} updateSkillLevel={(skill, newLevel) => this.updateSkillLevel(skill, newLevel)} />
        {/* <Testimonials data={this.state.resumeData.testimonials} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
