require('dotenv').config()

const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const port = process.env.PORT || 3000
const webRoutes = require('./routes/web')
const connection = require('./config/database')

//config template engine
configViewEngine(app)

//Routes
app.use('/',webRoutes)


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
