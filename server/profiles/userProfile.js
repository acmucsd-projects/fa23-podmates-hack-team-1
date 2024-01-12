const mongoose = require('mongoose');
const apartmentPreferences = require('./apartmentPreferences');
const lifestyle = require('./lifestyle');
const onCampus = require('./onCampus');
const offCampus = require('./offCampus');
//forgot email --> deal with fetching email from database grab email and send link
//deal with images and how to get/post request it/ test using console.log

const UserProfileSchema = new mongoose.Schema(
    {
        password: {
            type: String,
            required: true,
            message: 'Please enter a new password to log into your account'
            //deal with encryption here maybe? can make validator to deal with length of password and the characters
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        birthday: { //change to birthday :D
            type: Date,
            required: true, 

            // frontend already checks to make sure they're of age upon account creation

            // validate: { //to ensure you input an age older than 17; how to deal with consent if you are minor?
            //     validator: function(value) {
            //         return value >= 18
            //     },
            //     message: 'Age must be greater than 18'
            // }            
        },
        image: { //make it so 6 max photos of themselves 
            type: String,
            required: false,    
        },
        pronouns: {
            type: Object,
            required: false,
        },
        gender: { //add validator if you wanna show
            type: Object, 
            required: true,
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
        location: {
            type: String,
            required: true,
        },
        onCampus:{
            type: [onCampus],
            required: false,
        },
        offCampus: {
            type:[offCampus],
            required: false,
        }

    }
);

//defining interface/class
const UserProfile = mongoose.model('User', UserProfileSchema);

//exporting
module.exports = UserProfile;