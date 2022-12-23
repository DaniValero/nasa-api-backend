const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()




const landings = require('./routes/landings')
const neas = require('./routes/neas')
const users = require('./routes/users')
require('./startup/db')()

app.use('/api/users', users)

app.use('/api/astronomy/landings', landings)

app.use('/api/astronomy/neas', neas)


app.listen(3000, () => console.log("Dios le da sus peores batallas a sus mejores guerreros"))