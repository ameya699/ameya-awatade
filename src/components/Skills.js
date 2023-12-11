import React from 'react';

import reactlogo from "../images/reactlogo.png"
import nodejslogo from "../images/nodelogo.png"
import expresslogo from "../images/expresslogo.png"
import ejslogo from "../images/ejslogo.png"
import mongologo from "../images/mongologo.png"
import sqlserverlogo from "../images/sqlserverlogo.png"
import powerappslogo from "../images/powerappslogo.png"
import powerautomatelogo from "../images/powerautomatelogo.png"
import tibcologo from "../images/tibcologo.png"
import oiclogo from "../images/oiclogo.png"
const Skills = () => {

    const skilllogos=[reactlogo,nodejslogo,expresslogo,ejslogo,mongologo,sqlserverlogo,powerappslogo,powerautomatelogo,tibcologo,oiclogo]
    return (
         <>
         <div className='fadeInUp-animation'>
         <div className='skill-container'>
            <div className='skill-heading'>
                I have experience in these Technologies and Tools.
            </div>
             <div className='skill-description'  >
             {skilllogos.map((skill)=>{
                return <img src={skill} className='skill-image'   />
             })}
             </div>
         </div>
         </div>
         </>
    );
};

export default Skills;