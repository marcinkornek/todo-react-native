import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from './constants'

const addTodo = (title) => {
  return {
    type: ADD_TODO,
    title
  }
}

const toggleTodo = (key) => {
  return {
    type: TOGGLE_TODO,
    key
  }
}

const deleteTodo = (key) => {
  return {
    type: DELETE_TODO,
    key
  }
}

export {
  addTodo,
  toggleTodo,
  deleteTodo
}
