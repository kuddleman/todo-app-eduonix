import express from 'express'
const router = express.Router()
import { getTodos, getTodo, postTodo, updateTodo, deleteTodo } from '../controllers/todos.js'

router.get('/', getTodos )

router.post('/', postTodo )

router.get('/:id', getTodo )

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo )



export default router