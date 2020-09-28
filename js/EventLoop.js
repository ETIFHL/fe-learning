let n = 0

;(async function a(num) {
  console.log('in a', num)
  await b(num++)
})(n)

function b(num) {
  console.log('in b', num++)
  c(num++)
  console.log('in b', ++num)
}

function c(num) {
  setTimeout(() => {
    console.log('in c', num++)
  }, 0)
}

new Promise((resolve => {
  console.log('in promise', n)
  resolve(n)
})).then((num) => {
  console.log('in promise', num++)
})

console.log(n++ > n)
console.log('end', n)

