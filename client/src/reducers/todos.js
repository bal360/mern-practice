import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

function todos(state = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    
    case CREATE:
      return [...state, action.payload]
    
    case UPDATE:
      return state.map(todo => todo._id === action.payload._id ? action.payload : todo)
    
    case DELETE:
      return state.filter(todo => todo._id !== action.payload)
  
    default:
      return state
  }
}

export default todos