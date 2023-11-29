"use client"
import './sign-up-google.css';
import GoogleSignUp from '@/app/components/SignUp/GoogleSignUpForm/SignUp';
import Link from 'next/link';
export default function signUpGoogle(){
    return(
        <div className="sign-in-container">
            <div className="left-container">
                <></>
            </div>
            <div className="right-container">
                <div className='return-container'>
                        <Link className='sign-in' href='/sign-in'>{`<`} Back to Sign In </Link>
                    </div>
                <GoogleSignUp/>
            </div>
        </div>
    );
}