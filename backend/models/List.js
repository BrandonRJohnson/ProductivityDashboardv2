const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    },

    isUrgent: {
        type: Boolean,
        required: false
    }

})

module.exports = List = mongoose.model('list', ListSchema)