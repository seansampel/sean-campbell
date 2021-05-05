import React from 'react'
import '../styles/About.css';
import Profile from '../Profile.png';


const About = () => {
  return (
    <div className="About" id="About">
      <img src={Profile} id="Profile" alt="Profile" />
      <p>My name is Sean and I am a front end developer based in Manchester.</p>
      <p>I graduated from Manchester Codes Academy in 2020.</p>

    </div>
  )
}
export default About;