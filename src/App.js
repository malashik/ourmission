import React, { Component } from "react";
import "./App.css";
import Ourmission from "./ourmission/ourmission";
import Slider from "./slider/slider";

class App extends Component {
  render() {
    return (
      <div>
        <Slider>
          <Ourmission
            title="1"
            text="Our mission is to become the most respected nearshore software delivery partner in Europe, championing quality over revenue, recruiting and retaining the 'best of the best', and by doing software development...properly. "
          />
          <Ourmission
            title="2"
            text="Our mission is to become the most respected nearshore software delivery partner in Europe, championing quality over revenue, recruiting and retaining the 'best of the best', and by doing software development...properly. "
          />
          <Ourmission
            title="3"
            text="Our mission is to become the most respected nearshore software delivery partner in Europe, championing quality over revenue, recruiting and retaining the 'best of the best', and by doing software development...properly. "
          />
        </Slider>
      </div>
    );
  }
}

export default App;
