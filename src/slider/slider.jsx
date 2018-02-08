import React, { Component } from "react";
import "./slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      offset: 0,
      length: 0,
      directionRight: true,
      setTimeoutSwitch: true
    };
  }

  defineInitialState() {
    const Slider = document.querySelector(".Slider");
    console.log("defineOffset()!!!", Slider.offsetWidth);
    let Offset = Slider.offsetWidth;
    this.setState({
      offset: Offset,
      length: this.getChildrenList().length
    });
  }
  defineOffset() {
    const Slider = document.querySelector(".Slider");
    const Controls = document.querySelector(".Slider__control-points");

    let offset = Slider.offsetWidth;
    console.log("defineOffset()!!!", Slider.offsetWidth);
    return offset;
  }

  getChildrenList() {
    console.log("getChildrenList()");

    return this.props.children.map((child, index) => (
      <li
        key={"Slider__item" + index}
        id={"Slider__item" + index}
        className="Slider__item"
      >
        {child}
      </li>
    ));
  }

  getControlList() {
    console.log("getControlList()");

    return this.props.children.map((child, index) => (
      <li
        key={"Slider__control-points-item" + index}
        id={"Slider__control-points-item" + index}
        className="Slider__control-points-item"
      />
    ));
  }

  componentDidMount() {
    this.defineInitialState();

    setInterval(this.moveSlide.bind(this), 1000);
    // clearTimeout(setInterval(this.moveSlide.bind(this), 1000));

    // setInterval(() => {
    //   const that = this;
    //   console.log('click');
    //   if (this.state.setTimeoutSwitch) {
    //     this.moveSlide.bind(that);
    //   }

    // }, 1000);
  }

  moveSlide() {
    if (this.state.setTimeoutSwitch) {
      if (this.state.directionRight) {
        this.setState({
          count: ++this.state.count,
          offset: this.defineOffset(),
          length: this.getChildrenList().length
        });
      } else {
        this.setState({
          count: --this.state.count,
          offset: this.defineOffset(),
          length: this.getChildrenList().length
        });
      }
      if (this.state.count === 1 || this.state.count > this.state.length - 1) {
        this.setState({
          directionRight: !this.state.directionRight
        });
      }
    }
  }
  controlMove = function(e) {
    let val = e.target.id.slice(-1);
    // console.log(e.target.tagName === 'LI');
    if (e.target.tagName === "LI") {
      this.setState({
        count: +val + 1,
        setTimeoutSwitch: false
      });
    }
  };

  render() {
    return (
      <div className="Slider">
        <div
          style={{ left: (this.state.count - 1) * -this.state.offset + "px" }}
          className="Slider__list"
        >
          {this.getChildrenList()}
        </div>

        <div className="Slider__controls">
          <div
            className="Slider__control-points"
            onClick={e => this.controlMove(e)}
          >
            {this.getControlList()}
          </div>
          {this.state.count}
          <div className="Slider__next" onClick={() => this.moveSlide()}>
            NEXT
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
