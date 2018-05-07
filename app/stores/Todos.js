import { observable, action } from 'mobx'
import uuidv1 from 'uuid/v1'

class Todos {
  @observable items = []

  @action toggleTodo = (key) => {
    this.items = this.items.map((item) => {
      if (item.key === key) {
        return ({
          ...item,
          completed: !item.completed
        })
      }
      return item
    })
  }

  @action deleteTodo = (key) => {
    this.items = this.items.filter((todo) => { return todo.key !== key })
  }

  @action addTodo = (title) => {
    const todo = {
      key: uuidv1(),
      title,
      completed: false,
      createdAt: new Date()
    }

    this.items = [...this.items, todo]
  }
}

export default Todos
