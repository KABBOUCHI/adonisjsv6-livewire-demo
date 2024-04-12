import { Component } from 'adonisjs-livewire'

export default class Counter extends Component {
  count = 0

  mount({ count }: { count?: number } = {}) {
    if (count) {
      this.count = count
    }
  }

  increment() {
    if (this.count > 10) {
      this.js("alert('Counter cannot be more than 10')")
      this.count = 10
      return
    }

    this.count++
  }

  decrement() {
    this.count--
  }
}
