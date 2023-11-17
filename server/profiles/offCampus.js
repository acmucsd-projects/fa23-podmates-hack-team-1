const mongoose = require('mongoose');

const offCampus = new mongoose.Schema(
    {
        budget: {
            type: Number,
            required: false,
        },
        distanceFromCampus: {
            type: Number,
            required: false,
        },
        creatingGroup: {
            type: Boolean, 
            required: false,
        },
        lookingForResident: {
            type: Boolean,
            required: false, 
        },
        leaseStart: {
            type: Date,
            required: false,
        },
        leaseEnd: {
            type: Date,
            required: false,
        }
    }
);

module.exports = offCampus;