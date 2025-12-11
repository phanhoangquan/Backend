require('dotenv').config()

const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const port = process.env.PORT || 3000
const webRoutes = require('./routes/web')

//config template engine
configViewEngine(app)

//Routes
app.use('/',webRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
