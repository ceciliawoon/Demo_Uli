const mongoose = require ('mongoose')

const ExpTemplate = new mongoose.Schema({
    Transport:{
        type: String,
        required: true
    },
    Shopping:{
        type: String,
        required: true
    },
    Dining:{
        type: String,
        required: true
    },
  
    date:{
        type: Date,
		default: Date.now,
    }
})

module.exports = mongoose.model('myspendtable',ExpTemplate)
