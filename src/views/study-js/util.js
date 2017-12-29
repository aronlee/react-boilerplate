
import $ from 'jquery'

function getFuncInnerStr(func) {
  const reFilterFunc = /^function[\s]*\([\s]*\)[\s]*\{([\d\D]*)\}$/
  if (typeof func !== 'function') return ''
  const matchStr = reFilterFunc.exec(func.toString())[1]
  if (!matchStr) return
  return String.prototype.trim.call(matchStr)
}

function getFuncFromTxt(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      dataType: 'text',
    }).done(res => {
      resolve(res)
    }).fail(err => {
      reject(err)
    })
  })
}

export default {
  getFuncInnerStr,
  getFuncFromTxt,
}
