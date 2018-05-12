import React from 'react'
import { Subscribe } from 'unstated'
import { TodosContainer } from '../../containers'
import TodoList from './TodoList'

const TodoListContainer = () => {
  return (
    <Subscribe to={[TodosContainer]}>
      {(todos) => {
        return (
          <TodoList todos={todos} />
        )
      }}
    </Subscribe>
  )
}

export default TodoListContainer
