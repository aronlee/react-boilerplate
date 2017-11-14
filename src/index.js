import {
  // BrowserRouter, 
  HashRouter,
  Link,
  Route
} from 'react-router-dom'

import './index.scss'

export default class MainPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listComponent: null
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <HashRouter>
        <div className="main">
          <div className="main-left">
            <Link className="main-left-link" to="/list">list</Link>
            <Link className="main-left-link" to="/detail">detail</Link>
            <Link className="main-left-link" to="/study">study</Link>
            <Link className="main-left-link" to="/img-game">image game</Link>
            {/* <Link className="main-left-link" to="/abattoir-game">abattoir-game</Link> */}
          </div>
          <div className="main-right">
            <Route path="/list" component={getComponent(() => import(/* webpackChunkName: "list" */'./views/list'))} />
            <Route path="/detail" component={getComponent(() => import(/* webpackChunkName: "detail" */'./views/detail'))} />
            <Route path="/study" component={getComponent(() => import(/* webpackChunkName: "study" */'./views/study-js'))} />
            <Route path="/abattoir-game" component={getComponent(() => import(/* webpackChunkName: "game" */'./views/abattoir-game'))} />
            <Route path="/img-game" component={getComponent(() => import(/* webpackChunkName: "img-game" */'./views/img-game'))} />
          </div>
        </div>
      </HashRouter>
    )
  }

}

const getComponent = (cb) => (
  class AsyncGetJs extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        Component: null
      }
    }
    componentDidMount() {
      cb().then(component => {
        this.setState({
          Component: component
        })
      }).catch(err => {
        if(err)console.error(err)
      })
    }
    render() {
      const { Component } = this.state
      return Component ? <Component /> : null
    }
  }
)


const container = document.getElementById('app')

ReactDOM.render(<MainPage />, container)