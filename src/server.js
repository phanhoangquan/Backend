require('dotenv').config()

const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const port = process.env.PORT || 3000
const webRoutes = require('./routes/web')
const mysql = require('mysql2');

//config template engine
configViewEngine(app)

//Routes
app.use('/',webRoutes)

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit',
});

// A simple SELECT query
connection.query(
  'SELECT * FROM `User` u',
  function(err, results, fields) {
    console.log("Results: ", results); // results contains rows returned by server
    console.log("Fields: ", fields); // fields contains extra meta data about results, if available
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
