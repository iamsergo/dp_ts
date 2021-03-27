import IDB from './IDB'
import DB from './DB'
import DBProxy from './DBProxy'

const db : IDB = new DB('users')
const dbp : IDB = new DBProxy(db)

console.log('REAL DB :')
db.query('SELECT * FROM users')
db.query('SELECT * FROM users')
db.query('SELECT * FROM users')

console.log('\n','PROXY DB :')
dbp.query('SELECT * FROM users')
dbp.query('SELECT * FROM users')
dbp.query('SELECT * FROM users')