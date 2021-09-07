import React, { Component } from 'react';
import { profileLinks } from '../utils/constants';

export default class Sidebar extends Component {
  render() {
    const {facebook, instagram, linkedin, twitter, github} = profileLinks;
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img animated pulse" style={{ backgroundImage: 'url(images/Narendra.jpg)' }} />
              <h1 id="colorlib-logo" className="animated headShake"><a href="index.html">Narendra Gadde</a></h1>
              <span className="email"><i className="icon-mail"></i><a href="mailto:narendragadde18@gmail.com" target="_top">narendragadde18@gmail.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#photography" data-nav-section="photography">Photography</a></li>
                  <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                  <li><a href="#contactme" data-nav-section="contactme">Contact Me</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu" className="animated flipInX contact-icons">
              <ul>
                <li><a href={facebook} target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href={twitter} target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href={instagram} target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href={github} target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
