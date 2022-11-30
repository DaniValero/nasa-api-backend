const Landing = require('../models/landing')

const express = require('express')
const router = express.Router()



router.get('/', async (req, res) => {

    if(req.query.minimum_mass) {
        const query = req.query.minimum_mass
        const result = await Landing.find({$expr : {$gt : [{$toDecimal : "$mass"}, +query]}}).select('name mass')
        res.send(result).status(200)
    } else if (req.query.from && req.query.to) {
        
         let query1 = new Date (`January 1, ${req.query.from} 00:00:00 GMT+0`)
         let query2 = new Date (`January 1, ${req.query.to} 00:00:00 GMT+0`)
         console.log(query1)
         console.log(query2)
        // let query = req.query.from += "-01-01"
        // toISOString()
        const result = await Landing.find({year:{$gte: (query1).toISOString, $lt: (query2).toISOString}}).select('name mass year')
        res.send(result).status(200)
    }
}) 

router.get('/mass/:number', async (req, res) => {
    const result = await Landing.find({mass: `${req.params.number}`}).select('name mass')

    res.send(result).status(200)
})

router.get('/class/:class', async (req, res) => {
    console.log(req.params.class)

    const result = await Landing.find({recclass: `${req.params.class}`}).select('name recclass')

    res.send(result).status(200)
})


router.post('/create', async (req, res) => {
    const landing = new Landing(req.body) 

    const newLanding = await landing.save()

    res.send(newLanding)
})

router.put('/edit/:id', async (req, res) => {
    const landing = await Landing.findOneAndUpdate({id: req.params.id}, req.body)

    res.send(landing)
})

router.delete('/delete/:id', async (req, res) => {
    const landing = await Landing.findOneAndDelete({id: req.params.id})

    res.send(landing)
})








module.exports = router
