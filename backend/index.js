const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const list = require('./routes/api/list')
const goals = require('./routes/api/goals')
const epics = require('./routes/api/epics')

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
    .connect(db, () => {}, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Error could not connect to mongo server'))

app.use('/api/goals', goals)
app.use('/api/epics', epics)
app.use('/api/list', list)

const PORT = process.env.PORT || 5000

sever = app.listen(PORT, () => console.log(`server is running on ${PORT}`))
