const { isNumber } = require('../sz-utils.js')
const { functionUtil } = require('../sz-utils')
const util = require('../sz-utils')

console.log(isNumber('123'))
console.log(isNumber(123))

var fn = functionUtil.once(function (name) {
  console.log('name==', name)
  return name
})
fn('aa')
fn('bb')
fn('cc')
console.log('util', util)
