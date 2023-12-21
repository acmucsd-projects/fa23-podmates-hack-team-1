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
        <form>
            {/* i fix later */}
            { <div className ='input-container'>
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
            </div> }
         
            <div className = 'input-container'>
                <label>
                    Any Pets?<br /> 
                    <Dropdown value={user.apartmentPreferences.pets} onChange={(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, pets: e.value}
                    })
                    } 
                    options={
                        ['yes',
                         'no',
                         'no preference'] //no preference instaad of do not mind? i feel like do not mind and yes are same thing
                         }
                        placeholder='Select a preferred pet preferece' className="w-full md:w-14rem" />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Alcohol Usage<br />
                    <Dropdown value={user.apartmentPreferences.alcoholUsage} onChange={(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, alcoholUsage: e.value}
                    })
                    } 
                    options={
                        ['yes',
                         'no',
                         'no preference']
                         }
                        placeholder='Select a preferred alcohol preferece' className="w-full md:w-14rem" />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Drug Usage<br />
                    <Dropdown value={user.apartmentPreferences.drugUsage} onChange={(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, drugUsage: e.value}
                    })
                    } 
                    options={
                        ['yes',
                         'no',
                         'no preference']
                         }
                        placeholder='Select a preferred drug preferece' className="w-full md:w-14rem" />
                </label>
            </div>

            <div>
                <label>
                    Smoking Usage<br />
                    <Dropdown value={user.apartmentPreferences.smokingUsage} onChange={(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, smokingUsage: e.value}
                    })
                    } 
                    options={
                        ['yes',
                         'no',
                         'no preference']
                         }
                        placeholder='Select a preferred smoking preferece' className="w-full md:w-14rem" />
                </label>
            </div>
            <div className = 'input-container'>
                <label>
                    LBGTQ friendly<br />
                    <Dropdown value={user.apartmentPreferences.LBGTQfriendly} onChange={(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, LBGTQfriendly: e.value}
                    })
                    } 
                    options={
                        ['yes',
                         'no',
                         'no preference']
                         }
                        placeholder='Select a preferred lgbtq preferece' className="w-full md:w-14rem" />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Religion<br />
                    <Dropdown value={user.apartmentPreferences.religion} onChange={(e) => setUser ({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, religion: e.value}
                    })
                    } 
                    options={
                        ['non-religious',
                         'Christian',
                         'Buddhist',
                         'Muslim',
                         'Islamic',
                         'Other']
                         }
                        placeholder='Select a preferred religion preferece' className="w-full md:w-14rem" />
                </label>
            </div>

            <div className = 'input-container'>
                <label>
                    Sexual Orientation<br />
                    <Dropdown value={user.apartmentPreferences.sexualOrientation} onChange={(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, sexualOrientation: e.value}
                    })
                    } 
                    options={
                        ['Gay',
                         'Straight',
                         'Asexual',
                         'Lesbian',
                         'Bisexual',
                         'Transgender',
                         'Pansexual',
                         'Queer',
                         'Other',
                         'rather not say']
                         }
                        placeholder='Select a preferred sexual-orientation preferece' className="w-full md:w-14rem" />
                </label>
            </div>

            <div className = 'input-container'>
                Politics<br />
                <Dropdown value={user.apartmentPreferences.politics} onChange={(e) => setUser({
                ...user, apartmentPreferences: {...user.apartmentPreferences, politics: e.value}
                })
                } 
                options={
                        ['Republican',
                         'Democratic',
                         'Apolitical',
                         'other', 
                         'rather not say'] //other?
                         }
                        placeholder='Select a preferred politic preferece' className="w-full md:w-14rem" />
            </div>
            <div className = 'input-container'>
                <label>
                    Social Activity<br />
                    <Dropdown value={user.apartmentPreferences.socialActiveness} onChange={(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, socialActiveness: e.value}
                    })
                    } 
                    options={
                        ['I have a low social battery', //i dont know what to put here
                         'I have a decent social battery',
                         'I have a strong social battery',
                         'other']
                         }
                        placeholder='Select a preferred social-activeness preference' className="w-full md:w-14rem" />
                </label>
            </div>
            <div className = 'input-container'>
                <label>
                    Extra or Specific Requirements<br />
                    <input
                        type="text"
                        className='extra-input'
                        value={user.apartmentPreferences.extraOrSpecificRequirements}
                        onChange={(e) = setUser({
                        ...user, apartmentPreferences: {...user.apartmentPreferences, extraOrSpecificRequirements: e.value}
                        })
                        }
                    />
                </label>    
            </div>
            <div className = 'input-container'>
                <label>
                    Gender Inclusive Housing<br />
                    <Dropdown value={user.apartmentPreferences.genderInclusiveHousing} onChange={(e) => setUser({
                    ...user, apartmentPreferences: {...user.apartmentPreferences, genderInclusiveHousing: e.value}
                    })
                    } 
                    options={
                        ['yes',
                         'no',
                         'no preference']
                         }
                        placeholder='Select a preferred gender-inclusivity preferece' className="w-full md:w-14rem" />
                </label>
            </div>
        </form>
    );

}
