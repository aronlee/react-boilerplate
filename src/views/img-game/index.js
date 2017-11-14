import PintuGame from './pintu-game'

export default class ImageGame extends React.Component {

  componentDidMount() {
    // init()
  }

  render() {
    return (
      <div>
        <h2>拼图游戏</h2>
        <PintuGame />
      </div>
    )
  }
}