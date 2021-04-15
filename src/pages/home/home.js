import React, { Component } from "react";

import Sidebar from "../../components/sidebar/sidebar";
import About from "../../components/home/about";
import Experience from "../../components/home/experience";
import Education from "../../components/home/education";
import Skills from "../../components/home/skills";
import Interest from "../../components/home/interest";
import Awards from "../../components/home/awards";

class Main extends Component {

  state = {
    common: {
      height: `${document.body.clientHeight}px`,
      padding: "50px"
    },
  }

  render() {
    return (
      <div id="mainPage" className="container fab">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 overflow-y-scroll">
            <About common={this.state.common} />
            <Experience common={this.state.common} />
            <Education common={this.state.common} />
            <Skills common={this.state.common} />
            <Interest common={this.state.common} />
            <Awards common={this.state.common} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;