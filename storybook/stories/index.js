import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from './Button'
import CenterView from './CenterView'
import Welcome from './Welcome'
import ListItem from './ListItem'

storiesOf('Welcome', module).add('to Storybook', () => { return <Welcome showApp={linkTo('Button')} /> })

storiesOf('Button', module)
  .addDecorator((getStory) => { return <CenterView>{getStory()}</CenterView> })
  .add('with text', () => {
    return (
      <Button onPress={action('clicked-text')}>
        <Text>Hello Button</Text>
      </Button>
    )
  })
  .add('with some emoji', () => {
    return (
      <Button onPress={action('clicked-emoji')}>
        <Text>😀 😎 👍 💯</Text>
      </Button>
    )
  })

const defaultPropsListItem = {
  todo: {
    title: 'title',
    completed: false,
    createdAt: new Date()
  },
  onToggle: action('clicked-toggle'),
  onDelete: action('clicked-delete')
}

storiesOf('ListItem', module)
  .addDecorator((getStory) => { return <CenterView>{getStory()}</CenterView> })
  .add('with todo not completed', () => {
    const props = defaultPropsListItem

    return (
      <ListItem
        {...props}
      />
    )
  })
  .add('with todo completed', () => {
    const props = {
      ...defaultPropsListItem,
      todo: {
        ...defaultPropsListItem.todo,
        completed: true
      }
    }

    return (
      <ListItem
        {...props}
      />
    )
  })
