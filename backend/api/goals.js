const express = require('express')
const router = express.Router()

const app = express()

const Goal = require('../models/Goal')

router.get( '/test', ( req, res ) => res.json({ message: "backend works" }))

router.get('/', ( req, res ) => {
    Goal.find()
        .then(info => res.json(info))
        .catch(err => res.status(402).json({message: "no goals found"}))
})

// need to change this to include motivation and strategy
router.post('/', ( req, res ) => {
    const newGoal = new Goal({
        title: req.body.title
    })

    newGoal.save().then(info => res.json(info))
})

router.delete('/', ( req, res ) => {
    Goal.findOneAndRemove({_id: req.body.id}).then(() => {
        res.json({ success: true })
    })
})

router.post('update/:id', ( req, res ) => {
    Goal.findOneAndUpdate(
        {_id: req.params.id},
        {
            $set: {
                title: req.body.title
            }
        },
        {new: true},
    )
        .then(info => {
            res.json(info)
        })
        .catch(err => res.status(400).json({ message: "update failed"}))
})

module.exports = router