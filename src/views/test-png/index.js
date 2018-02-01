import React, { Component } from 'react'
import './test-png.scss'
import png1 from './img/v1.png'
import png2 from './img/v2.png'

export default class TestPng extends Component {

  constructor(props) {
    super(props)
    this.state = {
      png1,
      png2,
    }
  }

  render() {
    return (
      <div>
        <div className="test test1">
          <div className="test-inner inner1">
            <img src={this.state.png1} alt=""/>
          </div>
          <p></p>
        </div>
        <div className="test test1">
          <div className="test-inner inner2">
            <img src={this.state.png2} alt=""/>
          </div>
          <p></p>
        </div>
      </div>
    )
  }

}
