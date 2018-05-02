import { decorate, observable, action } from 'mobx'
import uuidv1 from 'uuid/v1'

class Todos {
  items = []

  toggleTodo = (key) => {
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

  deleteTodo = (key) => {
    this.items = this.items.filter((todo) => { return todo.key !== key })
  }

  addTodo = (title) => {
    const todo = {
      key: uuidv1(),
      title,
      completed: false,
      createdAt: new Date()
    }

    this.items = [...this.items, todo]
  }
}

decorate(Todos, {
  items: observable,
  addTodo: action,
  toggleTodo: action,
  deleteTodo: action
})

export default Todos
