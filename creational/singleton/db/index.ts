import DB from "./DB"

const db0 : DB = DB.getInstance()
db0.add(0)

const db1 : DB = DB.getInstance()
db1.add(1)

const db2 : DB = DB.getInstance()
console.log(db2.get())