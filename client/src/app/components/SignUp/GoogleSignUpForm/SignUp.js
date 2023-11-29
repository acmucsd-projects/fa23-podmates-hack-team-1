
import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider, googleLogout, useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import GoogleSignUpForm from '.';
import './signUp.css';
  

function GoogleSignUp({user, setUser, childUser}){
    const clientId = '1004028449793-8h4ogk869ml8e181bpvgv0ohhtvlnt4p.apps.googleusercontent.com';
    function childchildUser(email){
      childUser(email);
    }
    return (
      <div className='content'>
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleSignUpForm user={user} setUser={setUser} childchildUser = {childchildUser}/>
          </GoogleOAuthProvider> 
        </div>
    )    
}


export default GoogleSignUp;