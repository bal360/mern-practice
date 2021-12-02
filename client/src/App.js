import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Form from './Form/Form'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/todos" element={<Home />} />
        <Route exact path="/todos/new" element={<Form />} />
        <Route exact path="/todos/:id" element={<Form />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App