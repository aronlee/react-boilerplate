import React, { Component } from 'react'
import { getFuncFromTxt } from './util'
import './study-js.scss'

import example1 from './exm/1.text'
import example2 from './exm/2.text'
import example2Img from './img/reduce-img.png'
import example3 from './exm/3.text'

export default class StudyJs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      code1: '',
      code2: '',
      code3: '',
    }
  }

  componentWillMount() {
    this.getCodeToState()
  }

  getCodeToState() {
    [
      example1,
      example2,
      example3,
    ].forEach(function(url, index){
      getFuncFromTxt(url).then(res => {
        this.setState({
          [`code${index + 1}`]: res,
        })
      })
    }, this)
  }

  render() {
    const { code1, code2, code3 } = this.state

    return (
      <div>
        <div className="study-example-item">
          <h2>1、string.replace(RegExp, function(replacement))</h2>
          <pre className="study-example-code">{code1}</pre>
          <p></p>
        </div>
        <div  className="study-example-item">
          <h2>{'2、Array.reduce(function(pre, next){})'}</h2>
          <pre className="study-example-code">{code2}</pre>
          <p>
            <img className="study-example-img-1" src={example2Img} alt=""/>
          </p>
        </div>
        <div  className="study-example-item">
          <h2>{'3、JSON.stringify(value[, replacer [, space]])'}</h2>
          <pre className="study-example-code">{code3}</pre>
          <dl className="study-example-dl">
            <dt>value</dt>
            <dd>将要序列化成 一个JSON 字符串的值。</dd>
            <dt>replacer
              <span className="study-example-isselected">可选</span>
            </dt>
            <dd>如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中。</dd>
            <dt>space
              <span className="study-example-isselected">可选</span>
            </dt>
            <dd>指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；如果该参数没有提供（或者为null）将没有空格</dd>
          </dl>
        </div>
      </div>
    )
  }

}
