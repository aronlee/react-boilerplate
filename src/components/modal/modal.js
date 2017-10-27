import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import './modal.scss'

export default class Modal extends Component {

  static propTypes = {
    // 标题
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    // class前缀
    prefix: PropTypes.string,
    // 内容(content或者直接children，有content则会覆盖children)
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    // 点击确定回调 参数为关闭函数，返回 promise 时 resolve 后自动关闭
    onOk: PropTypes.func,
    // 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭
    onCancel: PropTypes.func,
    // 宽度
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    // 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
    footer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    // 确认按钮文字
    okText: PropTypes.string,
    // 取消按钮文字
    cancelText: PropTypes.string,
    // 点击蒙层是否允许关闭
    maskClosable: PropTypes.bool,
    // 可用于设置浮层的样式，调整浮层位置等
    style: PropTypes.object,
    // 对话框外层容器的类名
    wrapClassName: PropTypes.string,
    // 是否显示mask
    showMask: PropTypes.bool
  }

  static defaultProps = {
    // 标题
    title: '',
    // class前缀
    prefix: 'fs',
    // 内容
    content: '',
    // 点击确定回调 参数为关闭函数，返回 promise 时 resolve 后自动关闭
    onOk: () => {},
    // 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭
    onCancel: () => {},
    // 宽度
    width: 520,
    // 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
    footer: 'default',
    // 确认按钮文字
    okText: '确定',
    // 取消按钮文字
    cancelText: '取消',
    // 点击蒙层是否允许关闭
    maskClosable: true,
    // 可用于设置浮层的样式，调整浮层位置等
    style: {},
    // 对话框外层容器的类名
    wrapClassName: '',
    // 是否显示遮罩
    showMask: true
  }

  constructor(props) {
    super(props)
    this.state = {
      canceling: false,
      confirming: false,
      otherStyle: {}
    }
  }

  componentDidMount() {
    this.getStyle()
    $(window).resize(this.resize)
  }

  componentWillUnmount() {
    $(window).unbind('resize', this.resize)
  }

  // 关闭
  handleClose = (e) => {
    const { onCancel } = this.props
    onCancel && onCancel()
  }

  // 确定
  handleOk = (e) => {
    const { onOk } = this.props
    onOk && onOk()
  }

  resize = (e) => {
    let { otherStyle } = this.state
    const ref = this.refs['modal']
    if (ref) {
      const elem = $(ref)
      let top = ($(window).height() - elem.height()) / 3
      otherStyle.top = Math.max(0, top);
    }
    this.setState({
      otherStyle
    })
  }

  getStyle() {
    let { width } = this.props
    let otherStyle = {}
    const ref = this.refs['modal']
    if (width) {
      otherStyle.width = width + 'px'
      otherStyle.marginLeft = - (width / 2) + 'px'
    }
    if (ref) {
      const elem = $(ref)
      let top = ($(window).height() - elem.height()) / 3
      otherStyle.top = Math.max(0, top);
    }
    this.setState({
      otherStyle
    })
  }

  renderMask() {
    const { prefix } = this.props
    const props = this.props.maskClosable ? {
      onClick: this.handleClose
    } : {}
    return this.props.showMask ? <div className={`${prefix}-modal-mask`} {...props}></div> : ''
  }

  renderFooter() {
    const { prefix, footer, okText, cancelText } = this.props
    if (footer) {
      if (footer === 'default') {
        return (
          <div className={`${prefix}-modal-footer`}>
            <button className={`${prefix}-modal-btn cancel`} onClick={this.handleClose}>{cancelText}</button>
            <button className={`${prefix}-modal-btn ok`} onClick={this.handleOk}>{okText}</button>
          </div>
        )
      } else {
        return footer
      }
    } else {
      return ''
    }
  }

  render() {
    const { prefix, title, footer, children, content, wrapClassName, style } = this.props
    const { otherStyle } = this.state
    return (
      <div className={classnames(`${prefix}-modal-wrap`, wrapClassName)}>
        {this.renderMask()}
        <div ref="modal" className={`${prefix}-modal`} style={Object.assign({}, style, otherStyle)}>
          <i className="iconfont if-delete" onClick={this.handleClose}></i>
          {title ? <div className={`${prefix}-modal-title`}>{title}</div> : ''}
          <div className={`${prefix}-modal-content`}>
            {content || children}
          </div>
          {this.renderFooter()}
        </div>
      </div>
    )
  }
}