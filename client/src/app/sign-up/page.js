"use client"
import { useEffect, useState } from 'react';
import ProfileSignUpForm from '../components/SignUp/ProfileSignUpForm';
import './SignUp.css'
import SelectionPopUp from '../components/SignUp/SelectionPopUp';
import Link from 'next/link';
import GoogleSignUp from '../components/SignUp/GoogleSignUpForm/SignUp';
export default function SignUp() {
    const [user, setUser] = useState({
        password: '',
        email: '',
        name: '',
        // age in the user profile schema should be changed to birthday
        birthday: '',
        // images in user profile schema should be changed to a list
        image: [],
        pronouns: {value: '', isVisible: false},
        gender: {value: '', isVisible: false},
        bio: '',
        apartmentPreferences: {},
        lifestyle: {},
        onCampus: {},
        offCampus: {}
    });
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpType, setPopUpType] = useState('pronouns');
    const [currentStep, setCurrentStep] = useState(1);
    const [isGoogled, setIsGoogled] = useState(false);
    
    const nextStep = () => {
        if(currentStep != 4) {
            setCurrentStep(currentStep+1);
        }
    }
    const previousStep = () => {
        if(currentStep != 1) {
            setCurrentStep(currentStep-1);
        }
    }
    console.log('Show pop up: ', showPopUp);
    console.log('Pop up type: ', popUpType);
    return(
        <div>
               {showPopUp && (
                <>
                    <div className="overlay"></div>
                    <SelectionPopUp user={user} setUser={setUser} type={popUpType} setShowPopUp={setShowPopUp}/>
                </>
            )}
            <div className="sign-up-container">
                <div className="left-container">
                    <></>
                </div>
                <div className="right-container">
                    <div className='return-container'>
                        <Link className='sign-in' href='/sign-in'>{`<`} Back to Sign In </Link>
                    </div>
                    <h1>Create an account</h1>
                    
                    {
                       isGoogled ? <ProfileSignUpForm user={user} setUser={setUser} setShowPopUp={setShowPopUp} setPopUpType={setPopUpType}/>
                       : <GoogleSignUp user={user} setUser={setUser}  setIsGoogled={setIsGoogled} />
                    }
                </div>
            </div>
        </div>
    );
}