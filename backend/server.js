const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes')
const passport = require('passport')
////////////////////////////////
const PORT = 4000
const app = express()



require('dotenv').config()
require('./config/database')




//middlewares
app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)

app.listen(PORT, ()=> console.log("Server ready on PORT " + PORT))