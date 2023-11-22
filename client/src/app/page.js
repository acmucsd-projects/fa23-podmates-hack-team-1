"use client"
import styles from './page.module.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
export default function App() {
const [user, setUser] = useState({});
useEffect(() => {
  async() => {
    axios.get("http://localhost:5000/isAuth")
    .then((response) =>{
      console.log(response.user);
    })
    
    
  }
})
  return (
    <main>
        <h1>Home Page</h1>
    </main>
  )
}
