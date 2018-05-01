import React, { Component } from 'react'
import { ActivityIndicator, Button, FlatList, View } from 'react-native'
import Realm from 'realm'
import uuidv1 from 'uuid/v1'
import { ListItem, ListItemForm } from '../../components'

const TodoSchema = {
  name: 'Todo',
  primaryKey: 'key',
  properties: {
    key: 'string',
    title: 'string',
    completed: 'bool',
    createdAt: 'date'
  }
}

class TodoList extends Component {
  state = {
    realm: null,
    items: [],
    showAddForm: false
  }

  componentWillMount() {
    Realm.open({
      schema: [TodoSchema],
      deleteRealmIfMigrationNeeded: true // delete the Realm if migration is needed
    }).then((realm) => {
      const items = realm.objects('Todo').map((x) => { return Object.assign({}, x) })

      this.setState({ realm, items })
    })
  }

  onToggleTodo = (key) => {
    const { realm, items } = this.state

    const todo = items.find((item) => { return item.key === key })

    if (todo) {
      const updatedTodo = {
        ...todo,
        completed: !todo.completed
      }

      try {
        realm.write(() => {
          realm.create('Todo', updatedTodo, true)
          this.setState((prevState) => {
            return {
              items: prevState.items.map((item) => {
                if (item.key === key) return updatedTodo
                return item
              })
            }
          })
        })
      } catch (e) {
        console.log('Error on updating')
      }
    }
  }

  onDeleteTodo = (key) => {
    const { realm } = this.state

    const todo = realm.objectForPrimaryKey('Todo', key)

    if (todo) {
      try {
        realm.write(() => {
          realm.delete(todo)
          this.setState((prevState) => {
            return {
              items: prevState.items.filter((item) => {
                return item.key !== key
              })
            }
          })
        })
      } catch (e) {
        console.log('Error on deleting')
      }
    }
  }

  onAddTodo = (title) => {
    const { realm } = this.state

    const todo = {
      key: uuidv1(),
      title,
      completed: false,
      createdAt: new Date()
    }

    this.toggleShowForm()

    try {
      realm.write(() => {
        realm.create('Todo', todo)
        this.setState((prevState) => {
          return { items: [...prevState.items, todo] }
        })
      })
    } catch (e) {
      console.log('Error on creating')
    }
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
    const { realm, showAddForm } = this.state

    if (!realm) return <ActivityIndicator />

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
