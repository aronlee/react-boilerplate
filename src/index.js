import {
  // BrowserRouter,
  HashRouter,
  Link,
  Route,
} from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { getComponent } from './utils'

import './index.scss'

export default class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listComponent: null,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <HashRouter>
        <div className="main">
          <div className="main-left">
            <Link className="main-left-link" to="/study">study</Link>
            <Link className="main-left-link" to="/sort">sort</Link>
            <Link className="main-left-link" to="/leet-code">leet code</Link>
            <Link className="main-left-link" to="/img-game">image game</Link>
            <Link className="main-left-link" to="/animations">animations</Link>
            {/* <Link className="main-left-link" to="/abattoir-game">abattoir-game</Link> */}
          </div>
          <div className="main-right">
            <Route path="/study" component={getComponent(() => import(/* webpackChunkName: "study" */'./views/study-js'))} />
            <Route path="/sort" component={getComponent(() => import(/* webpackChunkName: "study" */'./views/sort'))} />
            <Route path="/abattoir-game" component={getComponent(() => import(/* webpackChunkName: "game" */'./views/abattoir-game'))} />
            <Route path="/img-game" component={getComponent(() => import(/* webpackChunkName: "img-game" */'./views/img-game'))} />
            <Route path="/animations" component={getComponent(() => import(/* webpackChunkName: "animations" */'./views/animations'))} />
          </div>
        </div>
      </HashRouter>
    )
  }

}

const container = document.getElementById('app')

ReactDOM.render(<MainPage />, container)
