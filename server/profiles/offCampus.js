const mongoose = require('mongoose');

const offCampus = new mongoose.Schema(
    {
        budget: {
            type: String,
            required: false,
        },
        distanceFromCampus: {
            type: String,
            required: false,
        },
        creatingGroup: {
            type: String, 
            required: false,
        },
        lookingForResident: {
            type: String,
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