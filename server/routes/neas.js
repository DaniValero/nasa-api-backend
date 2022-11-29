const Neas = require('../models/neas')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    console.log(req.query)
    const neas = await Neas.find({$toLower: {orbit_class: `${req.query.class}`}}).select('designation period_yr')
    res.send(neas)
})



router.post('/create', async (req,res) => {
    const neas = new Neas (req.body)

    const newNeas = await neas.save()

    res.send(newNeas)
})


router.put('/edit/:designation', async(req, res) => {
    const neas = await Neas.findOneAndUpdate({designation: req.params.designation}, req.body)

    res.send(neas)
})

module.exports = router