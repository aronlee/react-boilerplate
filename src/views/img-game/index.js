import React, { Component } from 'react'
import PintuGame from './pintu-game'

export default class ImageGame extends Component {

  componentDidMount() {
    // init()
  }

  render() {
    return (
      <div>
        <h2>拼图游戏</h2>
        <PintuGame />
      </div>
    )
  }
}
