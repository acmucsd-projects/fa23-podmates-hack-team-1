import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './SignInForm.css';
import Login from "../GoogleSignIn/Login";
export default function SignInForm() {
    const [user, setUser] = useState({
        email:'', 
        password:''
    });
    const [hidePassword, setHidePassword] = useState(true); 
    const [feedback, setFeedback] = useState(); 
    /*
        need the get requests form backend... i personally don't know how
        calling it works so i'm waiting to see what it looks like on the backend.
        we definitely need to implement this function for checking backend though!
    */
    const handleUserLogIn = async (e) => {
        e.preventDefault();
        //...need to check** username & password in our database here, should also be an async await function
        /* 
            ignore this isValidUser thing for now...
            i only have it to see what the feedback looks like in the form container 

            actual code should just setFeedback to some msg if the get rq catches an error or no user found
        */
        const isValidUser = true;


        
        if(isValidUser) {
            setFeedback('Wrong email or password credentials. Please try again.');
        }
    }
    const handlePasswordVisibility = (e) => {
        e.preventDefault();
        setHidePassword(!hidePassword);
    }
    return(
        <div>

            <form>
                {feedback ? <p className="feedback">{feedback}</p> : null}
                <div className='input-container'>
                    <label>
                        Email<br/>
                        <input 
                            type="text" 
                            className='sign-in-input' 
                            value={user.email} 
                            onChange={(e) => setUser({...user,email: e.target.value})}
                        />
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        Password <br/>
                        <div className='password-input-container'>
                            <input 
                                type={hidePassword ? "password" : "text"} 
                                className='sign-in-input' 
                                value={user.password} 
                                onChange={(e) => setUser({...user,password: e.target.value})}
                            />

                            <button 
                                type='toggle-btn' 
                                className="visibility-btn"
                                onClick={handlePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size="xl"/>
                            </button>
                        </div>
                    </label>
                </div>

                <button type='submit' className="sign-in-btn" onClick={handleUserLogIn}>Sign in</button>
                <Login/>
            </form>
        </div>
    );
}