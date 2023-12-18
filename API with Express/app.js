// !This is the Express Way of making a simple server
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

// *This is the Route way 
// const app = express()
// const postRoutes = require('./routes/post')

// app.get('/', postRoutes.getPosts)

// app.listen(8080)

//? Using Middlware Morgan Way
const express = require('express');
const app = express;
const morgan = require('morgan');

// Bringing Routes
const {getPosts} = require("./routes/post");

// Middleware
app.use(morgan("dev"))

app.get("/" ,getPosts);

const port = 8080;
app.listen(port, ()=>{
    console.log(`A Node API is listening to ${port}`)
})