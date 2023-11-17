
import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider, googleLogout, useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import ManageUser from './ManageUser'; 
import './Login.css'
import SignInWithGoogle from './GoogleSignIn';
function decodeJwtResponse(response){
    return jwtDecode(JSON.stringify(response));
  }
  
function loginErr(){
   return (<h2>Login failure, please wait a moment and try again</h2>);
  }

function Login(){
    const clientId = '1004028449793-8h4ogk869ml8e181bpvgv0ohhtvlnt4p.apps.googleusercontent.com';
    const [user,setUser] = useState(null);
    const responseMessage = (response) => {
      const text = decodeJwtResponse(response);
      setUser({'email':text.email, 'firstName': text.given_name,'lastName': text.family_name,'defaultPic': text.picture})
      console.log(text);
  };
    const errorMessage = (error) => {
        loginErr();
    };

    const logOut = () => {
      googleLogout();
      setUser(null);
    }
    

    // useGoogleOneTapLogin({
    //   onSuccess:  responseMessage,
    //   onError: () => {
    //     console.log('Login Failed');
    //   },
    // });


    // const login = useGoogleLogin({
    //   onSuccess: tokenResponse => console.log(tokenResponse),
    // });


    return (
      <div className='content'>
        <GoogleOAuthProvider clientId={clientId}>
            <SignInWithGoogle/>
            {user && ManageUser(user)}
          </GoogleOAuthProvider>
        </div>
    )    
}


export default Login;