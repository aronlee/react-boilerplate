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
    // console.log(this.state.listComponent)
    // list.then((c) => this.setState({ listComponent: c }))
  }

  render() {
    return (
      <HashRouter>
        <div className="main">
          <div className="main-left">
            <Link className="main-left-link" to="/list">list</Link>
            <Link className="main-left-link" to="/detail">detail</Link>
            <Link className="main-left-link" to="/ts">TypeScript</Link>
            <Link className="main-left-link" to="/study">study</Link>
            {/* <Link className="main-left-link" to="/abattoir-game">abattoir-game</Link> */}
          </div>
          <div className="main-right">
            <Route path="/list" component={getComponent(() => import(/* webpackChunkName: "list" */'./views/list'))} />
            <Route path="/detail" component={getComponent(() => import(/* webpackChunkName: "detail" */'./views/detail'))} />
            <Route path="/ts" component={getComponent(() => import(/* webpackChunkName: "ts" */'./views/ts/index.ts'))} />
            <Route path="/study" component={getComponent(() => import(/* webpackChunkName: "study" */'./views/study-js'))} />
            {/* <Route path="/abattoir-game" component={getComponent(() => import(/* webpackChunkName: "game" */'./views/abattoir-game'))} /> */}
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
        if(err)console.err(err)
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