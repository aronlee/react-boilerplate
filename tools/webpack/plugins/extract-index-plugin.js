
export default class ExtractIndexPlugin {

  constructor(opts) {
    this.options = opts
  }

  apply(compiler) {
    compiler.plugin('done', () => {
      console.log(this.options)
      console.log('my plugin apply done')
    })
  }
}