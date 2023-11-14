const mongoose = require('mongoose');

const apartmentPreferences = new mongoose.Schema(
    {
        numberOfDesiredRoommates: {
            type: Number,
            required: true,
        },
        pets: {
            type: Boolean,
            required: true,
        },
        alcoholUsage: {
            type: Boolean,
            required: true,
        },
        drugUsage: {
            type: Boolean, 
            required: true,
        },
        smokingUsage: {
            type: Boolean, 
            required: true,
        },
        LBGTQfriendly: {
            type: Boolean,
            required: false,
        },
        religion: {
            type: String,
            required: false,
        },
        sexualOrientation: {
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
        },
        extraOrSpecificRequirements: {
            type: String,
            required: false,
        },
        genderInclusiveHousing: {
            type: Boolean,
            required: false,
        },


    }
);

//exports to userProfile
module.exports = apartmentPreferences;