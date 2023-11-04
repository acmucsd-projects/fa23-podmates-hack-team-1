import React, { useEffect, useState } from 'react';
import { GoogleLogin, googleLogout, useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import ManageUser from '../ManageUser'; 

function decodeJwtResponse(response){
    return jwtDecode(JSON.stringify(response));
  }
  
function loginErr(){
   return (<h2>Login failure, please wait a moment and try again</h2>);
  }

//hopefully this work
function Login(){

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
    

    useGoogleOneTapLogin({
      onSuccess:  responseMessage
      ,
      onError: () => {
        console.log('Login Failed');
      },
    });

    return (<div className='content'>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            {user && ManageUser(user)}
    </div>)    
}


export default Login;