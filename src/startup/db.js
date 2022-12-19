const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Tenemos conexión con la db..."))
        .catch(() => console.log("ERROR FATAL: ", err))   
}