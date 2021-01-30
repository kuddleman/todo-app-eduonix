import express from 'express'
import mongoose from 'mongoose'
//import todoRouter from './routes/todos.js'
const url = 'mongodb://localhost/TodoDBex'

const app = express()
const PORT = 8000

app.use(express.json())

//app.use('/todos',todoRouter)

app.get('/', (req, res) => res.send(`Hello from Homepage!`))

mongoose.connect(
    url,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    }   
)

const con = mongoose.connection

con.on('open', ()=>{
    console.log(`MongoDB connected.....`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`)
})