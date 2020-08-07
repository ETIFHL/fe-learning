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
      this.event[type].map(i => i.apply(this, args))
    }
  }

  off(type) {
    delete this.event[type]
  }

  offALl() {
    this.event = {}
  }
}
