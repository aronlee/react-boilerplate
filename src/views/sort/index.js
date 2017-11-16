import { error } from "util";
import bubSort from '../../algorithm/sort/bub'
import selSort from '../../algorithm/sort/sel'
import insSort from '../../algorithm/sort/ins'
import mergeSort from '../../algorithm/sort/merge'
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
    // 冒泡排序
    // let arr = bubSort(temp)
    // 选择排序
    // let arr = selSort(temp)
    // 插入排序
    // let arr = insSort(temp)
    // 归并排序
    let arr = mergeSort(temp)

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