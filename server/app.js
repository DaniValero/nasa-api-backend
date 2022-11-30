const express = require('express')
const app = express()
app.use(express.json())

const landings = require('./routes/landings')
const neas = require('./routes/neas')
require('./db')()


app.use('/api/astronomy/landings', landings)

app.use('/api/astronomy/neas', neas)


app.listen(3000, () => console.log("Dios le da sus peores batallas a sus mejores guerreros"))