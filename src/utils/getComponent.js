const getComponent = (cb) => (
  class AsyncGetJs extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        Component: null
      }
    }
    componentDidMount() {
      cb().then(component => {
        this.setState({
          Component: component
        })
      }).catch(err => {
        if(err)console.error(err)
      })
    }
    render() {
      const { Component } = this.state
      return Component ? <Component /> : null
    }
  }
)

export default getComponent
