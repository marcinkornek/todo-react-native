import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, Button, FlatList, View } from 'react-native'
import { observer } from 'mobx-react'
import { create } from 'mobx-persist'
import { ListItem, ListItemForm } from '../../components'
import { Todos } from '../../stores'

const hydrate = create({
  storage: AsyncStorage, // or AsyncStorage in react-native.
  // default: localStorage
  jsonify: true // if you use AsyncStorage, here shoud be true
  // default: true
})

const todos = new Todos()

@observer
class TodoList extends Component {
  state = {
    initialLoading: true,
    showAddForm: false
  }

  componentDidMount() {
    hydrate('someObject', todos).then(() => {
      return this.setState({ initialLoading: false })
    })
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
    const { initialLoading, showAddForm } = this.state

    if (initialLoading) return <ActivityIndicator />

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
