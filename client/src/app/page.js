"use client"
import styles from './page.module.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
export default function App() {
const [user, setUser] = useState({});
useEffect(() => {
    axios.get("http://localhost:5000/isAuth", {withCredentials: true})
    .then((response) =>{
      console.log(response);
      setUser(response);
      console.log('isAuth running')
    })
    .catch((error) => {
      console.log(error);
    })
    
}, [])
  return (
    <main>  
        <h1>Home Page</h1>
        <p>this is a WIP!</p>
        <Link href='sign-in'>Sign In</Link> <br/>
        <Link href='sign-up'>Sign Up</Link>
    </main>
  )
}
