import React, { Component } from "react";
import "./slider.css";

class Slider extends Component {
  moveSlide = function(e) {
    // const Slider = document.querySelector(".Slider");
    // const SliderList = document.querySelector(".Slider__list");
    // let offset = Slider.offsetWidth;
    // let sliders = document.getElementsByClassName("Slider__item");
    // console.log("SliderList.style.left=", SliderList.style.left);
    // console.log('SliderList', linkStyles);
    // console.log(e.target, e.target.getBoundingClientRect().left);
    // console.log(Slider.offsetWidth);
  };

  defineOffset = function() {
    const Slider = document.querySelector(".Slider");
    const SliderList = document.querySelector(".Slider__list");
    let offset = Slider.offsetWidth;
    console.log("defineOffset()!!!!!!!!!", Slider.offsetWidth);
    return offset;
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      offset: 1,
      length: 0,
      switch: true
    };
  }

  render() {
    // console.log("this.state.count", this.state.count);
    let childrenList = this.props.children.map((child, index) => {
      // this.setState ({
      //   length: this.length+1
      // })
      console.log("bla bla");
      return (
        <li key={"Slider__item" + index} className="Slider__item">
          {child}
        </li>
      );
    });
    let controlPoints = this.props.children.map((child, index) => (
      <li
        key={"Slider__control-points-item" + index}
        className="Slider__control-points-item"
      />
    ));
    // for (let i = 0; i < childrenList.length; i++) {
    //   this.setState({
    //     length: i
    //   });
    // }
    // this.setState({
    //   length: childrenList.length
    // });
    // let leftOffset = this.defineOffset();
    return (
      <div className="Slider">
        <div
          style={{ left: (this.state.count - 1) * -this.state.offset + "px" }}
          className="Slider__list"
        >
          {childrenList}
        </div>
        {/* <div className="Slider__list">{childrenList}</div> */}

        <div className="Slider__controls">
          <div className="Slider__control-points">{controlPoints}</div>
          {this.state.count}
          <div
            className="Slider__prev"
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
                offset: this.defineOffset(),
                length: childrenList.length
              });
            }}
          >
            PREV
          </div>
          <div
            className="Slider__next"
            onClick={() => {
              if (this.state.switch) {
                this.setState({
                  count: ++this.state.count,
                  offset: this.defineOffset(),
                  length: childrenList.length
                });
              } else {
                this.setState({
                  count: --this.state.count,
                  offset: this.defineOffset(),
                  length: childrenList.length
                });
              }
              if (
                this.state.count == 1 ||
                this.state.count == this.state.length 
              ) {
                this.setState({
                  switch: !this.state.switch
                });
              }
              console.log("this.state.count=", this.state.count);
              console.log("this.state.offset=", this.state.offset);
              console.log("this.state.length=", this.state.length);
              console.log("this.state.switch=", this.state.switch);

              // console.log("Slider", document.querySelector(".Slider").offsetWidth);
            }}
          >
            NEXT
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
