"use client"

import Login from "@/app/components/GoogleSignIn/Login";
import SignInForm from "@/app/components/SignInForm";
import "./SignIn.css"
import Link from "next/link";

export default function SignIn() {
    return(
        <div className="sign-in-container">
            <div className="left-container">
                <></>
            </div>
            <div className="right-container">
                <h1>Insert Logo Here</h1>
                <SignInForm/>
                <Link className='forgot-password' href='/forgot-password'>Forgot Password?</Link>
                <div className="sign-up-container">
                    <p>Don't have an account? </p>
                    <Link className='sign-up' href='/sign-up'>Sign Up Here</Link>
                </div>
            </div>
        </div>
    );
}