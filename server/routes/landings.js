const Landing = require('../models/landing')

const express = require('express')
const router = express.Router()



router.get('/', async (req, res) => {

    if(req.query.minimum_mass) {
        const query = parseInt(req.query.minimum_mass)
        const result = await Landing.find({$expr: {$gt: [{$toInt: {$toDecimal: "$mass"}}, query]}}).select('name mass')
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
