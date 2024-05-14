import React, { useState } from 'react';
 import reactlogo from '../images/reactlogo.png'
import {projects} from '../docs/projects';
const Projects = () => {
    const [data,setData]=useState(projects);

    const handleNavigation=(e)=>{
        // console.log(e.currentTarget.id)
       return window.open(e.currentTarget.id.split("$")[1],"_blank")
    }

    return (
        <div className='fadeInUp-animation'>
            <div className='skill-heading' style={{paddingTop:"3rem"}}>
                Few of my listed projects
            </div>
        <div className='project-container'>
          {data.map((project,index)=>{
            return (
            <div class="card" onClick={handleNavigation} id={`${index}$${project.projectlink}`}>
                <img src= {project.thumbnail==undefined?reactlogo:project.thumbnail} class="card-img-top"  alt="project-thumbnail"/>
                    <div class="card-body">
                        <h5 class="card-title">{project.name}</h5>
                        <p class="card-text">{project.description}</p>
                        {/* <a type="button" href={project.projectlink} target='_blank' class="btn btn-dark" style={{textDecoration:"none"}}>Visit</a> */}
                    </div>
            </div>)
          })}  
         
        </div>
        <div   style={{paddingBottom:"4rem",display:"flex",justifyContent:"center"}}>
 
<a href="https://github.com/ameya699/"  target='_blank' class="bn5" style={{textDecoration:"none"}}>Github</a>
</div>
        </div>
    );
};

export default Projects;