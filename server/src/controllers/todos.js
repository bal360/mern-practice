const Todo = require('../models/todo')

async function getTodos(req, res) {
  try {
    const todos = await Todo.find()

    res.send(todos)
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}

async function getTodo(req, res) {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
      return res.status(404).send({ message: 'No todo found with that id' })
    }

    res.send(todo)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function createTodo(req, res) {
  const todo = new Todo(req.body)
  try {
    await todo.save()
    res.status(201).send(todo)
  } catch (error) {
    res.status(409).send({ error: error.message })
  }
}

async function updateTodo(req, res) {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!todo) {
      return res.status(404).send({ message: 'No todo found with that id'})
    }

    res.send(todo)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function deleteTodo(req, res) {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    if (!todo) {
      return res.status(404).send({ message: 'No todo found with that id' })
    }
    res.send({ message: 'Successfully deleted todo' })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
}