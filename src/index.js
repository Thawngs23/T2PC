const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const exphbs = require('express-handlebars')
const { extname, join } = require('path')

app.engine('hdb', exphbs({extname: '.hdb'}))
app.set('view engine', 'hdb')

app.set('views',path.join(__dirname,'resources/views'))
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})