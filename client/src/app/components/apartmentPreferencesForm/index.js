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
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Alcohol Usage<br />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Drug Usage<br />
                </label>
            </div>

            <div>
                <label>
                    Smoking Usage<br />
                </label>
            </div>
            <div className = 'input-container'>
                <label>
                    LBGTQ friendly<br />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Religion<br />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Sexual Orientation<br />
                </label>
            </div>

            <div className = 'input-container'>
                Politics<br />
            </div>
            <div className = 'input-container'>
                <label>
                    Social Activity<br />
                </label>
            </div>
            <div className = 'input-container'>
                <label>
                    Extra or Specific Requirements<br />
                </label>    
            </div>
            <div className = 'input-container'>
                <label>
                    Gender Inclusive Housing<br />
                </label>
            </div>
        </form>
    );

}
