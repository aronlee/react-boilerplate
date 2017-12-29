import React, { Component } from 'react'

export default class AbattoirGame extends Component {

  constructor(props) {
    super(props)
    this.state = {
      msgArr: [],
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="game-massage">
          <p></p>
        </div>
      </div>
    )
  }

}
