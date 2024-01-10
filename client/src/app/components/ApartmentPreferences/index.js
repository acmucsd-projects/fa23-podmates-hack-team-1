//pain
import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme from Jake 



import { useRouter } from 'next/navigation';
import './ApartmentPreferencesForm.css';
import axios from 'axios';
import Login from "../GoogleSignIn/Login";
import { redirect } from "next/dist/server/api-utils";
import { Dropdown } from 'primereact/dropdown';


export default function ApartmentPreferencesForm() {
    /**
     * implement: everything :pepehands:
     * 
     */
    const[user, setUser] = UseState({
        password: '',
        email: '',
        name: '',
        birthday: '',
        image: [],
        pronouns: {value: '', isVisible: false},
        gender: {value: '', isVisible: false},
        bio: '',
        apartmentPreferences: {
            numberOfDesiredRoomates: '',
            pets: '',
            alcoholUsage: '',
            drugUsage: '',
            LBGTQfriendly: '',
            religion: '',
            sexualOrientation: '',
            politics: '',
            socialActiveness: '',
            extraOrSpecificRequirements: '',
            genderInclusiveHousing: ''},
        lifestyle: {},
        onCampus: {},
        offCampus: {},
    });




    /** Manages the state of various form fields */
    const[numberOfDesiredRoomates, setNumberOfDesiredRoomates] = useState('');
    const[pets, setPets] = useState("");
    const[alcoholUsage, setAlcoholUsage] = useState(false);
    const[drugUsage, setDrugUsage] = useState(false);
    const[smokingUsage, setSmokingUsage] = useState(false);
    const[LBGTQfriendly, setLGBTQfriendly] = useState(false);
    const[religion, setReligionfriendly] = useState(''); 
    const[sexualOrientation, setSexualOrientation] = useState('');
    const[politics, setPolitics] = useState('');
    const[socialActiveness, setSocialActiveness] = useState('');
    const[extraOrSpecificRequirements, setExtraOrSpecificRequirements] = useState('');
    const[genderInclusiveHousing, setGenderInclusiveHousing] = useState('');


    //console.log(pets);

    return(
        //use input-container for css styling later
        <form className = 'flex-container'>
            {/* i fix later */}
            {/* <div className ='input-container'>
                <label>
                    Number Of Desired Roomates<br />
                    <Drowpdown value ={user.apartmentPreferences.numberOfDesiredRoomates} onChange= {(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, numberOfDesiredRoomates: e.value}
                    })
                    } 
                    options = {
                        ['1',
                         '2',
                         '3+']
                    } 
                        placeholder= 'Select the desired number of roommates' className="w-full md:w-14rem" />
                </label>
            </div> */}
            <div className = 'left-container2'>
                <div className = 'input-container'>
                    <label>
                        Any Pets?<br /> 
                        <Dropdown value={pets} onChange={(e) => setPets(e.value)} options={
                            ['yes',
                            'no',
                            'do not mind']
                            }
                            placeholder='Select a preferred pet preferece' className="w-full md:w-14rem" />
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
                            placeholder='Select a preferred alcohol preferece' className="alcohol-pref" />
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
                            placeholder='Select a preferred drug preferece' className="drug-pref" />
                    </label>
                </div>

                <div className = 'input-container'>
                    <label>
                        Smoking Usage<br />
                        <Dropdown value={smokingUsage} onChange={handleSmoking} options={
                            ['yes',
                            'no',
                            'do not mind']
                            }
                            placeholder='Select a preferred smoking preferece' className="smoking-pref" />
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
                            placeholder='Select a preferred lgbtq preferece' className="lgbtq-pref" />
                    </label>
                </div>
            </div>

            <div className = 'right-container2'>
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
                            placeholder='Select a preferred religion preferece' className="religion-pref" />
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
                            placeholder='Select a preferred sexual-orientation preferece' className="sexual-orientation-pref" />
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
                            placeholder='Select a preferred politic preferece' className="politic-pref" />
                </div>
                <div className = 'input-container'>
                    <label>
                        Social Activity<br />
                        <Dropdown value={socialActiveness} onChange={handleSocialActiveness} options={
                            ['yes', //i dont know what to put here
                            'no',
                            'do not mind']
                            }
                            placeholder='Select a preferred social-activeness preferece' className="social-activeness-pref" />
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
                            placeholder='Select a preferred gender-inclusivity preferece' className="gender-inclusivity-pref" />
                    </label>
                </div>
                <div className = 'input-container'>
                    <label>
                        Extra or Specific Requirements<br />
                        <input
                            type="text"
                            className='extra-input'
                            value={extraOrSpecificRequirements}
                            onChange={handleExtras}
                        />
                    </label>    
                </div>
            </div>
        </form>
    );

}
