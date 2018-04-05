let path = require('path')
let os = require('os')

let roots = new Set(process.env.NODE_PATH.split(':').filter(path => !!path))
roots.add(path.join(os.homedir(), '.node_modules'))
roots = Array.from(roots)

function useGlobal(name) {
  for (let i = 0; i < roots.length; i++) {
    let file = path.join(roots[i], name)
    try {
      return require(file)
    } catch(e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        if (e.message.indexOf(file) >= 0) return
      }
      throw e
    }
  }
  let err = new Error(`Cannot find module '${name}'`)
  err.code = 'MODULE_NOT_FOUND'
  throw err
}

module.exports = useGlobal

