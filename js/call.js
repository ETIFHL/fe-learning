Function.prototype.$call = function(context = window, ...args) {
  context.fn = this
  setTimeout(() => delete context.fn, 0)
  return context.fn(...args)
}

const foo = {
  name: 'bar'
}

function test(gold = 'default') {
  console.log('test:', gold, this, this.name)
  return this.name
}
{
  const b = test.call(foo, 123)
  console.log(b)
}

{
  const c = test.$call(foo, 456)
  console.log(c)
}

setTimeout(() => console.log(foo), 0)
