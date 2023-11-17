const mongoose = require('mongoose');

const lifestyle = new mongoose.Schema (
    {
        Chronotype: {
            type: String,
            required: false,
        },
        cleanliness: {
            type: String,
            required: false,
        },
    }
);

module.exports = lifestyle;