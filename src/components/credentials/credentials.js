import React, { Component } from "react";

export default class Credentials extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume" className="grey-section">
          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Work Experience</h2>
            </div>

            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Senior Software Engineer</h3>
                    <p>January 2020 - Present</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Lowes India</h4>

                    <ul>
                      <li>
                        Designed and developed Taxonomy Cesta, a modern tool
                        with real-time capabilities to make Category hierarchy,
                        Left Navigation bar and Category Product relationship
                        changes on the Product Listing page
                      </li>
                      <li>
                        Saved annual license cost of ~ $200K by replacing
                        SynapIca (Legacy tool) with Taxonomy UI
                      </li>
                      <li>
                        Designed and developed Merch Bucket Tool as a
                        replacement for Management Center in WCS with enhanced
                        real-time capabilities to release a promotional bucket
                      </li>
                      <li>
                        Improved user experience, speed and saved annual license
                        cost of Management Center
                      </li>
                      <li>
                        Awarded Top Contributor Award for the contributions
                        towards Merchandising Tools
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Senior Software Engineer</h3>
                    <p>July 2016 - December 2019</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Target India</h4>
                    <u>Stores Modernization</u>
                    <br />
                    <ul>
                      <li>
                        Lead the development of UNIMATRIX environment for
                        Enterprise Price which became the backbone of
                        applications deployment in stores, including successful
                        release of Location Price V2 API
                      </li>
                      <li>
                        Improved accuracy of prices by implementing shutdown
                        logic of applications in stores to prevent price
                        activations getting out of sync in case of database
                        crash and data loss
                      </li>
                      <li>
                        Developed Spark-based backup job to restore price data
                        from Head-Quarter DC’s to Stores which played a crucial
                        role during database crash
                      </li>
                      <li>
                        Established and matured business and product metrics for
                        better insights into our application
                      </li>
                      <li>
                        Unlocked the visibility into the current selling prices
                        in stores for the very first time, increased accuracy of
                        prices received by HQ apps thereby reducing guest
                        friction
                      </li>
                      <li>
                        Decommissioned legacy mainframe system for 1800+ stores,
                        savings on tons of effort on security patching and
                        maintenance
                      </li>
                      <li>
                        Received Quarterly Leadership Award for the
                        contributions in modernizing 1800+ stores
                      </li>
                    </ul>
                    <u>Channel Pricing</u>
                    <br />
                    <ul>
                      <li>
                        Designed and developed Enterprise Location Price V2 API,
                        the single source of prices across all channels
                        including Target.com, Apps, 1800+ stores
                      </li>
                      <li>
                        Provided visibility of sale prices days in advance of
                        go-live. This is a significant feature that will unravel
                        a ton of business use-cases including enabling
                        site-preview and signing, promo validation, etc.
                      </li>
                      <li>
                        Contributed to enable channel pricing features in
                        Location Price V2 API, one of the key business outcomes
                      </li>
                      <li>
                        Supporting traffic of 100K transactions per second with
                        response time (99th percentile) under 100 ms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row resume-timeline">
            <div className="col-twelve resume-header">
              <h2>Education</h2>
            </div>

            <div className="col-twelve">
              <div className="timeline-wrap">
                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>B.Tech - M.Tech Dual Degree</h3>
                    <p>July 2011 - June 2016</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Indian Institute of Technology, Kanpur</h4>
                    <p>
                      CGPA: 8.3/10 (M.Tech), 7.5/10 (B.Tech) <br />
                      Activities: Head of Public Relations, Techkriti
                    </p>
                  </div>
                </div>

                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Class XII</h3>
                    <p>April 2009 - March 2011</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Central Academy School, CBSE</h4>
                    <p>Grade: 90.8%</p>
                  </div>
                </div>

                <div className="timeline-block">
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>Class X</h3>
                    <p>April 1995 - March 2009</p>
                  </div>

                  <div className="timeline-content">
                    <h4>Bishop Johnson School</h4>
                    <p>Grade: 94.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
