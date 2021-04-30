const sqlite = require('sqlite3')
const db = new sqlite.Database('database/todos.db')

module.exports = db