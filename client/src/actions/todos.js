import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api/index'

export function getTodos() {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchTodos()
      const action = { type: FETCH_ALL, payload: data }
      dispatch(action)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function createTodo(todo) {
  return async (dispatch) => {
    try {
      const { data } = await api.createTodo(todo)
      const action = { type: CREATE, payload: data }
      dispatch(action)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function updateTodo(id, todo) {
  return async (dispatch) => {
    try {
      const { data } = await api.updateTodo(id, todo)
      const action = { type: UPDATE, payload: data }
      dispatch(action)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function deleteTodo(id) {
  return async (dispatch) => {
    try {
      const { data } = await api.deleteTodo(id)
      const action = { type: DELETE, payload: data }
      dispatch(action)
    } catch (error) {
      console.log(error.message)
    }
  }
}

