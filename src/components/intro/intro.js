import React, { Component } from 'react';
export default class intro extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="intro">   
          <div className="intro-overlay" />	
          <div className="intro-content">
            <div className="row">
              <div className="col-twelve">
                <h5>Hello, World.</h5>
                <h1>I'm Himanshu</h1>
                <p className="intro-position">
                  <span>Full Stack Developer</span>
                </p>
                <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
              </div>  
            </div>   		 		
          </div>
          <ul className="intro-social">        
            <li><a href="https://www.facebook.com/himanshu.jaiswal.587" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/in/hjaiswal1/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://github.com/hjaiswal" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a></li>
            <li><a href="https://www.instagram.com/jaiswalhimanshu.36/?hl=en" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a></li>
            <li><a href="https://medium.com/@himanshujaiswal_58882" target="_blank" rel="noreferrer"><i className="fa fa-medium"></i></a></li>
            
          </ul>      	
        </section>
      
      </React.Fragment>
    );
  }
}