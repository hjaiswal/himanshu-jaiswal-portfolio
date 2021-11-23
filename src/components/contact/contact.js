import React, { Component } from "react";

export default class contact extends Component {
  render() {
    return (
      <React.Fragment>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section id="contact">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Contact</h5>
              <h1>I'd Love To Hear From You.</h1>
            </div>
          </div>{" "}
          <div className="row contact-info">
            <div className="col-six tab-full">
              <div className="icon">
                <i className="icon-pin" />
              </div>
              <h5>Where to find me</h5>
              <p>
                Manyata Tech Park
                <br />
                Bangalore, Karnataka
                <br />
                560064
              </p>
            </div>
            <div className="col-six tab-full collapse">
              <div className="icon">
                <i className="icon-mail" />
              </div>
              <h5>Email Me At</h5>
              <p>
                jaiswalhimanshu.36@gmail.com
              </p>
            </div>
          </div>{" "}
        </section>{" "}
        <footer>
          <div className="row">
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up" /></a>
            </div>
          </div> {/* /row */}     	
        </footer>

        <div id="preloader"> 
          <div id="loader" />
        </div>
      </React.Fragment>
    );
  }
}
