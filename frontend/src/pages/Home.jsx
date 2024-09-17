// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../components/header';
import './home.css';
import Button from 'react-bootstrap/Button';
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Home() {
  return (
    <>
    <Header/>
    <div className='home-main-content container-flex'>
        <div className='row'>

            <div className='col-lg-8 col-sm-12'>
              <div className='home-content '>
                <h6 className='fs-3 fw-bold'>Hello , it's me</h6>
                <h3 className='fs-1 fw-bold'>Gloed Edward Vinonsan</h3>
                <h6 className='fs-3 fw-bold '>And I'm a <span className='typing-effect' style={{ color: '#D65A31' }}>Mern Stack developer</span></h6>
                <p >I’m a Full Stack Developer with a broad range of skills in web development and design. I specialize in creating efficient, scalable, and user-friendly applications, with expertise in both front-end and back-end technologies. My focus is on delivering high-quality solutions that meet the needs of users and businesses alike.</p>
              </div>

              <div className='home-buttons'>
                <Button variant="link">Download CV</Button>
                <div className='icon-circle'><FaLinkedinIn /></div>
                <div className='icon-circle'><TbBrandGithubFilled /></div>
                <div className='icon-circle'><FaYoutube /></div>
                <div className='icon-circle'><FaFacebookF /></div>
              </div>
              
            </div>
              
            <div className='col-lg-4 col-sm-12  container-flex'>
              <div className='profile-photo-circle'></div>

            </div>

        </div>

        <div className='row'>

            <div className='col-lg-3 col-sm-6  experience-meter'>
              <h1>01</h1>
              <p>Years of<br />Experience</p>
            </div>
              
            <div className='col-lg-3 col-sm-6   experience-meter'>
              <h1>02</h1>
              <p>Projects<br />Completed</p>
            </div>

            <div className='col-lg-3 col-sm-6  experience-meter'>
              <h1>05</h1>
              <p>Technologies<br />Mastered</p>
            </div>

            <div className='col-lg-3 col-sm-6  experience-meter'>
              <h1>600</h1>
              <p>Code<br />Commits</p>
            </div>

        </div>
  
      
      
    </div>
    </>
  )
}

export default Home