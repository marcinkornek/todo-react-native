import { Container } from 'unstated'
import uuidv1 from 'uuid/v1'

class TodosContainer extends Container {
  state = {
    items: []
  }

  toggleTodo = (key) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.map((item) => {
          if (item.key === key) {
            return ({
              ...item,
              completed: !item.completed
            })
          }
          return item
        })
      }
    })
  }

  deleteTodo = (key) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => {
          return item.key !== key
        })
      }
    })
  }

  addTodo = (title) => {
    const todo = {
      key: uuidv1(),
      title,
      completed: false,
      createdAt: new Date()
    }

    this.setState((prevState) => {
      return { items: [...prevState.items, todo] }
    })
  }
}

export default TodosContainer
