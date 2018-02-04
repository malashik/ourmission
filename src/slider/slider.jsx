import React, { Component } from "react";
import "./slider.css";

class Slider extends Component {
  moveSlide = function(e) {
    const Slider = document.querySelector(".Slider");
    const SliderList = document.querySelector(".Slider__list");
    let offset = Slider.offsetWidth;
    let sliders = document.getElementsByClassName("Slider__item");
    
    // console.log('SliderList.style.left=', SliderList.style);
    // console.log('SliderList', linkStyles);

    // console.log(e.target, e.target.getBoundingClientRect().left);
    console.log(Slider.offsetWidth);
  };
  render() {
    let styles = {left:0}
    console.log(styles.left);
    let childrenList = this.props.children.map((child, index) => (
      <li key={"Slider__item" + index } className="Slider__item">
        {child}
      </li>
    ));
    let controlPoints = this.props.children.map((child, index) => (
      <li key={"Slider__control-points-item" + index}className="Slider__control-points-item" />
    ));
    return (
      <div onClick={this.moveSlide} className="Slider">
        <ul style={styles} className="Slider__list">{childrenList}</ul>
        <div className="Slider__controls">
          <ul className="Slider__control-points">{controlPoints}</ul>
          <div className="Slider__prev">PREV</div>
          <div className="Slider__next">NEXT</div>
        </div>
      </div>
    );
  }
}

export default Slider;
