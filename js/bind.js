Function.prototype.$bind = function (context, ...args) {
  // const fNOP = function() {}
  // const fBound = function() {
  //
  // }
  const _this = this

  if (typeof _this !== 'function') {
    throw new TypeError('caller must be a function')
  }

  return function () {
    return _this.apply(context, args.concat(arguments))
  }
}

const sub = {
  name: 'bar'
}

const obj = {
  name: 'foo',
  func: function (arg) {
    console.log('in func:', arg)
    return this.name
  }
}
console.log(obj.func('test'))

const bindSub = obj.func.bind(sub, 'bind')
console.log(bindSub())

const $bindSub = obj.func.$bind(sub, '$bind')
console.log($bindSub())

function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
  return this.x + ',' + this.y
}

var p = new Point(1, 2)
console.log(p.toString()) // '1,2'

var emptyObj = {}
var YAxisPoint = Point.bind(emptyObj, 0/*x*/)

// 本页下方的 polyfill 不支持运行这行代码，
// 但使用原生的 bind 方法运行是没问题的：

var YAxisPoint = Point.bind(null, 0/*x*/)

/*（译注：polyfill 的 bind 方法中，如果把 bind 的第一个参数加上，
即对新绑定的 this 执行 Object(this)，包装为对象，
因为 Object(null) 是 {}，所以也可以支持）*/

var axisPoint = new YAxisPoint(5)
axisPoint.toString() // '0,5'

axisPoint instanceof Point // true
axisPoint instanceof YAxisPoint // true
new YAxisPoint(17, 42) instanceof Point // true
// {
//   const obj = {
//     name: 'foo',
//     func: function() {
//       setTimeout(function() {console.log(this.name)}.$bind(this), 10)
//     }
//   }
//   obj.func()
// }
