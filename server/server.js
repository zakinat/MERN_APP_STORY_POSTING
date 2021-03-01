//importing dependencies
const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')

//importing functions
const connectDB=require('./config/db')

//Load config
dotenv.config({path:'./config/config.env'})

//connect database with mongo
connectDB()

//init server app
const app=express()

//bodyparser
app.use(bodyParser.json({limit:'30mb',extended:false}))
app.use(express.json({limit:'30mb',extended:false}))
app.use(cors())

//routes
app.use('/stories',require('./routes/stories'))


const PORT=process.env.PORT || 5000


app.listen(PORT,console.log(`server running in  mode on port ${PORT}`))