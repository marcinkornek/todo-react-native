import { StackNavigator } from 'react-navigation'
import { TodoList } from './screens'

const RootNavigator = StackNavigator({
  TodoList: {
    screen: TodoList
  }
}, {

})

export default RootNavigator
