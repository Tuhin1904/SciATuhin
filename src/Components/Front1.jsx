import React from 'react';
import "./Frontstyles.css";
import Image from "../media/img1.jpg"
import {FaComment} from 'react-icons/fa';

function Front1() {
  return (
  <>
    <div className="front1">
      <div className="content" style={{}}>
        <h3>Learn from scientist, research scolars from the top institutes in the world.</h3>
        <div className='universities'>
          <div className='firstrow'>

            <div id="eachU"><div className='eachUniv'></div>Cambridge University</div>
            
            <div id="eachU"><div className='eachUniv'></div>Harvard University</div>

            <div id="eachU"><div className='eachUniv'></div>University of California</div>
            
           <div id="eachU"> <div className='eachUniv'></div>ETH Zurich</div>
            
          </div>
          <div className='secrow'>
            <div id="eachU"><div className='eachUniv'></div>Max Planck</div>
            
            <div id="eachU"><div className='eachUniv'></div>University of Edinberg</div>
            
            <div id="eachU"><div className='eachUniv'></div>John's Hopkins</div>
            
            <div id="eachU"><div className='eachUniv'></div>Michigan State</div></div>
          
          <div className='thirdrow'>
            <div id="eachU"><div className='eachUniv'></div>University of Illinois</div>
            
            <div id="eachU"><div className='eachUniv'></div>Humboldt University Berlin</div>
            
            <p style={{margin:'6.4rem 0 0 3rem',fontSize:'1.2rem'}}>.....and so on.</p>
          </div>
        </div>

<div className="color1" style={{backgroundColor:"orange", height:'1.5rem',width:'100%',margin:'10rem 0 0 0', borderRadius:"10px"}}></div>
<div className="color1" style={{backgroundColor:"green", height:'1.5rem',width:'100%',margin:'3rem 0 0 0', borderRadius:"10px"}}></div>

      <h2>Meet your mentors</h2>
      <div className='mentors'>
          <div className='firstrowM'>
            <div className='eachMentor'>
              <img src={Image} alt="TeacherImage" className='imgM'/><p>Subham Roy</p><p className="uname">Oxford University</p>
            </div>
            <div className='eachMentor'>
              <img src={Image} alt="TeacherImage" className='imgM'/><p>Aditya Nayak</p><p className="uname">Cambridge University</p>
            </div>
            <div className='eachMentor'>
              <img src={Image} alt="TeacherImage" className='imgM'/><p>Piyush Verma</p><p className="uname">University</p>
            </div>
            <div className='eachMentor' >
              <img src={Image} alt="TeacherImage" className='imgM'/><p>Mandar Tornekar</p><p className="uname">University</p>
            </div>
          </div>
          <div className='firstrowM'>
            <div className='eachMentor'>
              <img src={Image} alt="TeacherImage" className='imgM'/><p>Name</p><p className="uname">University</p>
            </div>
            <div className='eachMentor'>
              <img src={Image} alt="TeacherImage" className='imgM' /><p>Name</p><p className="uname">University</p>
            </div>
            <div className='eachMentor'>
              <img src={Image} alt="TeacherImage" className='imgM' /><p>Name</p><p className="uname">University</p>
            </div>
            <div className='eachMentor'>
              <img src={Image} alt="TeacherImage" className='imgM' /><p>Name</p><p className="uname">University</p>
            </div>
          </div>
          <div className='firstrowM'>
          <div className='eachMentor'><p style={{fontWeight:'bold'}}>Mentor & Advisor</p><img src={Image} alt="TeacherImage" className='imgM'/><p>Name</p><p className='uname'>University</p>
            </div>
            <div className='eachMentor'><p>&nbsp;</p><img src={Image} alt="TeacherImage" className='imgM'/><p>Name</p><p className='uname'>University</p>
            </div>
            <div className='eachMentor'><p>&nbsp;</p><img src={Image} alt="TeacherImage" className='imgM'/><p>Akhil Tripathi</p><p className='uname'></p>
            <button className='mbtn'>Message him now <FaComment size={16} style={{color:"rgb(43, 39, 39)",backgroundColor:'transparent'}}/></button>
            </div>
            <div className='eachMentor'><p>&nbsp;</p><img src={Image} alt="TeacherImage" className='imgM'/><p>Vivek Dwivedi</p><p className='uname'></p>
            <button className='mbtn'>Message him now <FaComment size={16} style={{color:"rgb(43, 39, 39)",backgroundColor:'transparent'}}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Front1 