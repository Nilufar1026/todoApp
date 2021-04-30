const db= require('./connection.js')


//list
function allTodoList(){
  return new Promise((resolve,reject)=>{
    db.all("SELECT * FROM todo_lists", function(err, row){
      resolve(row)
    })
  })
}

function getTodoListById(id){
  return new Promise((resolve,reject)=>{
    db.all(`SELECT * FROM todo_lists WHERE id = ?`, [id], function(error, rows){
    if(error){
      reject(error)
    }
    resolve(rows)
  })
  })
}

function newTodoList(title,color){
  return new Promise((resolve,reject)=>{
    db.run(`INSERT INTO todo_lists(title,color) VALUES (?, ?)`, [title,color], function(error){
    if(error){
      reject(error)
    }
    db.get(`SELECT * FROM todo_lists WHERE id = ?`, [this.lastID], function(err, row){
      if(err){
        reject(error)
      }
      resolve(row)
    })
  })
  })
}
    
function deleteList(id){
  return new Promise((resolve,reject)=>{
    db.run(`DELETE FROM todo_lists WHERE id = ?`, [id], function(error){
    if(error){
      reject(error)
    }
    if(this.changes == 0){
      reject({error:`Todo list with id ${id} not found`})
      //return res.status(404).json({error: `Todo list with id ${id} not found`})
    }
    resolve('Todo list deleted')
  })
  })
}

function updateTodoList(title,color,id){
  return new Promise((resolve,reject)=>{
    db.run(`UPDATE todo_lists SET title = ?, color = ? WHERE id = ?`, [title,color,id], function(error){
    if(error){
      reject(error)
    }
    resolve('Success')
  })
  })
}

//item
function getTodos(){
  return new Promise((resolve,reject)=>{
    db.all("SELECT * FROM todos", function(err, row){
      resolve(row)
    })
  })
}

function getTodoId(id){
  return new Promise((resolve,reject)=>{
    db.get(`SELECT * FROM todos WHERE id = ?`, [id], function(error, row){
    if(error){
      reject(error)
    }
    resolve(row)
  })
  })
}

function newTodo(content,todoListID){
  return new Promise((resolve,reject)=>{
    db.run(`INSERT INTO todos(content, todo_list_id) VALUES (?,?)`, [content, todoListID], function(error){
    if(error){
      reject(error)
    }
    db.get(`SELECT * FROM todos WHERE id = ?`, [this.lastID], function(err, row){
      if(err){
        reject(error)
      }
      resolve(row)
    })
    })
  })
}

function deleteItem(id){
  return new Promise((resolve,reject)=>{
    db.run(`DELETE FROM todos WHERE id = ?`, [id], function(error){
    if(error){
      reject(error)
    }
    if(this.changes == 0){
      reject({error:`Todo list with id ${id} not found`})
      //return res.status(404).json({error: `Todo list with id ${id} not found`})
    }
    resolve('Todo item deleted')
  })
  })
}

function updateTodo(content,done,id){
  return new Promise((resolve,reject)=>{
    db.run(`UPDATE todos SET content = ?, done = ? WHERE id = ?`, [content,done,id],function(error){
    if(error){
      reject(error)
    }
    resolve('Todo updated')
  })
  })
}

function getListItem(id){
  return new Promise((resolve,reject)=>{
    db.all(`SELECT * FROM todo_lists INNER JOIN todos ON todo_lists.id = todos.id `, function(error, rows){
    if(error){
      reject(error)
    }
    resolve(rows)
  })
  })
}


module.exports= 
{allTodoList,
newTodoList,
newTodo,
getTodoId,
updateTodoList,
updateTodo,
deleteList,
getTodoListById,
getTodos,
deleteItem,
getListItem
}
