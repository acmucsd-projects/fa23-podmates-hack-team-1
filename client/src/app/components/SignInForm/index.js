import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './SignInForm.css';
export default function SignInForm() {
    const [user, setUser] = useState({
        username:'', 
        password:''
    });
    const [hidePassword, setHidePassword] = useState(true);
    const [validUser, setValidUser] = useState(true);
    
    const handleUserLogIn = (e) => {
        e.preventDefault();
        //...need to check** username & password in our database here, should also be an async await function
        return true;
    }
    const handlePasswordVisibility = (e) => {
        e.preventDefault();
        setHidePassword(!hidePassword);
    }
    console.log(user);
    // should add another label & input for user password
    // to add css to the different items, just add className='' blah blah blah
    return(
        <div>
            <form>
                <label>
                    Username<br/>
                    <input type="text" className='sign-in-input' value={user.username} onChange={(e) => setUser({...user,username: e.target.value})}/>
                </label> <br/>
                <label>
                    Password <br/>
                    <input type={hidePassword ? "password" : "text"} className='sign-in-input' value={user.password} onChange={(e) => setUser({...user,password: e.target.value})}/>
                </label>
                <button type='toggle-btn' className="visibility-btn"onClick={handlePasswordVisibility}>
                    <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size="2xs"/>
                </button> <br/>
                <button type='submit' className="sign-in-btn" onClick={handleUserLogIn}>Sign In</button>
            </form>
        </div>
    );
}