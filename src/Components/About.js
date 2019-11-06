import React, { Component } from 'react';
import _ from 'lodash';
require ('../../src/resumeData.json');

class About extends Component {
  render() {
    if(!_.isEmpty(this.props.data)){
        var name = this.props.data.name;
        var image = 'images/'+this.props.data.image;
        var bio = this.props.data.bio;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;
        var phone = this.props.data.phone;
        var email = this.props.data.email;
    }
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={image} alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city}, {state} {zip}
                     </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
