import React from 'react';
import Tooltip from '@mui/material/Tooltip/Tooltip';
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
import { DiReact,DiNodejs,DiMsqlServer,DiMysql,DiMongodb,DiJsBadge } from "react-icons/di";
import { SiPowerapps,SiPowerautomate,SiOracle,SiExpress,SiHtml5 ,SiCss3,SiDataverse,SiPeerlist,SiTypescript} from "react-icons/si";
 
const Skills = () => {

    const skilllogos=[reactlogo,nodejslogo,expresslogo,ejslogo,mongologo,sqlserverlogo,powerappslogo,powerautomatelogo,tibcologo,oiclogo]
    return (
         <>
         <div className='fadeInUp-animation'>
         <div className='skill-container'>
            <div className='skill-heading'>
                My Skills
            </div>
             {/* <div className='skill-description'  >
             {skilllogos.map((skill)=>{
                return <img src={skill} className='skill-image'   />
             })}
             </div> */}
             <div className='skill-description' > 
              <Tooltip title='React.js' arrow> 
                <p> <DiReact className='skilllogos'/>  </p>
              </Tooltip>
              <Tooltip title='Node.js' arrow>
            <p> <DiNodejs className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='TypeScript' arrow>
            <p> <SiTypescript className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='Javascript' arrow>
            <p> <DiJsBadge className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='Express.js' arrow>
            <p> <SiExpress className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='Microsoft Sql Server' arrow>
            <p> <DiMsqlServer className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='MySQL' arrow>
            <p> <DiMysql className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='MongoDB' arrow>
            <p> <DiMongodb className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='HTML' arrow>
            <p> <SiHtml5 className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='CSS' arrow>
            <p> <SiCss3 className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='Power Apps' arrow>
            <p> <SiPowerapps className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='Power Automate' arrow>
            <p> <SiPowerautomate className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='Oracle Cloud Integration' arrow>
            <p> <SiOracle className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='Dataverse' arrow>
            <p> <SiDataverse className='skilllogos'/> </p>
            </Tooltip>
            <Tooltip title='Sharepoint Lists' arrow>
            <p> <SiPeerlist className='skilllogos'/> </p>
            </Tooltip>
            

            </div>
         </div>

         </div>
         </>
    );
};

export default Skills;