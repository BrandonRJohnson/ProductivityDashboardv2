const express = require('express')
const router = express.Router()

const app = express()

const Epic = require('../models/Epic')

router.get('/', ( req, res ) => {
    Epic.find()
        .then(info => res.json(info))
        .catch(err => res.status(402).json({message: "no epics found"}))
})

//need to change the post to include the new epic params
router.post('/', ( req, res ) => {
    const newEpic = new Epic({
        title: req.body.title,
        tickets: req.body.tickets,
        description: req.body.description
    })

    newEpic.save().then(info => res.json(info))
})

router.delete('/', ( req, res ) => {
    Epic.findOneAndRemove({_id: req.body.id}).then(() => {
        res.json({ success: true })
    })
})

router.post('/update/:id', ( req, res ) => {
    Epic.findOneAndUpdate(
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