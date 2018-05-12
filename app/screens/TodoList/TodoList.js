import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, FlatList, View } from 'react-native'
import { ListItem, ListItemForm } from '../../components'

class TodoList extends Component {
  state = {
    showAddForm: false
  }

  onToggleTodo = (key) => {
    this.props.todos.toggleTodo(key)
  }

  onDeleteTodo = (key) => {
    this.props.todos.deleteTodo(key)
  }

  onAddTodo = (title) => {
    this.toggleShowForm()

    this.props.todos.addTodo(title)
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
    const { items } = this.props.todos.state

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

TodoList.propTypes = {
  todos: PropTypes.shape({
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    state: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          todo: PropTypes.shape({
            title: PropTypes.string,
            completed: PropTypes.bool,
            createdAt: PropTypes.instanceOf(Date)
          })
        })
      )
    })
  })
}

export default TodoList
