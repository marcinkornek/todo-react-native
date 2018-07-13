import React from 'react'
import TodoList from './TodoList'
import { TodoContext } from '../../contexts'

const TodoListContainer = () => {
  return (
    <TodoContext.Consumer>
      {(todos) => { return <TodoList todos={todos} /> }}
    </TodoContext.Consumer>
  )
}

export default TodoListContainer
