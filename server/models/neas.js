const mongoose = require('mongoose')



const neasSchema = new mongoose.Schema({
    designation: String,
    discovery_date: String,
    h_mag: String,
    moid_au: String,
    q_au_1: String,
    q_au_2: String,
    period_yr: String,
    i_deg: String,
    pha: String,
    orbit_class: String
})

const Neas = mongoose.model('neas', neasSchema)

module.exports = Neas
exports.neasSchema = neasSchema