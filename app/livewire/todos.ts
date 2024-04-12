// import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { Component } from 'adonisjs-livewire'

export default class Todos extends Component {
  todo = ''

  todos = ['Take out trash', 'Do dishes']

  async add() {
    this.todos.push(this.todo)
    this.todo = ''
  }

  async remove(index: number) {
    this.todos.splice(index, 1)
  }

  async render() {
    return /*html*/ `<div class="border border-gray-200 p-2 rounded-lg">
        <form wire:submit="add">
            <input type="text" wire:model="todo" class="border border-gray-300">
    
            <button type="submit">Add</button>
        </form>
    
        <ul>
            @each ((todo, index) in todos)
                <li wire:key="{{ index }}">
                {{ todo }}
                     <button wire:click="remove({{ index }})">Remove</button>
                </li>
            @endeach
        </ul>
    </div>`
  }
}
