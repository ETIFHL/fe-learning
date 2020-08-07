Function.prototype.$apply = function(context = this, args) {
  context.fn = this
  setTimeout(() => delete context.fn, 0)
  return context.fn(...args)
}

var foo = {
  name: 'bar'
}

function Lgd(name) {
  this.name = name
}

function test(caller = 'default') {
  console.log('name:', this.name, ', caller:', caller)
  return this.name
}

var b = test.apply(foo, [123])

console.log(b)

var c = test.$apply(new Lgd('maybe'), [456])

console.log(c)

setTimeout(() => console.log(foo), 0)
