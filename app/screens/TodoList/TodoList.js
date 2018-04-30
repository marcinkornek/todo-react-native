import React from 'react'
import { View } from 'react-native'
import { ListItem } from '../../components'

const TodoList = () => {
  return (
    <View>
      <ListItem />
    </View>
  )
}

TodoList.navigationOptions = ({ _navigation }) => {
  return {
    headerTitle: 'Todo list'
  }
}

export default TodoList
