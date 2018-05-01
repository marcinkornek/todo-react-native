import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addTodo,
  toggleTodo,
  deleteTodo
} from '../../redux/todos/actions'
import TodoList from './TodoList'

const mapStateToProps = ({ todos }) => {
  return {
    items: todos.items
  }
}

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo
}

const TodoListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TodoList)

export default TodoListContainer
