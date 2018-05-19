import React, { Component } from 'react'
import { ActivityIndicator, Button, FlatList, View } from 'react-native'
import { ListItem, ListItemForm } from '../../components'
import { TodosRealm } from '../../realms'

class TodoList extends Component {
  state = {
    isInitialized: false,
    items: [],
    showAddForm: false
  }

  async componentDidMount() {
    const initializedItems = await TodosRealm.initializeRealm()

    this.setState({ isInitialized: true, items: initializedItems })
  }

  onToggleTodo = async (key) => {
    const items = await TodosRealm.toggleTodo(key)

    this.setState({ items })
  }

  onDeleteTodo = async (key) => {
    const items = await TodosRealm.deleteTodo(key)

    this.setState({ items })
  }

  onAddTodo = async (title) => {
    this.toggleShowForm()
    const items = await TodosRealm.addTodo(title)

    this.setState({ items })
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
    const { isInitialized, showAddForm } = this.state

    if (!isInitialized) return <ActivityIndicator />

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
