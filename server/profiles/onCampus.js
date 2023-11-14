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
        roommateSearch: {
            type: Boolean,
            required: false
        }
    }
);

module.exports = onCampus;