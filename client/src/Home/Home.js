import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../actions/todos'
import Todos from '../Todos/Todos'

function Home() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <>
      <Todos />
    </>
  )
}

export default Home