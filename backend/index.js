const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {MONGO_URL} = require('./config')

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const app = express()
app.use(bodyParser.json())
app.use('/api/users', require('./routes/userRoutes'))

app.listen(5000, () => console.log('App was started'))
