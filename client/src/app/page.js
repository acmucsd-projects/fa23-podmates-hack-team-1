"use client"
import './landing.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import LandingNavbar from './components/NavBar';
import Link from 'next/link';
import { Button } from 'primereact/button';
export default function App() {
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

  return (
    <main>  
        <LandingNavbar isLanding={!isAuth} user={user}/>
        <div className='home-container'>
          <div className='left'>
            <img src="/favicon.png" alt="Homepage" />
          </div>
          <div className='right'>
            <h2>Welcome to</h2>
            <h1>Door Hinge</h1>
            <Button><Link href='sign-up' className='button-link'>Create an account</Link></Button>
          </div>
        </div>
        

    </main>
  )
}
