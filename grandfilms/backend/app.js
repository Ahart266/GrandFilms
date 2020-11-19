const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3004

require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log("Connected to database"))

app.use(express.json())

const videosRouter = require('./routes/videos')
app.use('/videos', videosRouter)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})