import React from 'react';
import './Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <div className="container-flex skills-section">
      <h2 className="skills-title">
        My <span className="skills-highlight">skills</span>
      </h2>
      {/* Row to hold the columns */}
      <div className="row">
        <div className="skills-container">
          {/* Left Column */}
          <div className="col-md-12 mb-4 skills-column">
            <div className="skill-item">
              <div className="circle-icon">
                <img src="/path-to-icons/html-icon.png" alt="HTML" className="icon" />
              </div>
              <div className="skill-name-line-container">
                <span>HTML</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>CSS</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>JavaScript</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>PHP</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Bootstrap</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>React JS</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Node JS</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Express</span>
                <div className="skill-line"></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-12 mb-4 skills-column">
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Flask</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Python</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Machine Learning</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Google Colab</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Figma</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>React Native</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon">
                <img src="/path-to-icons/laravel-icon.png" alt="Laravel" className="icon" />
              </div>
              <div className="skill-name-line-container">
                <span>Laravel</span>
                <div className="skill-line"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="circle-icon"></div>
              <div className="skill-name-line-container">
                <span>Tailwind CSS</span>
                <div className="skill-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
