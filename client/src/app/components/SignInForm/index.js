import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './SignInForm.css';
export default function SignInForm() {
    const [user, setUser] = useState({
        email:'', 
        password:''
    });
    const [hidePassword, setHidePassword] = useState(true); //whether they see pass or not
    const [validUser, setValidUser] = useState(true); 
    
    const handleUserLogIn = (e) => {
        e.preventDefault(); //check if matches in database
        //...need to check** username & password in our database here, should also be an async await function
        return true;
    }
    const handlePasswordVisibility = (e) => {
        e.preventDefault();
        setHidePassword(!hidePassword);
    }
    console.log(user);
    return(
        <div>
            <form>
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
                                <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size="m"/>
                            </button>
                        </div>
                    </label>
                </div>

                <button type='submit' className="sign-in-btn" onClick={handleUserLogIn}>Sign In</button>
            </form>
        </div>
    );
}