import fs from 'fs-extra'
import XLSX from 'xlsx'
import parseComments from 'parse-comments'
import hostConf from '../../urls-config/host-conf.js'

const prefix = `${process.cwd()}/urls-config`
const headers = ['页面名称', '字段名', '路径', '参数形式', '参数说明']
const keys = ['name', 'field', 'url', 'paramsTypes', 'desc']
const opts = [
  {
    field: 'landlord',
    file: `${prefix}/urls-landlord.js`,
    sheetName: '房东APP前端页面url参数说明',
  },
  {
    field: 'renter',
    file: `${prefix}/urls-renter.js`,
    sheetName: '租客APP前端页面url参数说明',
  }
]
const h5File = `${prefix}/urls-h5.js`


function parseUrl(url) {
  const re = /^(\/*[a-zA-Z\d\-_]+(\/[a-zA-Z\d\-_]+)*)((\/:[a-zA-Z\d\-_]+)*)(\?([a-zA-Z\d\-_]+=[a-zA-Z\d\-_]*&)*([a-zA-Z\d\-_]+=[a-zA-Z\d\-_]*)*)?$/
  const match = re.exec(url)
  if (!url) return {}
  if (match) {
    const pathPart = match[1] || ''
    const paramsPart = match[3] || ''
    const queryPart = match[5] || ''
    return {
      path: pathPart,
      params: paramsPart.split('/:').filter(item => !!item),
      queries: queryPart.replace(/^\?/, '').split('&').map(item => item.split('=')[0]).filter(item => !!item),
    }
  } else {
    throw new Error(`url: '${url}' is not right url, the normative url should be conform to '${re.toString()}'`)
  }
}

function parseSentence(code) {
  const re = /^(\s*[a-zA-Z\d_]+)\s*\:\s*('([^']*)')|("([^"]*)")\s*\,*\s*$/
  let obj = Object.create(null)

  try {
    const result = re.exec(code)
    if (result) {
      obj.field = result[1]
      let pathAll = result[3] || result[5]
      let parseAfter = parseUrl(String.trim(pathAll))
      obj.paramsTypes = parseAfter.params.map(param => `${param}: params`).concat(parseAfter.queries.map(query => `${query}: query`)).join('; ')
      obj.url = pathAll
      obj.path = parseAfter.path
      obj.params = parseAfter.params
      obj.queries = parseAfter.queries
    }
  } catch (error) {
    throw error
  }
  return obj
}

function parseEachConfig(url) {
  const input = fs.readFileSync(url, 'utf8')
  const comments = parseComments(input)
  return comments.map(comment => {
    const code = comment.comment.code
    const obj = parseSentence(code)
    return Object.assign({
      name: comment.name,
      desc: typeof comment.desc === 'string' ? comment.desc : '',
      host: comment.host || '',
    }, obj)
  })
}

function getPath(obj, env, platform) {
  return `${hostConf[env][obj.host] || hostConf[env][platform] || ''}${obj.path}`
}

function createJsonFile(name, env, platform, conf) {
  // return fs.writeJson(name, Object.keys(conf).reduce((t, c) => (t[c] = conf[c].reduce((total, cur) => (total[cur.field] = getPath(cur, env, c), total), {}), t), {}))
  // return fs.writeJson(name, Object.keys(conf).reduce((t, c) => (t[c] = conf[c].reduce((total, cur) => (total[cur.field] = getPath(cur, env, c), total), {}), t), {}))
  return fs.writeJson(name, conf.reduce((total, cur) => (total[cur.field] = getPath(cur, env, platform), total), {}))
}

function filterItem(item) {
  let result = {}
  headers.forEach((t, i) => {
    result[t] = item[keys[i]]
  })
  return result
}

function filterData(confs) {
  return confs.reduce((total, cur) => {
    total = total.map(filterItem)
    cur = cur.map(filterItem)
    return total.concat([{}, ...cur])
  })
}

const createUrlMap = function () {
  const h5conf = parseEachConfig(h5File)
  let workBook = {
    SheetNames: [],
    Sheets: {},
  }
  opts.forEach(opt => {
    const conf = parseEachConfig(opt.file)
    const confPlatform = conf.concat(h5conf)
    const jsonData = filterData([conf, h5conf])
    const data = XLSX.utils.json_to_sheet(jsonData)
    workBook.SheetNames.push(opt.sheetName)
    workBook.Sheets[opt.sheetName] = data
    for (const env in hostConf) {
      createJsonFile(`${prefix}/urls-${opt.field}-${env}.json`, env, opt.field, confPlatform)
    }
  })
  XLSX.writeFile(workBook, `${prefix}/urls.xlsx`);
}

const createUrlJson = function (env, platform) {
  const h5conf = parseEachConfig(h5File)
  const allConf = {}
  opts.forEach(opt => {
    const conf = parseEachConfig(opt.file)
    allConf[opt.field] = conf.concat(h5conf)
  })
  const opt = opts.filter(item => item.field === platform)[0]
  if(opt) {
    const conf = parseEachConfig(opt.file)
    return createJsonFile(`${prefix}/urls.json`, env, platform, conf)
  } else {
    throw new Error(`Unknow platform: Can\'t find a configuration for ${platform}!`)
  }
  // return createJsonFile(`${prefix}/urls.json`, env, allConf)
}

if (require.main === module) {
  createUrlMap()
}

export default createUrlJson

