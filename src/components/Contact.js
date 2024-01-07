import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Tooltip from '@mui/material/Tooltip/Tooltip';
 
import { FiMail ,FiInstagram,FiLinkedin,FiGithub} from "react-icons/fi";
const Contact = () => {
    const [data,setData]=useState({email:'',message:''});
  
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

      const handleformsubmit = (e) => {
 
        let emailID = data.email.trim();
        let fromname = emailID;
        let phoneNumber = "NA";
        let message = data.message.trim();
        emailjs.init("7it6lhchycIVPkzgm");
        emailjs.send("service_65np1yr", "template_mhuf652", {
          from_name: fromname,
          name:
            fromname === null || fromname === "" ? emailID.split("@")[0] : fromname,
          email: emailID,
          phone_num: phoneNumber,
          message: message,
        });
        setData({ name: "", email: "", phoneNumber: "", message: "" });
      }; 
  return (
    <>
      <div className="fadeInUp-animation">
        <div className="contact-container">
          <div className="skill-heading">Write to me</div>
           <div style={{display:"flex",justifyContent:"center",paddingTop:"4rem"}}>
            <form className="contact-form" onSubmit={handleformsubmit}>
            <div class="form-row">
              <div class="form-group col-md ">
         
                <input
                  type="email"
                  class="form-control"
                    name="email"
                  placeholder="Email"
                  onChange={handleChange}
                   
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md ">
 
                <input type="text" class="form-control" name="message"  placeholder="Message" onChange={handleChange} />
              </div>
            </div>
            <div class="form-group"></div>
            <button   class="btn btn-dark">
              Send
            </button>
          </form>
         
           </div>
        </div>
        <div className="socialhandles-container">
          
        <Tooltip  title="Linkedin">
        <a   href="https://www.linkedin.com/in/ameyaawatade/" target="_blank">
        <FiLinkedin style={{fontSize:"2rem",color:"212529"}}  />
        </a>
        </Tooltip>
        <Tooltip  title="Github">
        <a  href="https://github.com/ameya699" target="_blank">
        <FiGithub style={{fontSize:"2rem",color:"212529"}} />
        </a>
        </Tooltip>
        <Tooltip  title="Mail">
        <a  href="mailto:awatadeameya68@gmail.com" target="_blank">
        <FiMail style={{fontSize:"2rem",color:"212529"}} />
        </a>
        </Tooltip>
        <Tooltip  title="Instagram">
          <a   href="https://www.instagram.com/ameyaawatade/" target="_blank">
        <FiInstagram style={{fontSize:"2rem",color:"212529"}} />
        </a>
        </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Contact;
