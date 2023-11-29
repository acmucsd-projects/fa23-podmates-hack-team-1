import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';

axios.defaults.withCredentials = true;
/*
    i just copied and pasted the google sign in button functionality
    we need to edit the useGoogleLogin params so that
    1. if the email is a @ucsd.edu & hasn't been registered yet in our database, 
    we enable the > button & when the user clicks it, it calls nextStep
    2. if the email has been registered in our database, navigate to home
    3. if the email isn't a @ucsd.edu, we return the necessary feedback
*/
export default function GoogleSignUpForm({user, setUser, childchildUser}) {
  const [feedback, setFeedback] = useState('');
  const [isValid, setIsValid] = useState(false);
  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse)
      axios.get("https://oauth2.googleapis.com/tokeninfo?access_token="+tokenResponse.access_token, {withCredentials: false})
    .then((response) => {
      console.log(typeof response.data.email);
      var res = response.data.email;
      childchildUser(res);
      setFeedback("Google Login Successful");
    })
    .catch((error) => {
      console.log(error);
      setFeedback("Google sign up failed");
    })
  },
    onError: () => {
    console.log('Google SignUp failed') 
    setFeedback('Google sign up failed');
  },

    // ...other options
  }); 


  return (
    <div>
        <h1>Student Verification</h1>
        <p>Log in to your UC San Diego email to continue.</p>
        {feedback ? <p className="feedback">{feedback}</p> : null}
        <button className="gsi-material-button" style={{ width: '300px' }} onClick={(e) => (e.preventDefault(), googleLogin())}>
            <div className="gsi-material-button-state"></div>
            <div className="gsi-material-button-content-wrapper">
                <div className="gsi-material-button-icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: 'block' }}>
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                </div>
                <span className="gsi-material-button-contents">Sign up with Google</span>
                {/* This span seems to be for screen readers or similar, ensure this is handled correctly in your accessibility considerations */}
                <span style={{ display: 'none' }}>Sign up with Google</span>
            </div>
        </button>
    </div>
  );
}