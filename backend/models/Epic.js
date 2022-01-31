const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EpicSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    tickets: {
        type: Array,
        required: false
    },

    description: {
        type: String,
        required: false
    },

})

module.exports = Epic = mongoose.model('epic', EpicSchema)