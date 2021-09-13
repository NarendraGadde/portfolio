import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I'm a full-stack developer and computer programmer with
                        an avid interest in Data Structures, Algorithms and
                        Optimization. As a core programmer, I love taking
                        challenges and love being part of the solution.{" "}
                      </p>
                      <p>
                        Hands-on experience in Analysis, Development and
                        Implementation. Solid Programming expertise in Java,
                        JavaScript, Object Oriented analysis/methodologies.
                        Enthusiastic team player, a fast learner with creative
                        problem solving skills, good coding and communication
                        skills. My Tech Stack includes - React/Redux,
                        Springboot/Hibernate, Java/JavaScript/Html/CSS.
                      </p>
                      <p>
                        Would be interested in getting exposure to domains
                        providing intellectually challenging work in the field
                        of computers for proving and enriching my knowledge and
                        skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites and chrome extentions
                      using JavaScript, React, HTML, CSS, Spring Boot,
                      Hibernate, SQL
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      I have good knowledge over fundamental concepts of DSA and
                      will always be enthusiastic to apply those concepts to
                      solve real world problems
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Cloud & Devops</h3>
                    <p>Add Info Related to Devops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
