const express = require('express')
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require('../controllers/todos')

const router = express.Router()

router.get('/', getTodos)

router.get('/:id', getTodo)

router.post('/', createTodo)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = router