const crud = require('../models/crud')
const myError=require('../error/errorHandling')


//list
const listTodos =async (req,res) => {
  const result=await crud.allTodoList()
  res.json(result)
}

const getListById = async (req, res) => {
  const { id } = req.params
  if(!id){
    throw new myError.missingId
  }
  try{
    const result = await crud.getTodoListById(id)
    res.json(result)
  }catch(error){
    res.json(error)
  }
}

const newTodoList=async (req, res) => {
  const {title, color} = req.body
  if(!(title || color)){
    return res.status(400).json({error: "Invalid body"})
  }
    const result= await crud.newTodoList(title,color)
    res.json (result)
}

const deleteTodoList = async(req, res) => {
  const {id} = req.params
  if(!id){
    return res.status(400).json({error: 'Invalid body, missing id'})
  }
  try{
    const result=await crud.deleteList(id)
    res.json(result)
  }catch(error){
    res.json(error)
  }
}

const updataTodoList=async(req, res) => {
  const { id, title, color } = req.body;
  if(!(id || title || color)){
    return res.status(400).json({error: 'Invalid body'})
  }
  try{
    const result=await crud.updateTodoList(title, color, id)
    res.json(result) 
  }catch(error){
    res.json(error) 
  }
}

//item
const getTodos =async (req,res) => {
  const result=await crud.getTodos()
  res.json(result)
}

const getTodoById=async(req, res) => {
  const {id} = req.params
  if(!id){ 
    return res.status(400).json({error: 'Invalid body'})
  }
  try{
    const result= await crud.getTodoId(id)
    res.json({result})  
  }catch(error){
    res.json(error)
  }
}

const newTodo=async (req, res) => {
  const {todoListID, content} = req.body
  if(!(todoListID || content)){
    return res.status(400).json({error: 'Invalid body'})
  }
  const result=await crud.newTodo(content,todoListID)
  res.json(result)
}

const deleteTodo = async(req, res) => {
  const {id} = req.params
  if(!id){
    return res.status(400).json({error: 'Invalid body, missing id'})
  }
  try{
    const result=await crud.deleteItem(id)
    res.json(result)
  }catch(error){
    res.json(error)
  }
}

const updateTodo=async(req, res) => {
  const {id, content, done} = req.body    
  if(!(id || content || done)){ 
    return res.status(400).json({error: "Invalid body"})
  }
  try{
    const result=await crud.updateTodo(content,done,id)
    res.json(result)
  }catch(error){
    res.json(error) 
  }
}

const getListItem = async (req, res) => {
  const { id } = req.params
  if(!id){
    return res.status(400).json({error: 'Invalid body, missing id'})
  }
  try{
    const result = await crud.getListItem(id)
    res.json(result)
  }catch(error){
    res.json(error)
  }
}

module.exports = 
{listTodos,
  newTodoList,
  newTodo,
getTodoById,
updataTodoList,
updateTodo,
deleteTodoList,
getListById,
getTodos,
deleteTodo,
getListItem
}