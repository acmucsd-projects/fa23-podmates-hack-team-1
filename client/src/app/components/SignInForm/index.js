import { useState, useEffect } from "react";

export default function SignInForm() {
    const [user, setUser] = useState({
        username:'', 
        password:''
    });
    
    const handleUserLogIn = (e) => {
        e.preventDefault();
        //...need to store username & password in our database here, should also be an async await function
    }
    // should add another label & input for user password
    // to add css to the different items, just add className='' blah blah blah
    return(
        <div>
            <form>
                <label>
                    Username
                    <input type="text" className='sign-in-input' value={user.username} onChange={(e) => setUser({...user,username: e.target.value})}/>
                </label>

                <button type='submit' onChange={handleUserLogIn}>Sign In</button>
            </form>
        </div>
    );
}