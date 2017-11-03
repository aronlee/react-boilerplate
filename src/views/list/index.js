export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
      ]
    }
  }

  onItemClick(a, b, c) {
    console.log(this)
  }

  render() {
    const self = this
    return (
      <ul>
        {
          this.state.list.map(function(item, index) {
            return (
              <li key={index} onClick={self.onItemClick}>{item.id}</li>
            )
          }) 
        }
      </ul>
    )
  }
}