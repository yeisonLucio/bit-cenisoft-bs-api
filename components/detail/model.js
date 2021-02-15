const { Schema } = require('mongoose');

const detail = new Schema({

    idBook: {
        type: Schema.Types.ObjectId, 
        ref: 'books'
    },
    bookName: {
        type: String,
        required: [true, "bookName is required"]
    },
    unitValue: {
        type: Number,
        required: [true, "unitValue is required"]
    },
    amount: {
        type: Number,
        required: [true, "amount is required"]
    }
})

module.exports = {detail};