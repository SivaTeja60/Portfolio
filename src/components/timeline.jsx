import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Student at California State University Eastbay, Hayward <span>2021-present</span></h2>
                        <p>Currently pursuing Masters in Computer Science. Have gained insights from the courses WebSystems, Advanced Algorithms and Machine Learning with primary focus on Web development & Machine Learning.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Student Assistant at California State University Eastbay, Hayward <span>2021-present</span></h2>
                        <p>I work with Configuring Report generation and SQL Query Design through Oracle Business Intelligence reporting suite and Configured Stack Map setup to monitor computer availability throughout the library computers.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Ericsson, Bengaluru India <span>2019-2021</span></h2>
                        <p>Worked on designing the front end using JavaScript, HTML & CSS using Agile methodology. Developed Machine learning models for diabetes prediction, wine quality prediction and digit recognizer. Collaborated with cross-functional teams to run tests and explored potential bugs.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Wipro Technologies, Bengaluru India <span>2017-2019</span></h2>
                        <p>Worked on developing automated solutions for web based and Mainframe applications. Login module was developed using ReactJS,NodeJS & Javascript.</p> 
                      </div>
                    </div>
                  </article>
                  {/*<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at Sree Vidyanikethan Engineering College, Tirupati <span>2015-2019</span></h2>
                        <p>I completed my under-graduation studies with major in ECE(Electronics and Communication Engineering). I have taken courses like DSA, OOPs, Computer Networks over the years and had better understanding of these subjects.</p>
                      </div>
                    </div>
    </article>*/}
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
