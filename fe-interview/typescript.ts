// 装饰器
/**
 * 装饰函数的装饰器
 * 基于原有的函数，不侵入原有代码来修改原有逻辑
 * @param target
 * @param name
 * @param descriptor
 */
export function measure(target: any, name: any, descriptor: any) {
  const oldValue = descriptor.value

  descriptor.value = async function () {
    const startTime = Date.now()

    const res = await oldValue.apply(this, arguments)

    console.log(`${name}, 执行耗时： ${Date.now() - startTime}`)

    return res
  }

  return descriptor
}
