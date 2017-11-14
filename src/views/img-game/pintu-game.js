import PropTypes from 'prop-types';
import IMG_URL from './img/pintu_1.jpg';
import './img-game.scss';

export default class ImageGame extends React.Component {

  static propTypes = {
    size: PropTypes.number,
    imgUrl: PropTypes.string,
    part: PropTypes.number,
  }

  static defaultProps = {
    size: 400,
    imgUrl: IMG_URL,
    part: 4,
  }

  constructor(props) {
    super(props);
    const { part } = props

    this.state = {
      step: 0
    }

    // 初始化空块的i， j值
    this.nullKey = {
      i: part - 1,
      j: part - 1,
    };

    // 初始位置数组，用于校验正确答案
    this.initPoints = new Array();
    // 每个小块展示图片位置数组，用于记录每个块展示图片的位置
    this.pointsArr = new Array();

    this.initPointsArr();
    this.shuffPointsArr();
  }

  componentDidMount() {
    const canvas = document.getElementById('mycanvas')
    const context = canvas.getContext('2d')
    const img = new Image()

    document.body.addEventListener('keyup', e => this.handleKeyUp(e, context, img), false)
    img.addEventListener('load', () => this.afterImgLoad(context, img), false)
    img.addEventListener('error', this.loadImgErr, false)

    img.width = 400
    img.height = 400
    img.src = IMG_URL
  }

  // 初始化设置位置数组
  initPointsArr() {
    const { part, size } = this.props
    const perWidth = size / part

    for (let i = 0; i < part; i++) {

      let a = [],
        b = [];

      for (let j = 0; j < part; j++) {
        if (i === part - 1 && j == part - 1) {
          a.push({ x: null, y: null })
        } else {
          a.push({ x: i * perWidth, y: j * perWidth })
        }
        b.push({ x: i * perWidth, y: j * perWidth })
      }

      this.initPoints.push(b)
      this.pointsArr.push(a)
    }
  }

  // 打乱pointsArr数组
  shuffPointsArr() {
    const { part } = this.props;

    for (let i = 0; i < part; i++) {
      let a = [];
      for (let j = 0; j < part; j++) {

        const i1 = parseInt(Math.random() * part, 10);
        const j1 = parseInt(Math.random() * part, 10);

        let temp = this.pointsArr[i][j];
        this.pointsArr[i][j] = this.pointsArr[i1][j1]
        this.pointsArr[i1][j1] = temp

        if (i1 === this.nullKey.i && j1 === this.nullKey.j) {
          this.nullKey.i = i;
          this.nullKey.j = j;
        } else if (i === this.nullKey.i && j === this.nullKey.j) {
          this.nullKey.i = i1;
          this.nullKey.j = j1;
        }
      }
    }
  }

  drawImgSlice(context, img) {
    const { size, part } = this.props
    const perWidth = size / part

    context.clearRect(0, 0, size, size);

    // 是否过关的标记
    let isSuccess = true

    for (let i = 0; i < part; i++) {
      for (let j = 0; j < part; j++) {

        const startX = this.pointsArr[i][j].x;
        const startY = this.pointsArr[i][j].y;

        if (startX !== this.initPoints[i] || startY !== this.initPoints[j]) {
          isSuccess = false;
        }

        if (startX !== null && startY !== null) {
          context.drawImage(
            img,
            startX,
            startY,
            perWidth,
            perWidth,
            i * perWidth,
            j * perWidth,
            perWidth,
            perWidth
          )
        }
      }
    }

    this.drawGrid(context)

    if (isSuccess) {
      alert('恭喜你，过关了！')
    }

  }

  drawGrid(context) {
    context.strokeStyle = '#fff'
    context.lineWidth = 1
    context.lineGap = 'square'
    context.globalAlpha = 1
    this.drawLine(context)
  }

  drawLine(context) {
    const { size, part } = this.props
    const perWidth = size / part

    context.beginPath();
    for (let i = 1; i < part; i++) {
      context.moveTo(0, i * perWidth);
      context.lineTo(size, i * perWidth);
      context.moveTo(i * perWidth, 0);
      context.lineTo(i * perWidth, size);
    }
    context.stroke();
  }

  afterImgLoad(context, img) {
    this.drawImgSlice(context, img)
  }

  loadImgErr() {
    const err = new Error(`load img url: ${this.props.imgUrl} error !`)
    console.error(err.stack)
  }

  handleKeyUp(e, context, img) {
    // 阻止我按键盘的时候 网页移动
    e.preventDefault();

    if (e.key === 'ArrowRight') {
      this.pressRight(context, img)
    }

    if (e.key === 'ArrowDown') {
      this.pressDown(context, img)
    }

    if (e.key === 'ArrowLeft') {
      this.pressLeft(context, img)
    }

    if (e.key === 'ArrowUp') {
      this.pressUp(context, img)
    }
  }

  pressRight(context, img) {
    const { i, j } = this.nullKey
    if (i !== 0) {
      // 互换
      let temp = this.pointsArr[i][j];
      this.pointsArr[i][j] = this.pointsArr[i - 1][j];
      this.pointsArr[i - 1][j] = temp;
      // 空的i - 1
      this.nullKey.i = i - 1;

      // 加一步
      this.setState({
        step: this.state.step + 1
      })
    }
    this.drawImgSlice(context, img)
    return false
  }

  pressDown(context, img) {
    const { i, j } = this.nullKey
    if (j !== 0) {
      // 互换
      let temp = this.pointsArr[i][j];
      this.pointsArr[i][j] = this.pointsArr[i][j - 1];
      this.pointsArr[i][j - 1] = temp;
      // 空的j - 1
      this.nullKey.j = j - 1;

      // 加一步
      this.setState({
        step: this.state.step + 1
      })
    }
    this.drawImgSlice(context, img)
    return false
  }

  pressLeft(context, img) {
    const { part } = this.props
    const { i, j } = this.nullKey
    if (i !== part - 1) {
      // 互换
      let temp = this.pointsArr[i][j];
      this.pointsArr[i][j] = this.pointsArr[i + 1][j];
      this.pointsArr[i + 1][j] = temp;
      // 空的i + 1
      this.nullKey.i = i + 1;

      // 加一步
      this.setState({
        step: this.state.step + 1
      })
    }
    this.drawImgSlice(context, img)
    return false
  }

  pressUp(context, img) {
    const { part } = this.props
    const { i, j } = this.nullKey
    if (j !== part - 1) {
      // 互换
      let temp = this.pointsArr[i][j];
      this.pointsArr[i][j] = this.pointsArr[i][j + 1];
      this.pointsArr[i][j + 1] = temp;
      // 空的j + 1
      this.nullKey.j = j + 1;

      // 加一步
      this.setState({
        step: this.state.step + 1
      })
    }
    this.drawImgSlice(context, img)
    return false
  }

  render() {
    const { size } = this.props
    const { step } = this.state
    return (
      <div>
        <div className="img-game-scorecard">
          <div>
            <span>步数：</span>
            <span>{step}</span>
          </div>
        </div>
        <div className="img-game-canvas-wrap">
          <canvas
            id="mycanvas"
            className="img-game-canvas"
            width={size}
            height={size}
          ></canvas>
        </div>
      </div>
    )
  }
}