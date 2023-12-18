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