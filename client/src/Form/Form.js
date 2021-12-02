import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createTodo, updateTodo } from '../actions/todos'


function Form() {
  const [formData, setFormData] = useState({ description: ''})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const todo = useSelector(state => state.todos.find(todo => todo._id === params.id))

  useEffect(() => {
    if (todo) {
      setFormData({ description: todo.description })
    } 
  }, [todo])
  
  function handleSubmit(event) {
    event.preventDefault()
    if (todo) {
      dispatch(updateTodo(todo._id, formData))
    } else {
      dispatch(createTodo(formData))
    }
    navigate('/todos')
  }

  function onTextAreaChange(event) {
    setFormData({
      [event.target.name]: event.target.value
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        type="text" 
        value={formData.description} 
        name="description" 
        placeholder="description"
        onChange={onTextAreaChange}
        style={{
          width:"250px",
          height:"150px"
        }}
      >

      </textarea>
      <button>Submit</button>
    </form>
  )
}

export default Form