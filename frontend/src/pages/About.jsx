import React from 'react';
import '../pages/About.css';
import { FaRegCalendarDays } from "react-icons/fa6";

function About() {
    return (
        <div className="about-section container-flex col-md-12">
            <div className='row'>
                <div className=" col-md-12  mb-4">
                    <h1 className="about-title">
                        About <span className="about-title-highlight">Me</span>
                    </h1>
                    <h2 className="about-sub-title">
                        I'm Vinonsan and I'm a | <span className="about-title-highlight">Full Stack Developer</span>
                    </h2>
                    <p className="about-description">
                        I’m a versatile Full Stack Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js) and experience with tools like Flask, Figma, and graphic design. I also work on machine learning models, including image recognition, and have a strong background in API implementation. I build responsive web applications, focusing on delivering efficient, scalable, and user-friendly solutions across both front-end and back-end.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="personal-details">
                        <p>Birthday : 06-04-1999</p>
                        <p>Email    : vinonsan.99@gmail.com</p>
                        <p>Phone    : +94 0754476969</p>
                        <p>Country  : Sri Lanka</p>
                        <p>Language : English, Tamil</p>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="box education-details">
                        <h3 className="section-title">Education</h3>
                        <ul>
                            <li>
                                <p><strong><FaRegCalendarDays /> 2019-2020</strong></p>
                            </li>

                                <p className="education-details-title fw-bold">Diploma in English and IT - Esoft Metro Campus</p>
                                <p className='education-details-para'>I completed my studies at 
                                    ESOFT Campus, where I gained a solid foundation in IT fundamentals
                                     and learned the basics of various programming languages.</p>
                            <li>
                                <p><strong> <FaRegCalendarDays /> 2020</strong></p>
                            </li>

                                <p className="education-details-title fw-bold">Diploma in Software Engineering - Esoft Metro campus</p>
                                <p className='education-details-para'>I completed my studies at ESOFT Campus,
                                     where I studied C# programming and Java programming. During my studies,
                                      I worked on a C# project using Visual Studio and developed Java 
                                      applications with NetBeans. This hands-on experience helped me build 
                                      a strong foundation in software development and deepened my understanding
                                       of both programming languages.</p>
                        </ul>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="box education-details">
                        <h3 className="section-title">Education</h3>
                        <ul>
                            <li>
                                <p><strong><FaRegCalendarDays />2024</strong></p>
                            </li>

                                <p className="education-details-title fw-bold">Working on Research Project - Enhancing Railway Safety</p>
                                <p className='education-details-para'>This is a research project utilizing machine learning 
                                    and MERN stack technology. The project focuses on improving railway safety 
                                    using Roboflow and YOLO for image recognition and object detection tasks. 
                                    Additionally, we are integrating weather forecasting APIs to further enhance 
                                    decision-making and safety measures.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
