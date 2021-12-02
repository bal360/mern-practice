const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean, 
    default: false
  }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo