"use client"
import styles from './page.module.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
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
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* <Route path="/" exact component={Home} />
            <Route path="/likes" component={About} /> */} {/*home component and like component?*/}
          </Switch>
        </div>
      </Router>
      
        <h1>Home Page</h1>
        <p>this is a WIP!</p>
        <Link href='sign-in'>Sign In</Link> <br/>
        <Link href='sign-up'>Sign Up</Link>
    </main>
  )
}
