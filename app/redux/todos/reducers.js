import uuidv1 from 'uuid/v1'
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from './constants'

export const initialState = {
  items: []
}

const addTodo = (state, action) => {
  const todo = {
    key: uuidv1(),
    title: action.title,
    completed: false,
    createdAt: new Date()
  }

  return {
    ...state,
    items: [...state.items, todo]
  }
}

const toggleTodo = (state, action) => {
  return {
    ...state,
    items: state.items.map((item) => {
      if (item.key === action.key) {
        return ({
          ...item,
          completed: !item.completed
        })
      }
      return item
    })
  }
}

const deleteTodo = (state, action) => {
  return {
    ...state,
    items: state.items.filter((item) => {
      return item.key !== action.key
    })
  }
}

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action)
    case TOGGLE_TODO:
      return toggleTodo(state, action)
    case DELETE_TODO:
      return deleteTodo(state, action)
    default:
      return state
  }
}

export { todos }
