'use client'

import axios from 'axios';
import {useState, useEffect} from 'react';
import LandingNavbar from '../components/NavBar';

export default function Explore() {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);
      useEffect(() => {
          axios.get("http://localhost:5000/isAuth", {withCredentials: true})
          .then((response) =>{
            console.log(response);
            setUser(response);
            console.log('isAuth running')
            setIsAuth(true);
    
          })
          .catch((error) => {
            console.log(error);
            setIsAuth(false);
          })
          
      }, [user, isAuth]);
    return(
        <div>
            <LandingNavbar isLanding={!isAuth} user={user}/>
            <div>
                <h1>Explore</h1>
            </div>

        </div>
    );
}