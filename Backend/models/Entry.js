const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
    }
});
 

module.exports = mongoose.model("Entry",entrySchema);