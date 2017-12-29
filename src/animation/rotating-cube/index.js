import React, { Component } from 'react'
import classnames from 'classnames'
import './rotating-cube.scss'

export default class RotatingCube extends Component {

  static types = ['cube', 'ring']

  constructor(props) {
    super(props)
    this.state = {
      type: 0,
    }
  }

  changeType() {
    const { type } = this.state
    this.setState({
      type: type === 0 ? 1 : 0,
    })
  }

  render() {
    const { type } = this.state
    return (
      <div className={classnames('rotating-cube', RotatingCube.types[type])}>
        <button onClick={this.changeType.bind(this)}>change type</button>
        <div className="rotating-cube-inner">
          <div className="box">
            <div className="box-inner">
              <div className="box-item item1">1</div>
              <div className="box-item item1">2</div>
              <div className="box-item item1">3</div>
              <div className="box-item item1">4</div>
              <div className="box-item item1">5</div>
              <div className="box-item item1">6</div>
              <div className="box-item item2">7</div>
              <div className="box-item item2">8</div>
              <div className="box-item item2">9</div>
              <div className="box-item item2">10</div>
              <div className="box-item item2">11</div>
              <div className="box-item item2">12</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
