const mongoose = require('mongoose');
const apartmentPreferences = require('./apartmentPreferences');
const lifestyle = require('./lifestyle');
const onCampus = require('./onCampus');
const offCampus = require('./offCampus');

const UserProfileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true, 
        },
        image: {
            type: String,
            required: false,
        },
        pronouns: {
            type: String,
            required: true,
        },
        gender: {
            type: String, 
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
        apartmentPreferences:{
            type: [apartmentPreferences],
            required: false,
        },
        lifestyle:{
            type: [lifestyle],
            required: false,
        },
        onCampus:{
            type: [onCampus],
            required: false,
        },
        offCampus: {
            type:[offCampus],
            required: false,
        },

    }
);

//defining interface/class
const UserProfile = mongoose.model('User', UserProfileSchema);

//exporting
module.exports = UserProfile;