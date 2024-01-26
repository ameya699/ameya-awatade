import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Tooltip from '@mui/material/Tooltip/Tooltip';
 
import { FiMail ,FiInstagram,FiLinkedin,FiGithub} from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
import { SecurityTwoTone } from "@mui/icons-material";
const Contact = () => {
    const contactmeiconstyles={fontSize:"2rem",color:"212529"}
    const [data,setData]=useState({email:'',message:''});
    const secretkey=process.env.REACT_APP_EMAILJS_KEY;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

      const handleformsubmit = () => {
        
        try{
        let emailID = data.email.trim();
        let fromname = emailID;
        let phoneNumber = "NA";
        let message = data.message.trim();
        if(!(emailID && message)){
          return;
        }
        emailjs.init(secretkey);
        emailjs.send("service_65np1yr", "template_mhuf652", {
          from_name: fromname,
          name:
            fromname === null || fromname === "" ? emailID.split("@")[0] : fromname,
          email: emailID,
          phone_num: phoneNumber,
          message: message,
        });
        setData({ name: "", email: "", phoneNumber: "", message: "" });
        }
        catch(err){
          console.log(err);
        }
      }; 
  return (
    <>
      <div className="fadeInUp-animation">
        <div className="contact-container">
          <div className="skill-heading">Write to me</div>
           <div style={{display:"flex",justifyContent:"center",paddingTop:"4rem"}}>
            <div className="contact-form" >
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
 
                <textarea rows={4} type="text" class="form-control" name="message"  placeholder="Message" onChange={handleChange} />
              </div>
            </div>
            <div class="form-group"></div>
            <button   class="btn btn-dark" onClick={handleformsubmit} type="submit">
              Send
            </button>
          </div>
         
           </div>
        </div>
        <div className="socialhandles-container">
          
        <Tooltip  title="Linkedin">
        <a   href="https://www.linkedin.com/in/ameyaawatade/" target="_blank">
        <FiLinkedin style={contactmeiconstyles}  />
        </a>
        </Tooltip>
        <Tooltip  title="Github">
        <a  href="https://github.com/ameya699" target="_blank">
        <FiGithub style={contactmeiconstyles} />
        </a>
        </Tooltip>
        <Tooltip  title="Mail">
        <a  href="mailto:awatadeameya68@gmail.com" target="_blank">
        <FiMail style={contactmeiconstyles} />
        </a>
        </Tooltip>
        <Tooltip  title="Instagram">
          <a   href="https://www.instagram.com/ameyaawatade/" target="_blank">
        <FiInstagram style={contactmeiconstyles} />
        </a>
        </Tooltip>
        <Tooltip title="WhatsApp">
          <a href="https://wa.me/917057868456?text=Hello there, can we have a quick chat?" target="_blank">
            <RiWhatsappLine style={contactmeiconstyles}/>
          </a>
        </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Contact;
