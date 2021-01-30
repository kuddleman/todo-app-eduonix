import Todo from '../models/todo.js'

export const getTodos = async (req, res)=>{
    try {
        const todos = await Todo.find()
        res.json(todos)
        console.log(`Got all todos`)
    } catch(err) {
        res.send(`Error: ${err}`)
    }
}

export const getTodo = async(req, res)=>{
    try {
        const todo = await Todo.findById(req.params.id)
        res.json(todo)
    } catch(err) {
        res.send(`Error: ${err}`)
    }
}


export const postTodo = async(req, res)=>{
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
}

export const updateTodo = async(req, res)=>{
    try{
      const todo = await Todo.findById(req.params.id)
      const {id} = req.params 
      const { title, 
              dueByDate, 
              createdOn, 
              status, 
              isActive, 
              userName } = req.body
      
      if(title) todo.title = title
      if(dueByDate) todo.dueByDate = dueByDate
      if(createdOn) todo.createdOn = createdOn
      if(status) todo.status = status
      if(isActive) todo.isActive = isActive
      if(userName) todo.userName = userName
  
      todo.save()
      res.send(`To-Do with title: ${title} has been updated!`)
    } catch(err) {
        res.send(`Error: ${err}`)
    }
  }

  export const deleteTodo = async(req, res)=>{
    try {
        const todo = await Todo.findById(req.params.id)
        todo.delete()
        res.send(`To-do with the title  ${todo.title} has been deleted!`)

    } catch(err) {
        res.send(`Error: ${err}`)
    }
}