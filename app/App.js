import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'
import RootNavigator from './RootNavigator'
import { TodoContext } from './contexts'

class App extends Component {
  /* eslint-disable react/no-unused-state */
  state = {
    items: [],
    toggleTodo: (key) => {
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
    },
    deleteTodo: (key) => {
      this.setState((prevState) => {
        return {
          items: prevState.items.filter((item) => {
            return item.key !== key
          })
        }
      })
    },
    addTodo: (title) => {
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
  /* eslint-disable react/no-unused-state */

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        <RootNavigator />
      </TodoContext.Provider>
    )
  }
}

export default App
