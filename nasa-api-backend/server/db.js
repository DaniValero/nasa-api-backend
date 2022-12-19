const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect('mongodb://127.0.0.1:27017/nasa-api')
        .then(() => console.log("Tenemos conexión con la db..."))
        .catch(() => console.log("ERROR FATAL: ", err))   
}