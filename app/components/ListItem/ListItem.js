import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import { CheckBox, Icon } from 'native-base'
import styles from './ListItem.styles'

const {
  containerStyle, checkboxStyle, textStyle
} = styles

const ListItem = ({ todo, onToggle, onDelete }) => {
  return (
    <View
      style={containerStyle}
    >
      <CheckBox
        checked={todo.completed}
        style={checkboxStyle}
        onPress={() => { return onToggle(todo.key) }}
      />
      <Text style={textStyle}>
        {todo.title}
      </Text>
      <TouchableOpacity
        onPress={() => { return onDelete(todo.key) }}
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
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ListItem
