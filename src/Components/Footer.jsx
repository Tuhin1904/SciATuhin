import "./Footerstyles.css"
import React from 'react';
import Image9 from '../media/img9.webp'
import {FaHome,FaFirefox,FaBook,FaPhone,FaUnlock,FaFacebook,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

function Footer() {
  return (
    <>
          <div className="footer">
            <div className="leftF" >
              <img src={Image9} alt="logo" />
              <h3>SciAstra</h3>
              <p><FaHome size={15} style={{color:"white",backgroundColor:'transparent'}}/> Home</p>
              <p><FaBook size={15} style={{color:"white",backgroundColor:'transparent'}}/> Our Courses</p>
              <p><FaFirefox size={15} style={{color:'white',backgroundColor:'transparent'}}/> Blog</p>
              <p><FaUnlock size={15} style={{color:'white',backgroundColor:'transparent'}}/> Free Materials</p>
              <p><FaHome size={15} style={{color:"white",backgroundColor:'transparent'}}/> Our Team</p>
              <p><FaPhone size={15} style={{color:"white",backgroundColor:'transparent'}}/> Contact Us</p>
            </div>
            <div className="rightF" >
              <h3>Email us at : support@sciastra.com</h3>
              <div className="logo1">
                <span><FaLinkedinIn size={20} style={{color:"white",backgroundColor:'transparent'}}/></span>
                <span><FaInstagram size={20} style={{color:"white",backgroundColor:'transparent'}}/></span>
                <span><FaFacebook size={20} style={{color:"white",backgroundColor:'transparent'}}/></span>
              </div>
            </div>
          <div className="lower">
          <p>SciAstra Education Pvt Ltd,</p>
          <p>Bhubaneswar, Odisha</p>
          <p>© Copyright 2023, SciAstra. All rights reserved</p>
          </div>

          </div>
    </>
  )
}

export default Footer