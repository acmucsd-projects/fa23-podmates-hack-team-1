import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';

import { InputTextarea } from 'primereact/inputtextarea';

import { Dropdown } from 'primereact/dropdown';

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme



import { useRouter } from 'next/navigation';
import './OnCampusForm.css';
import axios from 'axios';
import Login from "../GoogleSignIn/Login";
//import { redirect } from "next/dist/server/api-utils";
import './OnCampusForm.css'


export default function OnCmpusForm({ user, setUser }) {
    /*
    should ask for:
    housing type Residence Hall Apartment
    college
    are you looking for a roommate or housemates?   
    */

    // buildingPref: {
    //     type: String,
    //     required: false,
    // },
    // ucsdCollege: {
    //     type: String,
    //     required: false,
    // },
    // roommateSearch: {
    //     type: Boolean,
    //     required: false
    // }

    const [selectHousing, setSelectHousing] = useState('');
    const [selectCollege, setSelectCollege] = useState('');
    const [selectRoomType, setSelectRoomType] = useState('');
    const [BoolRoommate, setBoolRoommate] = useState('');
    const [selectRoommateNum, setSelectRoommateNum] = useState('');
    const [selectSuitemateNum, setSelectSuitemateNum] = useState('');
    const [selectRoommatePref, setSelectRoommatePref] = useState('');
    const [selectSuitematePref, setSelectSuitematePref] = useState('');




    const Colleges = [
        "Revelle College",
        "John Muir College",
        "Thurgood Marshall College",
        "Earl Warren College",
        "Eleanor Roosevelt College",
        "Sixth College",
        "Seventh College",
        "Eighth College"
    ];

    const handleHousingSelection = (e) => {
        setSelectHousing(e.value);
        setUser(e => ({ ...user, buildingPref: e.value }));
    }

    const handleCollegeSelection = (e) => {
        setSelectCollege(e.value);
        setUser(e => ({ ...user, ucsdCollege: e.value }));
    }

    const handleRoomTypeSelection = (e) => {
        setSelectRoomType(e.value);
        setUser(e => ({ ...user, roomType: e.value }));
    }

    const handleRoommateBool = (e) => {
        setBoolRoommate(e.value);
        const roommateSearchValue = e.value === 'Yes';
        setUser(e => ({ ...user, roommateSearch: roommateSearchValue }));
    }

    const handleRoommateNum = (e) => {
        setSelectRoommateNum(e.value);
        setUser(e => ({ ...user, numberofDesiredRoommates: e.value }));
    }

    const handleSuitemateNum = (e) => {
        setSelectSuitemateNum(e.value);
        setUser(e => ({ ...user, numberofDesiredSuitemates: e.value }));
    }

    const handleRoommatePref = (e) => {
        setSelectRoommatePref(e.value);
        setUser(e => ({ ...user, roommatePreference: e.value }));
    }

    const handleSuitematePref = (e) => {
        setSelectSuitematePref(e.value);
        setUser(e => ({ ...user, suitematePreference: e.value }));
    }


    return (
        <>
            <form>
                <div className='input-container'>
                    <label>
                        <span className="question">Housing Type<br /></span>
                        <span className="answer"><SelectButton className="selectbutton" value={selectHousing} onChange={handleHousingSelection} options={['Residence Hall', 'Apartment']} /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">College <br /></span>
                        <span className="answer"><Dropdown value={selectCollege} onChange={handleCollegeSelection} options={Colleges}
                            placeholder="Select a College" className="w-full md:w-14rem" /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Room Type<br /></span>
                        <span className="answer"><Dropdown value={selectRoomType} onChange={handleRoomTypeSelection} options={['Double', 'Single', 'Triple', 'Mini Double']}
                            placeholder="Select a Room Type" className="w-full md:w-14rem" /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Are you looking for a suitmates or roommate? <br /></span>
                        <span className="answer"><SelectButton value={BoolRoommate} onChange={handleRoommateBool} options={['Yes', 'No']} /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Roommate Numbers<br /></span>
                        <span className="answer"><Dropdown value={selectRoommateNum} onChange={handleRoommateNum} options={['1', '2', '3', '4', '5']}
                            placeholder="Select desired Roommate Numbers" className="w-full md:w-14rem" /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Suitemate Numbers<br /></span>
                        <span className="answer"><Dropdown value={selectSuitemateNum} onChange={handleSuitemateNum} options={['1', '2', '3', '4', '5', '6', '7', '8']}
                            placeholder="Select desired Suitemate Numbers" className="w-full md:w-14rem" /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Roommate Preference<br /></span>
                        <span className="answer"><InputTextarea value={selectRoommatePref} placeholder="Write desired Roommate Preference" onChange={handleRoommatePref} rows={5} cols={30} /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Suitemate Preference<br /></span>
                        <span className="answer"><InputTextarea value={selectSuitematePref} placeholder="Write desired Suitemate Preference" onChange={handleSuitematePref} rows={5} cols={30} /></span>
                    </label>
                </div>

            </form>
        </>
    )


}
