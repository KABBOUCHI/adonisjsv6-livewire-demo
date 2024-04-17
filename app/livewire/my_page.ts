import { Component, layout, title } from 'adonisjs-livewire'

@title('My Page Title')
@layout('components/layouts/main', {
  sidebar: true,
})
export default class MyPage extends Component {
  async render() {
    return '<div class="p-4 font-medium text-lg">My Page</div>'
  }
}
