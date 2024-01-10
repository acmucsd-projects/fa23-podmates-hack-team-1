"use client"
import './SignUp.css'
import { useEffect, useState } from 'react';
import ProfileSignUpForm from '../components/SignUp/ProfileSignUpForm';

import SelectionPopUp from '../components/SignUp/SelectionPopUp';
import Link from 'next/link';
import GoogleSignUp from '../components/SignUp/GoogleSignUpForm/SignUp';
import OnCmpusForm from '../components/OnCampusForm';
import OffCmpusForm from '../components/OffCampusForm';
import OffOrOnCampusForm from '../components/SignUp/OffOrOnCampusForm';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import LifestyleForm from '../components/SignUp/LifestyleForm';
        
export default function SignUp() {
    const [user, setUser] = useState({
        password: '',
        email: '',
        name: '',
        // age in the user profile schema should be changed to birthday
        birthday: null,
        // images in user profile schema should be changed to a list
        image: [],
        pronouns: {value: '', isVisible: false},
        gender: {value: '', isVisible: false},
        bio: '',
        apartmentPreferences: {},
        lifestyle: {},
        location: '',
        onCampus: { 
            buildingPref: '',
            ucsdCollege: '',
            roomType: '',
            roommateType: ''
        },
        offCampus: {        
            budget: null,
            distanceFromCampus: null,
            creatingGroup: null,
            lookingForResident: null,
            leaseStart: null,
            leaseEnd: null
        }
    });

    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpType, setPopUpType] = useState('pronouns');
    const [currentStep, setCurrentStep] = useState(1);
    const [isGoogled, setIsGoogled] = useState(false);
    const [isOnCampus, setIsOnCampus] = useState(false);
    const [canSubmitForm, setCanSubmitForm] = useState(false); 
    
    const nextStep = () => {
        if(currentStep != 6) {
            setCurrentStep(currentStep+1);
        }
    }
    const previousStep = () => {
        if(currentStep != 1) {
            setCurrentStep(currentStep-1);
        }
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        
    }
    console.log('current step: ', currentStep);

    console.log('user: ', user);
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
                    
                    {
                        currentStep == 1 ?
                        <>
                            <GoogleSignUp 
                                user={user} 
                                setUser={setUser} 
                                isGoogled={isGoogled} 
                                setIsGoogled={setIsGoogled} 
                                nextStep={nextStep}
                            />
                        </>
                        :
                        <>
                        </>
                    }
                    {
                       currentStep == 2 ?
                        <>
                            <h1>Create an account</h1>
                            <ProfileSignUpForm 
                                user={user} 
                                setUser={setUser} 
                                setShowPopUp={setShowPopUp} 
                                setPopUpType={setPopUpType} 
                                currentStep={currentStep} 
                                nextStep={nextStep} 
                                previousStep={previousStep}
                            />
                        </>
                       :
                       <>
                       </>   
                    }
                    {
                       currentStep == 3 ?
                        <>
                            <h1>Choose your Housing Preferences</h1>
                            <OffOrOnCampusForm
                                user={user}
                                setUser={setUser}
                                setIsOnCampus={setIsOnCampus}
                                nextStep={nextStep}
                                previousStep={previousStep}
                            />
                        </>
                       :
                       <>
                       </>   
                    }
                    {
                        currentStep == 4 ?
                            isOnCampus ? 
                            <>
                                <h1>Choose your Housing Preferences</h1>
                                <OnCmpusForm
                                    user={user} 
                                    setUser={setUser} 
                                    nextStep={nextStep} 
                                    previousStep={previousStep}
                                />
                            </> 
                            : 
                            <>
                                <h1>Choose your Housing Preferences</h1>
                                <OffCmpusForm
                                    user={user} 
                                    setUser={setUser} 
                                    nextStep={nextStep} 
                                    previousStep={previousStep}
                                />
                            </>
                        :
                        <></>
                    }
                    {/* apartment preferences form should go here */}
                    {
                        currentStep == 5 ?
                        <>
                            <h1>Personalization</h1>
                            <LifestyleForm
                                user={user}
                                setUser={setUser}
                                previousStep={previousStep}
                            />
                        </>
                        :
                        <>
                        </>
                    }
                    {/* lifestyle preferences form should go here */}
                    {
                        currentStep == 6 ?
                        <>
                        </>
                        :
                        <>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}