const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EpicSchema = new Schema({
    project: {
        type: String,
        required: true
    },

    tickets: [
        {
          id: {
            type: String,
          },
          issue: {
            type: String,
          },
        },
      ],

    description: {
        type: String,
        required: false
    },

})

module.exports = Epic = mongoose.model('epic', EpicSchema)