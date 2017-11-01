module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 5%', 'last 2 versions', 'IE >= 8']
    })
  ],
  sourceMap: true
}