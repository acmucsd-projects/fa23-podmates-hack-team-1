"use client"
import './SignUp.css'
import { useEffect, useState } from 'react';
import ProfileSignUpForm from '../components/SignUp/ProfileSignUpForm';

import SelectionPopUp from '../components/SignUp/SelectionPopUp';
import Link from 'next/link';
import GoogleSignUp from '../components/SignUp/GoogleSignUpForm/SignUp';
import OnCmpusForm from '../components/SignUp/OnCampusForm';
import OffCmpusForm from '../components/SignUp/OffCampusForm';
import OffOrOnCampusForm from '../components/SignUp/OffOrOnCampusForm';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import LifestyleForm from '../components/SignUp/LifestyleForm';
import ApartmentPreferencesForm from '../components/SignUp/ApartmentPreferences';
import axios from 'axios';

export default function SignUp() {
    const [user, setUser] = useState({
        password: '',
        email: '',
        name: '',
        // age in the user profile schema should be changed to birthday
        birthday: null,
        image: '',
        pronouns: {value: '', isVisible: false},
        gender: {value: '', isVisible: false},
        bio: '',
        apartmentPreferences: {
            numberOfDesiredRoommates: '',
            pets: '',
            alcoholUsage: '',
            drugUsage: '',
            smokingUsage: '',        
            genderInclusiveHousing: '',
            LBGTQfriendly: '',
            religion: '',
            politics: '',
            socialActiveness: ''
        },
        lifestyle: {cleanliness: null, chronoType: ''},
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
        // post user call goes here
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http:localhost:3000';
        axios.post('http://localhost:5000/regUser',{withCredentials: false},user)
        .then((response) => {
            console.log(response);
            console.log('user created!');
        })
        .catch((error) => {
            console.log(error);
        })
        const userData = {
            username: user.email.replace('@ucsd.edu', ''),
            ...user
        }

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
                            <h1>Housing Quirks</h1>
                            <ApartmentPreferencesForm
                                user={user}
                                setUser={setUser}
                                previousStep={previousStep}
                                nextStep={nextStep} 
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
                            <h1>Personalization</h1>
                            <LifestyleForm
                                user={user}
                                setUser={setUser}
                                previousStep={previousStep}
                                handleSubmitForm={handleSubmitForm}
                            />
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