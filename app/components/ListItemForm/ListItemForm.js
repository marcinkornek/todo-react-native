import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, TextInput, View } from 'react-native'
import { CheckBox, Icon } from 'native-base'
import styles from './ListItemForm.styles'

const {
  containerStyle, checkboxStyle, textStyle
} = styles

class ListItemForm extends Component {
  state = {
    text: ''
  }

  onSubmit = () => {
    const { onSubmit } = this.props
    const { text } = this.state

    if (!text || !text.length) return null
    return onSubmit(text)
  }

  render() {
    return (
      <View
        style={containerStyle}
      >
        <CheckBox
          checked={false}
          style={checkboxStyle}
        />
        <TextInput
          value={this.state.text}
          style={textStyle}
          placeholder='Write your todo here'
          onChangeText={(text) => { return this.setState({ text }) }}
        />
        <TouchableOpacity
          onPress={this.onSubmit}
          disabled={!this.state.text.length}
        >
          <Icon
            name='ios-add'
            color={!this.state.text.length ? 'grey' : 'green'}
            size={23}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

ListItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ListItemForm
