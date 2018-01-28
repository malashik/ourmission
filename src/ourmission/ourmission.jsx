import React, { Component } from 'react';
import './ourmission.css';

class Ourmission extends Component {
  render() {
    return (
      <a className="Ourmission">
        <div className="Ourmission__info">
          <h3 className="Ourmission__title">{this.props.title}</h3>
          <p className="Ourmission__text">{this.props.text}</p>
        </div>
      </a>
    );
  }
}

export default Ourmission;