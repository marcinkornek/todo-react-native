import React, { Component } from 'react'
import { Button, FlatList, View } from 'react-native'
import { ListItem, ListItemForm } from '../../components'

const todos = [
  {
    key: 1,
    title: 'todo 1',
    completed: false,
    createdAt: new Date()
  },
  {
    key: 2,
    title: 'todo 2',
    completed: false,
    createdAt: new Date()
  },
  {
    key: 3,
    title: 'todo 3',
    completed: false,
    createdAt: new Date()
  }
]

class TodoList extends Component {
  state = {
    showAddForm: false,
    items: todos
  }

  onToggleTodo = (key) => {
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

  onDeleteTodo = (key) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => {
          return item.key !== key
        })
      }
    })
  }

  onAddTodo = (title) => {
    const todo = {
      key: Math.random(),
      title,
      completed: false,
      createdAt: new Date()
    }

    this.toggleShowForm()

    this.setState((prevState) => {
      return { items: [...prevState.items, todo] }
    })
  }

  toggleShowForm = () => {
    this.setState((prevState) => {
      return { showAddForm: !prevState.showAddForm }
    })
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        todo={item}
        onToggle={this.onToggleTodo}
        onDelete={this.onDeleteTodo}
      />
    )
  }

  renderList = () => {
    const { items } = this.state

    return (
      <FlatList
        removeClippedSubviews
        data={items}
        renderItem={this.renderItem}
      />
    )
  }

  render() {
    const { showAddForm } = this.state

    return (
      <View>
        {this.renderList()}
        {
        showAddForm &&
        <ListItemForm
          onSubmit={this.onAddTodo}
        />
        }
        <Button
          onPress={this.toggleShowForm}
          disabled={showAddForm}
          title='Add new todo'
        />
      </View>
    )
  }
}

TodoList.navigationOptions = () => {
  return {
    headerTitle: 'Todo list'
  }
}

export default TodoList
