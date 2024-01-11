const mongoose = require('mongoose');

const lifestyle = new mongoose.Schema (
    {
        Chronotype: { //if u are morning or night person
            type: String,
            required: false,
        },
        cleanliness: {
            type: Number,
            required: false,
        },
    }
);

module.exports = lifestyle;