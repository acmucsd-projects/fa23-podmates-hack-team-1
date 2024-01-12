"use client"
import "./SignIn.css"
import Login from "@/app/components/GoogleSignIn/Login";
import SignInForm from "@/app/components/SignInForm";

import Link from "next/link";

export default function SignIn() {
    return(
        <div className="sign-in-container">
            <div className="left-container">
                <></>
            </div>
            <div className="right-container">
                <h1>Welcome to Door Hinge</h1>
                <SignInForm/>
                <Link className='forgot-password' href='/forgot-password'>Forgot Password?</Link>
                <div className="sign-up-link">
                    <p>Don't have an account? </p>
                    <Link className='sign-up' href='/sign-up'>Sign Up Here</Link>
                </div>
            </div>
        </div>
    );
}