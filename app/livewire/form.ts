import vine from '@vinejs/vine'
import { Component } from 'adonisjs-livewire'

export const createPostValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(10),
  })
)

export default class Form extends Component {
  data = {
    email: '',
    password: '',
  }

  async submit() {
    const payload = await this.ctx.request.validateUsing(createPostValidator, {
      data: this.data,
    })

    console.log(payload)

    this.ctx.session.flash('message', 'Form submitted successfully!')
  }

  async render() {
    return `
      <form wire:submit="submit">
        <input type="email" wire:model="data.email" />

        @inputError('email')
          @each(message in $messages)
            <p>{{ message }}</p>
          @end
        @end
        <br/>
        <br/>
        <input type="password" wire:model="data.password" />
        @inputError('password')
          @each(message in $messages)
            <p>{{ message }}</p>
          @end
        @end

        <button type="submit">Submit</button>

        @flashMessage('message')
          <p>{{ $message }}</p>
        @end
      </form>
    `
  }
}
