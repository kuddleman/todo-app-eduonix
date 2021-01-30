import express from 'express'
const router = express.Router()
import Todo from '../models/todo.js'

router.get('/', async(req, res)=>{
    try {
        const todos = await Todo.find()
        res.json(todos)
        console.log(`Got all todos`)
    } catch(err) {
        res.send(`Error: ${err}`)
    }
})

router.post('/', async(req, res)=>{
    const todo = new Todo({
        title: req.body.title,
        dueByDate: req.body.dueByDate,
        createdOn: req.body.createdOn,
        status: req.body.status,
        isActive: req.body.isActive,
        userName: req.body.userName
    })
    try{
        const todo1 = await todo.save()
        res.json(todo1)
    } catch(err) {
        res.send(`Error`)
    }
})

export default router