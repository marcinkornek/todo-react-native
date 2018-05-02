import React, { Component } from 'react'
import { Button, FlatList, View } from 'react-native'
import { observer } from 'mobx-react'
import { ListItem, ListItemForm } from '../../components'
import { Todos } from '../../stores'

const todos = new Todos()

const TodoList = observer(class TodoListView extends Component {
  state = {
    showAddForm: false
  }

  onToggleTodo = (key) => {
    todos.toggleTodo(key)
  }

  onDeleteTodo = (key) => {
    todos.deleteTodo(key)
  }

  onAddTodo = (title) => {
    this.toggleShowForm()

    todos.addTodo(title)
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
    const { items } = todos

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
})

TodoList.navigationOptions = () => {
  return {
    headerTitle: 'Todo list'
  }
}

export default TodoList
