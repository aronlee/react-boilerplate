import { BrowserRouter, Route } from 'react-router-dom'
import List from './views/list'
import Detail from './views/detail'

export default class MainRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/list" component={List} />
          <Route path="/detail" component={Detail} />
        </div>
      </BrowserRouter>
    )
  }
}