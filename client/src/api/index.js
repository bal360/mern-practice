import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export function fetchTodos() {
  return API.get('/todos')
}

export function createTodo(todo) {
  return API.post('/todos', todo)
}

export function updateTodo(id, todo) {
  return API.patch(`/todos/${id}`, todo)
}

export function deleteTodo(id) {
  return API.delete(`/todos/${id}`)
}