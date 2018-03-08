import React, { Component } from 'react'
import './markdown.scss'

export default class Sort extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="markdown">
        <div className="editor">
          <textarea className="markdown-left markdown-textarea"/>
          <div className="markdown-right"></div>
        </div>
      </div>
    )
  }

}
