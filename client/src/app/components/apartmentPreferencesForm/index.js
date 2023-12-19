//pain
import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme from Jake 


import { useRouter } from 'next/navigation';
import './apartmentPreferencesForm.css';
import axios from 'axios';
import Login from "../GoogleSignIn/Login";
//import { redirect } from "next/dist/server/api-utils";

export default function apartmentPreferencesForm({}) {
    /**
     * implement: everything :pepehands:
     * 
     */

    /** Manages the state of various form fields */
    const[numberOfDesiredRoomates, setNumberOfDesiredRoomates] = useState('');
    const[pets, setPets] = useState(false);
    const[alcoholUsage, setAlcoholUsage] = useState(false);
    const[drugUsage, setDrugUsage] = useState(false);
    const[smokingUsage, setSmokingUsage] = useState(false);
    const[LBGTQfriendly, setLGBTQfriendlly] = useState(false);
    const[religion, setReligionfriendly] = useState(''); 
    const[sexualOrientation, setSexualOrientation] = useState('');
    const[politics, setPolitics] = useState('');
    const[socialActiveness, setSocialActiveness] = useState('');
    const[extraOrSpecificRequirements, setExtraOrSpecificRequirements] = useState('');
    const[genderInclusiveHousing, setGenderInclusiveHousing] = useState('');

    /** Handles user interaction and updates the current state of the element into current state variables*/
    const handleNumberOfDesiredRoomatesSelection = (e) => {
        setNumberOfDesiredRoomates(e.value);
        setUser({});
    }
    const handlePets = (e) => {
        setPets(e.value);
        setUser({});
    }
    const handlealcoholUsage = (e) => {
        setAlcoholUsage(e.value);
        setUser({});
    }
    const handledrugUsage = (e) => {
        setDrugUsage(e.value);
        setUser({});
    }

    const handleSmokingUsage = (e) => {
        setSmokingUsage(e.value);
        setUser({});
    }

    const handleLBGTQFriendly = (e) => {
        setLGBTQfriendlly(e.value);
        setUser({});
    }

    const handleReligion = (e) => {
        setReligionfriendly(e.value);
        setUser({});
    }

    const handleSexualOrientation = (e) => {
        setSexualOrientation(e.value);
        setUser({});
    }

    const handleAlcohol = (e) => {
        setAlcoholUsage(e.value);
        setUser({})
    }

    const handleDrugs = (e) => {
        setDrugUsage(e.value);
        setUser({})
    }

    const handleSmoking = (e) => {
        setSmokingUsage(e.value);
        setUser({})
    }

    const handleLGBTQ = (e) => {
        setLGBTQfriendlly(e.value);
        setUser({})
    }

    const handleReligion = (e) => {
        setReligionfriendly(e.value);
        setUser({})
    }

    const handleSexualOrientation = (e) => {
        setSexualOrientation(e.value);
        setUser({})
    }

    const handlePolitics = (e) => {
        setPolitics(e.value);
        setUser({})
    }

    const handleSocialActiveness = (e) => {
        setSocialActiveness(e.value);
        setUser({})
    }

    const handleExtras = (e) => {
        setExtraOrSpecificRequirements(e.value);
        setUser({})
    }

    const handleGenderInclusive = (e) => {
        setGenderInclusiveHousing(e.value);
        setUser({})
    }



    return(
        //use input-container for css styling later
        <form>
            {/* i fix later */}
            {/* <div className ='input-container'>
                <label>
                    Number Of Desired Roomates<br />
                    !<InputText
                        value =
                    />
                </label>
            </div> */}
         
            <div className = 'input-container'>
                <label>
                    Any Pets?<br /> 
                    <Dropdown value={pets} onChange={handlePets} options={
                        ['yes',
                         'no',
                         'do not mind']
                         }
                         optionLabel='pets' placeholder='Select a preferred pet preferece' className="pet-pref" />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Alcohol Usage<br />
                    <Dropdown value={alcoholUsage} onChange={handleAlcohol} options={
                        ['yes',
                         'no',
                         'do not mind']
                         }
                         optionLabel='alcohol' placeholder='Select a preferred alcohol preferece' className="alcohol-pref" />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Drug Usage<br />
                    <Dropdown value={drugUsage} onChange={handleDrugs} options={
                        ['yes',
                         'no',
                         'do not mind']
                         }
                         optionLabel='drugs' placeholder='Select a preferred drug preferece' className="drug-pref" />
                </label>
            </div>

            <div>
                <label>
                    Smoking Usage<br />
                    <Dropdown value={smokingUsage} onChange={handleSmoking} options={
                        ['yes',
                         'no',
                         'do not mind']
                         }
                         optionLabel='smoking' placeholder='Select a preferred smoking preferece' className="smoking-pref" />
                </label>
            </div>
            <div className = 'input-container'>
                <label>
                    LBGTQ friendly<br />
                    <Dropdown value={LBGTQfriendly} onChange={handleLGBTQ} options={
                        ['yes',
                         'no',
                         'do not mind']
                         }
                         optionLabel='lgbtq' placeholder='Select a preferred lgbtq preferece' className="lgbtq-pref" />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Religion<br />
                    <Dropdown value={religion} onChange={handleReligion} options={
                        ['non-religious',
                         'Christian',
                         'Buddhist',
                         'Muslim',
                         'Islamic',
                         'Other']
                         }
                         optionLabel='religion' placeholder='Select a preferred religion preferece' className="religion-pref" />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Sexual Orientation<br />
                    <Dropdown value={sexualOrientation} onChange={handleSexualOrientation} options={
                        ['Gay',
                         'Straight',
                         'Asexual',
                         'Other']
                         }
                         optionLabel='Sexual-Orientation' placeholder='Select a preferred sexual-orientation preferece' className="sexual-orientation-pref" />
                </label>
            </div>

            <div className = 'input-container'>
                Politics<br />
                <Dropdown value={politics} onChange={handlePolitics} options={
                        ['Republican',
                         'Democratic',
                         'Apolitical',
                         'do not mind']
                         }
                         optionLabel='politics' placeholder='Select a preferred politic preferece' className="politic-pref" />
            </div>
            <div className = 'input-container'>
                <label>
                    Social Activity<br />
                    <Dropdown value={socialActiveness} onChange={handleSocialActiveness} options={
                        ['yes', //i dont know what to put here
                         'no',
                         'do not mind']
                         }
                         optionLabel='social-activeness' placeholder='Select a preferred social-activeness preferece' className="social-activeness-pref" />
                </label>
            </div>
            <div className = 'input-container'>
                <label>
                    Extra or Specific Requirements<br />
                    <input
                        type="text"
                        className='extra-input'
                        value={userAgent.extraOrSpecificRequirements}
                        onChange={(e) => setUser({...user,extraOrSpecificRequirements: e.target.value})}
                    />
                </label>    
            </div>
            <div className = 'input-container'>
                <label>
                    Gender Inclusive Housing<br />
                    <Dropdown value={genderInclusiveHousing} onChange={handleGenderInclusive} options={
                        ['yes',
                         'no',
                         'do not mind']
                         }
                         optionLabel='gender-inclusive' placeholder='Select a preferred gender-inclusivity preferece' className="gender-inclusivity-pref" />
                </label>
            </div>
        </form>
    );

}
