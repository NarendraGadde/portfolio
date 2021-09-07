import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Photography from "./components/photography";
import Blog from "./components/blog";
import ContactMe from "./components/contactme";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About />
            <Timeline />
            <Photography />
            <Blog />
            <ContactMe />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
