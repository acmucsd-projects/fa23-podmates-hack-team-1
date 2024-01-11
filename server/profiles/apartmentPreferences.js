const mongoose = require('mongoose');

const apartmentPreferences = new mongoose.Schema(
    {
        numberOfDesiredRoommates: {
            type: String,
            required: true,
        },
        pets: {
            type: String,
            required: true,
        },
        alcoholUsage: {
            type: String,
            required: true,
        },
        drugUsage: {
            type: String, 
            required: true,
        },
        smokingUsage: {
            type: String, 
            required: true,
        },        
        genderInclusiveHousing: {
            type: String,
            required: true,
        },
        LBGTQfriendly: {
            type: String,
            required: false,
        },
        religion: {
            type: String,
            required: false,
        },
        politics: {
            type: String,
            required: false,
        },
        socialActiveness: { 
            type: String,
            required: false,
        }

    }
);

//exports to userProfile
module.exports = apartmentPreferences;