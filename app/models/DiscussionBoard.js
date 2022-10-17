const mongoose = require('mongoose');

const DboardSchema = new mongoose.Schema({
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',

    },

    message: {
        type: String,
        required: true,
    },
    replies: {
        type: String
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Message', DboardSchema);