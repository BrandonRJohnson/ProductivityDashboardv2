const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GoalSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    motivation: {
        type: String,
        required: false
    },

    strategy: {
        type:String,
        required: false
    }
})

module.exports = Goal = mongoose.model('goal', GoalSchema)