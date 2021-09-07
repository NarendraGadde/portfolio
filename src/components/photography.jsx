import React, { Component } from "react";
import { photographyData } from "../utils/constants";

export default class Photography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 4,
    };
  }
  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 3 });
  };
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="photography">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">Recent Clicks</h2>
              </div>
            </div>
            <div className="row">
              {photographyData &&
                photographyData.map(
                  (data) =>
                    data.id < this.state.counter && (
                      <div
                        key={data.id}
                        className="col-md-4"
                        // data-animate-effect={data.animation}
                      >
                        <div
                          className="project"
                          style={{ backgroundImage: `url(${data.imageUrl})` }}
                        >
                          <div className="desc">
                            <div className="con">
                              <h3>
                                <a href="work.html">Click {data.id}</a>
                              </h3>
                              <span>{data.name}</span>
                              <p className="icon">
                                <span>
                                  <a href="https://www.instagram.com/illustrator.pk">
                                    <i className="icon-share3" />
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="icon-eye" /> 100
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="icon-heart" /> 49
                                  </a>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
            {photographyData.length > this.state.counter && (
              <div className="row">
                <div className="col-md-12 animate-box">
                  <p>
                    <a
                      className="btn btn-primary btn-lg btn-load-more"
                      onClick={this.increaseCounter}
                    >
                      Load more <i className="icon-reload" />
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}
