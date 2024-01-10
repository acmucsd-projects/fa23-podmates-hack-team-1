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
            type: String, //double, single, triple
            required: true,
        },
        roommateType: {
            type: String, //are you looking for suitemates or roommates? 
            required: true
        },
        numberofDesiredRoommates: {
            type: Number,
            required: false
        },
        numberofDesiredSuitemates: {
            type: Number,
            required: false
        },
        suitematePreference: {
            type: String,
            required: false
        },
        roommatePreference: {
            type: String,
            required: false
        }
    }
);
//first check to see if both are looking for thing, then have weights and compare to see how similiar they are

module.exports = onCampus;