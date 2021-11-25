import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">  
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>About</h5>
              <h1>Let me introduce myself.</h1>
              <div className="intro-info">
                <img src="images/profile-pic-him.png" alt="Profile Picture" />
                
                <p className="lead">A passionate engineer with 5+ years of experience in full-stack development. A collaborative developer with experience in building frontend and backend applications, working with distributed systems and cloud technologies, setting up CI/CD and metrics pipelines. A self-motivated individual with the mindset of continuous learning and growth. Editor of Medium Publication - <a href="https://medium.com/@himanshujaiswal_58882" target="_blank" rel="noreferrer">Javascript in Plain English</a>
                </p>
              </div>   			
            </div>   		
          </div>
          <div className="row about-content">
            <div className="col-six tab-full">
              <ul className="info-list">
                <li>
                  <strong>Fullname:</strong>
                  <span>Himanshu Jaiswal</span>
                </li>
                <li>
                  <strong>Birth Date:</strong>
                  <span>October 13</span>
                </li>
                <li>
                  <strong>Job:</strong>
                  <span>Full Stack Developer</span>
                </li>
                <li>
                  <strong>Website:</strong>
                  <span>www.himanshujaiswal.co.in</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>jaiswalhimanshu.36@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col-six tab-full">
              <ul className="skill-bars">
                <li>
                  <div className="progress percent90"><span>90%</span></div>
                  <strong>Java</strong>
                </li>
                <li>
                  <div className="progress percent85"><span>85%</span></div>
                  <strong>Kubernetes</strong>
                </li>
                <li>
                  <div className="progress percent70"><span>70%</span></div>
                  <strong>Docker</strong>
                </li>
                <li>
                  <div className="progress percent75"><span>75%</span></div>
                  <strong>Javascript</strong>
                </li>
                <li>
                  <div className="progress percent70"><span>70%</span></div>
                  <strong>ReactJS</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="row button-section">
            <div className="col-twelve">
              <a href="documents/HimanshuJaiswal_Resume.pdf" title="Download CV" className="button button-primary" download="HimanshuJaiswal_Resume.pdf">Download CV</a>
            </div>   		
          </div>
        </section>
      
      </React.Fragment>
    );
  }
}