// adapted from code.stephenmorley.org
class Queue {
  constructor () {
    this.a = []
    this.b = 0
  }

  getLength () {
    return this.a.length - this.b
  }

  isEmpty () {
    return this.a.length === 0
  }

  enqueue (b) {
    this.a.push(b)
  }

  dequeue () {
    if (this.a.length !== 0) {
      let c = this.a[this.b]
      if (2 * ++(this.b) >= this.a.length) {
        this.a = this.a.slice(this.b)
        this.b = 0
      }
      return c
    }
  }

  peek () {
    return (
       this.a.length > 0
        ? this.a[this.b]
        : void 0)
  }
};

export default Queue
