// Creating express instance
const express = require('express')();
const app = express;
const morgan = require('morgan');

// Bringing Routes
const postRoutes = require("./routes/post");

// Middleware
app.use(morgan("dev"))

app.use("/",postRoutes);

const port = 8080;
app.listen(port, ()=>{
    console.log(`A Node API is listening to ${port}`)
})