const express = require('express');
const app = express();

const tasksRoute = require("./routes/tasks")
const notFound = require('./middleware/notFound.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')

//env variables
require('dotenv').config()

// db connection function
const connectDB = require("./db/connect.js")

// middleware
app.use(express.json())
app.use(express.static('./public'))

// routes
app.use("/api/v1/tasks", tasksRoute)
app.use("*",notFound)
app.use(errorHandlerMiddleware)

// connecting the db and starting the server
const port = process.env.PORT || 5000
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log(`Server running on port ${port}`))
    } catch(err){
        console.log(error)
    }
}
start()