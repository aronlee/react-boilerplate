import { Component, PropTypes } from 'react'
import Modal from './modal.js'

export default class ModalWrap extends Component {

  static propTypes = {
    // 是否显示
    visible: PropTypes.bool,
    // 指定 modal 挂载的 HTML 节点
    getContainer: PropTypes.func,
  }

  static defaultProps = {
    visible: false,
    getContainer: null
  }

  constructor(props) {
    super(props)
  }

  getContainer() {
    if (this._container) {
      return this._container
    } else {
      const { getContainer } = this.props
      let container
      if (getContainer) {
        container = getContainer()
      } else {
        container = document.createElement('div')
        document.body.appendChild(container)
      }
      this._container = container
      return container
    }
  }

  componentDidMount() {
    this.renderComponent()
  }

  componentDidUpdate() {
    this.renderComponent()
  }

  shouldComponentUpdate({ visible }) {
    return !!(this.props.visible || visible)
  }

  componentWillUnmount() {
    if (this.props.visible) {
      this.renderComponent()
    } else {
      this.removeContainer()
    }
  }

  getComponent() {
    return (
      <Modal {...this.props}/>
    )
  }

  renderComponent() {
    const { visible } = this.props
    if (visible) {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        this.getComponent(),
        this.getContainer()
      )
    } else {
      this.removeContainer()
    }
  }

  removeContainer = () => {
    if (this._container) {
      const container = this._container
      ReactDOM.unmountComponentAtNode(container)
      container.parentNode.removeChild(container)
      this._container = null
    }
  }

  render() {
    return null
  }
}