const mongoose = require('mongoose');

const onCampus = new mongoose.Schema(
    {
        buildingPref: {
            type: String,
            required: false,
        },
        ucsdCollege: {
            type: String,
            required: false,
        },
        roomType: {
            type: String,
            required: false
        },
        roommateType: {
            type: String,
            required: false
        }
    }
);

module.exports = onCampus;