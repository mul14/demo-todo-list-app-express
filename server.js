require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const TaskListController = require('./controllers/TaskListController.js')
const TaskCreateController = require('./controllers/TaskCreateController.js')
const TaskDeleteController = require('./controllers/TaskDeleteController.js')
const TaskUpdateController = require('./controllers/TaskUpdateController.js')

app.get('/tasks', TaskListController)
app.post('/tasks', TaskCreateController)
app.delete('/tasks/:id', TaskDeleteController)
app.put('/tasks/:id', TaskUpdateController)

app.listen(3000, () => console.log('Open http://localhost:3000!'))
