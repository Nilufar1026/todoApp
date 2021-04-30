  
const express = require('express')
const router = express.Router()

const TodosController = require('../controllers/todoControllers')

//list
router.get('/todolists', TodosController.listTodos )
router.get('/todolists/:id', TodosController.getListById )
router.post('/todolists', TodosController.newTodoList)
router.delete('/todolists/:id',TodosController.deleteTodoList )
router.patch('/todolists/:id', TodosController.updataTodoList)

//item
router.get('/todoitems', TodosController.getTodos)
router.get('/todoitems/:id', TodosController.getTodoById)
router.post('/todoitems', TodosController.newTodo)
router.delete('/todoitems/:id',TodosController.deleteTodo)
router.patch('/todoitems/:id',TodosController.updateTodo )

//todoList-todoItem
router.get('/todolists/:id/todoitems', TodosController.getListItem )
// GET /todolists/:id/todoitems
// PUT /todolists/:list_id/todoitems/:item_id


module.exports = router