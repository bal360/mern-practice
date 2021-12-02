import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Todo from './Todo/Todo'

function Todos() {
  const todos = useSelector(state => state.todos)
  return (
    <>
      {
        todos.map(({_id, description, completed}) => {
          return (
            <Todo 
              key={_id} 
              id={_id} 
              description={description} 
              completed={completed} 
            />
          )
        })
      }
      <div>
        <Link to="/todos/new">Create New Todo</Link>
      </div>
    </>
  )
}

export default Todos