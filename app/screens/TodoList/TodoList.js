import React from 'react'
import { View } from 'react-native'
import { ListItem } from '../../components'

const todo = {
  title: 'todo 1',
  completed: false,
  createdAt: new Date()
}

const TodoList = () => {
  return (
    <View>
      <ListItem
        todo={todo}
        onUpdate={() => {}}
        onDelete={() => {}}
      />
    </View>
  )
}

TodoList.navigationOptions = ({ _navigation }) => {
  return {
    headerTitle: 'Todo list'
  }
}

export default TodoList
