import React, { Component } from 'react'
import RotatingCude from '../../animation/rotating-cube'
import './animations.scss'

export default class Animations extends Component {

  render() {
    return (
      <div>
        <header>
          <ul className="animations-menu">
            <li></li>
          </ul>
        </header>
        <RotatingCude />
      </div>
    )
  }
}
