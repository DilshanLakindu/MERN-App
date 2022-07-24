require('dotenv').config()

const express = require('express')
const { route } = require('./routes/workouts')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res,next) => {
     console.log(route.path,req.method)
     next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//listen for requests
app.listen(process.env.PORT,()=> {
    console.log('listening on port',process.env.PORT)
})

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('DB is connected')
})
.catch((error)=>{
    console.log(error)
})


