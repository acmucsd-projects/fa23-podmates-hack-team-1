//this file deals with the post/get requests for the database to the server
const UserProfile = require('../profiles/userProfile');

const getUserProfile = async (req, res) => {
    try {
        //const userEmail = req.query.email; (i think ima need this for specific
        // user profile email) ask jim later
        /**fetches user profiles from the database */
        const profile = await UserProfile.find();
        /**checks if there is no profile found*/
        if(profile.length === 0) {
            res.status(404).json({ message: 'No user profiles found' });
        }
        /** profile found! */
        else {
            res.status(200).json(profile);
        }
    }
    /**
     * catch part is here to show internal server error in case the request time is too long 
     * and it fails to retrieve the data we requested to get E.g. things like 
     * database connection errors, timeouts, other problems we dunno about
     */
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error: Unable to retrieve user profiles'});
    }
}
/**creates new user account 
 * to do: after create account need to deal with new user/password encryption; ask jim
 * 
*/
const postUser = async (req, res) => {
    try {
        /* req.body parses and retrieves data necessary to create profile from client side */
        const userData = req.body;
        const newProfile = await UserProfile.create(userData);
        res.status(201).json({message: 'User profile created successfully!', profile: newProfile});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error: Could not create new user profile' });
    }
    
}

/**request to deal with updating user profiles (I think we do put/patch requests) */



/**request to delete/remove user profiles (Delete request) */


/** */





module.exports = {getUserProfile, postUser};