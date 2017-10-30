import MainRouter from './router'

export default class MainPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>111111</div>
        <MainRouter />
      </div>
    )
  }
  
}

const container = document.getElementById('app')

ReactDOM.render(<MainPage />, container)