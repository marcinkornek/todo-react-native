import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import { CheckBox, Icon } from 'native-base'
import styles from './ListItem.styles'

const {
  containerStyle, checkboxStyle, textStyle
} = styles

const ListItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <View
      style={containerStyle}
    >
      <CheckBox
        checked={todo.completed}
        style={checkboxStyle}
        onPress={() => { return onUpdate(todo) }}
      />
      <Text style={textStyle}>
        {todo.title}
      </Text>
      <TouchableOpacity
        onPress={() => { return onDelete(todo) }}
      >
        <Icon
          name='ios-trash-outline'
          color={`${todo.title.length > 0 ? 'black' : 'grey'}`}
          size={23}
        />
      </TouchableOpacity>
    </View>
  )
}

ListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.instanceOf(Date)
  }),
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ListItem
