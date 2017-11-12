const IMG_URL = require('./img/pintu_1.jpg')

function init() {
  const canvas = document.getElementById('mycanvas')
  const context = canvas.getContext('2d')
  const img = new Image()
  canvas.width = 400
  canvas.height = 400
  img.addEventListener('load', () => afterImgLoad(context, img), false)
  img.addEventListener('error', loadImgErr, false)
  img.src = IMG_URL
}

function drawImgSlice(context, img, x, y, w, h) {

}

function drawGrid(context) {
  context.strokeStyle = '#000000'
  context.lineWidth = 2
  context.lineGap = 'square'
  drawLine(context, 0, 100, 400, 100)


}

function drawLine(context, begin, end) {
  console.log(2222)
  context.moveTo(begin[0], begin[1])
  context.lineTo(end[0], end[1])
}

function afterImgLoad(context, img) {
  context.drawImage(img, 0, 0, 400, 400)
  drawGrid(context)
}

function loadImgErr() {
  const err = new Error(`load img url: ${IMG_URL} error !`)
  console.error(err.stack)
}


export default class ImageGame extends React.Component {
    
  componentDidMount() {
    init()
  }

  render() {
    return (
      <div>
        <h2>拼图游戏</h2>
        <canvas id="mycanvas"></canvas>
      </div>
    )
  }
}