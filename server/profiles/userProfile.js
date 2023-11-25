const mongoose = require('mongoose');
const apartmentPreferences = require('./apartmentPreferences');
const lifestyle = require('./lifestyle');
const onCampus = require('./onCampus');
const offCampus = require('./offCampus');


const UserProfileSchema = new mongoose.Schema(
    {
        //add user/password
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: false, //change later
            required: false,
        },
        name: {
            type: String,
            required: false,
        },
        age: {
            type: Number,
            required: false, 
        },
        image: {
            type: String,
            required: false,
        },
        pronouns: {
            type: String,
            required: false,
        },
        gender: {
            type: String, 
            required: false,
        },
        bio: {
            type: String,
            required: false,
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