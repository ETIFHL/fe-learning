class EventEmitter {
  constructor() {
    this.event = {}
  }

  on(type, fn) {
    if (this.event[type]) {
      this.event[type].push(fn)
    } else {
      this.event[type] = [fn]
    }
  }

  emit(type, ...args) {
    if (this.event[type]) {
      this.event[type].forEach(i => i.apply(this, args))
    }
  }

  once(type, fn) {
    this.on(type, (...args) => {
      fn(args)
      this.off(type)
    })
  }

  off(type) {
    delete this.event[type]
  }

  offALl() {
    this.event = {}
  }
}
