// !This is the Express Way of making a simple server
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

// *This is the Route way 
const app = express()
const postRoutes = require('./routes/post')

app.get('/', postRoutes.getPost)

app.listen(4000)