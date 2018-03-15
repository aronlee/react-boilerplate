import React, { Component } from 'react'
import marked from 'marked'
import './markdown.scss'

export default class Sort extends Component {

  constructor(props) {
    super(props)
    this.state = {
      iptVal: '',
      htmlStr: '',
    }
  }

  changeIptToHtml() {
    const { iptVal } = this.state
    marked(iptVal)
  }

  render(){
    const { htmlStr } = this.state
    return (
      <div className="markdown">
        <div className="editor">
          <textarea className="markdown-left markdown-textarea" onInput={e => {this.setState({htmlStr: marked(e.target.value)})}}/>
          <div className="markdown-right" dangerouslySetInnerHTML={{__html: htmlStr}}></div>
        </div>
      </div>
    )
  }

}
