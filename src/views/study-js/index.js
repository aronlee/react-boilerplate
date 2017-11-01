import { getFuncFromTxt } from './util'
import example1 from './exm/1.text'

export default class StudyJs extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      code1: ''
    }
  }

  componentWillMount() {
    getFuncFromTxt(example1).then(res => {
      this.setState({
        code1: res
      })
    })
  }

  render() {
    return (
      <div>
        <h3>1、string.replace(RegExp, function(replacement))</h3>
        <pre>{this.state.code1}</pre>
        <p></p>
      </div>
    )
  }

}