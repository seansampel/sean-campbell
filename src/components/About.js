import React from 'react'
import '../styles/About.css';
import Profile from '../Profile.png';
import Sampel from '../Sampel.jpg';

const About = () => {
  return (
    <div className="About" id="About">
      <img src={Profile} id="Profile" alt="Profile" />
      <h3>My name is Sean and I am a front end developer based in Manchester.</h3>
      <h3>I graduated from Manchester Codes Academy in 2020.</h3>
      <img src={Sampel} id="Sampel" alt="Sampel" />
      <h3>When I am not coding I am either playing music or spending time with my children.</h3>
      
    </div>
  )
}
export default About;