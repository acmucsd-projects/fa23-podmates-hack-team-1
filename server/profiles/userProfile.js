const mongoose = require('mongoose');
const apartmentPreferences = require('./apartmentPreferences');
const lifestyle = require('./lifestyle');
const onCampus = require('./onCampus');
const offCampus = require('./offCampus');
//forgot email --> deal with fetching email from database grab email and send link
//deal with images and how to get/post request it/ test using console.log

const UserProfileSchema = new mongoose.Schema(
    {
        //add user/password
        username: {
            type: String,
            unique: true,
            required: true,
            message: 'Please reenter your email you used to sign up previously as your username'
        },
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
        age: { //change to birthday :D
            type: Number,
            required: true, 
            validate: { //to ensure you input an age older than 17; how to deal with consent if you are minor?
                validator: function(value) {
                    return value >= 18
                },
                message: 'Age must be greater than 18'
            }            
        },
        image: { //make it so 6 max photos of themselves 
            type: String,
            required: false,    
        },
        pronouns: {
            type: String,
            required: false,
        },
        gender: { //add validator if you wanna show
            type: String, 
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
            type: mongoose.Schema.Types.Mixed, //allows for either on or off campus
            validate: {
                validator: function() {
                    return !(this.location.onCampus && this.location.offCampus) && (this.location.onCampus || this.location.offCampus);
                },
                message: 'Please provide your current location for the school year. You can provide either on or off campus but not both.'
            }
        },
        onCampus:{
            type: [onCampus],
            required: false,
        },
        offCampus: {
            type:[offCampus],
            required: false,
        },
        likesSent: {
            type:[String],
            required: false,
        },
        likesReceived: {
            type:[String],
            required: false
        },
        likesMutual: {
            type:[String],
            required: false
        }

    }
);

//defining interface/class
const UserProfile = mongoose.model('User', UserProfileSchema);

//exporting
module.exports = UserProfile;