import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo } from '../../actions/todos'

function Todo({ id, description, completed }) {
  const [checked, setChecked] = useState(completed) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTodo(id, {completed: checked}))
  }, [checked, dispatch, id])

  function handleCheckChange() {
    setChecked(checked => !checked)
  }

  function onClickDelete() {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <form style={{margin: '10px', display: 'inline-block'}}>
        <span><h2 style={{display: 'inline-block'}}>Todo:</h2> {description}</span> <br />
        Completed <input type="checkbox" checked={checked} onChange={handleCheckChange} />
        <Link to={`/todos/${id}`}>Update</Link>
        <button onClick={onClickDelete}>Delete</button>
      </form>
    </>
  )
}

export default Todo