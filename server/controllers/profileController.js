//this file deals with the post/get requests for the database to the server
const UserProfile = require('../profiles/userProfile');

const getUserProfile = async (req, res) => {
    const profile = await UserProfile.find();
    res.status(200).json(profile);
}

const postUser = async (req, res) => {
    const newProfile = await UserProfile.create();
    res.status(200).json(newProfile);
}


module.exports = {getUserProfile, postUser};