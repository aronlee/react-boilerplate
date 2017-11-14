import { error } from "util";
import bubSort from './bub'
import selSort from './sel'
import './sort.scss'

export default class Sort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      originalArr: this.getRomdomArr(),
      processedArr: []
    }
  }

  componentDidMount() {
    const { originalArr } = this.state
    let temp = Object.assign([], originalArr)
    // let arr = bubSort(temp)
    // 选择排序
    let arr = selSort(temp)

    this.setState({
      processedArr: arr
    })
  }

  // 生成随机的个数为len， 0 - max的随机数
  // max 不能小于len
  getRomdomArr(len = 12, max = 50) {
    if (len > max) {
      throw new error('max can\'t be bigger than len!')
    }
    let arr = new Array(len)
    for (let i = 0; i < len; i++) {
      arr[i] = Math.ceil(Math.random() * max)
    }
    return arr
  }

  renderArr(arr = []) {
    return `[ ${arr.join(', ')} ]`
  }

  render() {
    const { originalArr, processedArr } = this.state

    return (
      <div className="sort">
        <div className="sort-item">
          <div className="p sort-original">原数组：{this.renderArr(originalArr)}</div>
          <div className="p sort-processed">排序后数组：{this.renderArr(processedArr)}</div>
        </div>
      </div>
    )
  }

}