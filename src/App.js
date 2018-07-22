import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import { main, resume, testimonials } from '../public/resumeData';
import _ from 'lodash';
import axios from 'axios';
import { PROFILE_URL, EXPERIENCE_URL, EDUCATION_URL } from './Util/Constants';


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
    const res = await axios.get(PROFILE_URL);
    return res.data;
  }

  async getExperience() {
    const res = await axios.get(EXPERIENCE_URL);
    return res.data;
  }

  async getEducation() {
    const res = await axios.get(EDUCATION_URL);
    return res.data;
  }

  componentDidMount() {
    if (_.isEmpty(this.state.resumeData.main)) {
      (async () => {
        try {
          let profile = await this.getProfile();
          let experience = await this.getExperience();
          let education = await this.getEducation();
          this.updateState(profile, experience, education);
        } catch (e) {
          console.log(e);
        }
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
        <Resume data={this.state.resumeData.resume} />
        {/* <Testimonials data={this.state.resumeData.testimonials} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
