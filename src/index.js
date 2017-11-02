import { 
  // BrowserRouter, 
  HashRouter,
  Link,
  Route 
} from 'react-router-dom'
import List from './views/list'
import Detail from './views/detail'
import StudyJs from './views/study-js'
import './index.scss'

export default class MainPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HashRouter>
        <div className="main">
          <div className="main-left">
            <Link className="main-left-link" to="/list">list</Link>
            <Link className="main-left-link" to="/detail">detail</Link>
            <Link className="main-left-link" to="/study">study</Link>
            <Link className="main-left-link" to="/game">study</Link>
          </div>
          <div className="main-right">
            <Route path="/list" component={List} />
            <Route path="/detail" component={Detail} />
            <Route path="/study" component={StudyJs} />
            <Route path="/study" component={StudyJs} />
          </div>
        </div>
      </HashRouter>
    )
  }
  
}

const container = document.getElementById('app')

ReactDOM.render(<MainPage />, container)