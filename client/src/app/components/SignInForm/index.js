import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import {useRouter} from 'next/navigation';
import './SignInForm.css';
import axios from 'axios';
import Login from "../GoogleSignIn/Login";
//import { redirect } from "next/dist/server/api-utils";
export default function SignInForm() {
    const [user, setUser] = useState({
        email:'', 
        password:''
    });

    const [hidePassword, setHidePassword] = useState(true); 
    const [feedback, setFeedback] = useState(); 
    const { push } = useRouter();
    /*
        need the get requests form backend... i personally don't know how
        calling it works so i'm waiting to see what it looks like on the backend.
        we definitely need to implement this function for checking backend though!
    */
    const handleUserLogIn = async (e) => {
        e.preventDefault();
        axios.get('http://localhost:5000/auth', {
            params: {
                username: user.email,
                password: user.password
        }
        }, {withCredentials: true})
        .then((response) => {
            setFeedback('login sucessful');
            console.log(response);
            push('/');
        })
        .catch((error)=>{
            console.log(error);
            setFeedback('Login failed, try again');
        })
        .finally(()=>{
            console.log("response received");
        })
        //...need to check** username & password in our database here, should also be an async await function
        /* 
            ignore this isValidUser thing for now...
            i only have it to see what the feedback looks like in the form container 

            actual code should just setFeedback to some msg if the get rq catches an error or no user found
        */
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