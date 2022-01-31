const express = require('express')
const List = require('../../models/List')
const router = express.Router()

const app = express()

const Goal = require('../../models/List')

router.get( '/test', ( req, res ) => res.json({ message: "backend works" }))

router.get('/', ( req, res ) => {
    List.find()
        .then(info => res.json(info))
        .catch(err => res.status(402).json({message: "no goals found"}))
})

// need to change this to include motivation and strategy
router.post('/', ( req, res ) => {
    const newList = new List({
        title: req.body.title,
        description: req.body.description
    })

    newList.save().then(info => res.json(info))
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