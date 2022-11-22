import mysql from 'mysql'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '11F02e2003B',
    database: 'sql6524709'
})

export default db