import React from 'react';
import Header from './Header';
import "../App.css"
import aboutme from "../images/profilephoto.png";

const Home = () => {
    return (
  <>
  <div className='hello-container'>
<div >
<p className='hello-heading'>Hello,</p>
  <p className='hello-content'>I am Ameya Awatade </p>
  <p className='hello-content' style={{color:"grey",fontStyle:"italic"}}>Software Developer at Persistent Systems</p>
</div>
<img src={aboutme} className='profile'  alt="myphoto"/>
  </div>
  <div className='hello-description'>
  I am passionate about Full
        Stack Development and excel in using a diverse skill set that includes
        Express, React, Node, MongoDB, Restful Web Services and APIs...etc. I have
        experience in designing elegant user interfaces, building robust
        back-end services, and creating RESTful APIs. I have been recognized for
        my work in developing projects using generative AI and for creating
        enterprise applications. I am a quick learner and can effectively apply
        my knowledge. Apart from coding, I also enjoy designing, dancing, sketching cars
         and playing computer games.
  </div>

  </>
    );
};

export default Home;