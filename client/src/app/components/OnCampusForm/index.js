import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/checkbox';

import { Dropdown } from 'primereact/dropdown';

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme


import { useRouter } from 'next/navigation';
import './OnCampusForm.css';
import axios from 'axios';
import Login from "../GoogleSignIn/Login";
//import { redirect } from "next/dist/server/api-utils";
import './OnCampusForm.css'


export default function OnCmpusForm({ user, setUser, setShowPopUp, setPopUpType }) {
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
    const [BoolRoommate, setBoolRoommate] = useState('');

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
        setUser(prevUser => ({ ...prevUser, buildingPref: e.target.value }));
    }

    const handleCollegeSelection = (e) => {
        setSelectCollege(e.value);
        setUser(prevUser => ({ ...prevUser, ucsdCollege: e.target.value }));
    }

    const handleRoommateBool = (e) => {
        setBoolRoommate(e.value);
        const roommateSearchValue = e.value === 'Yes';
        setUser(prevUser => ({ ...prevUser, roommateSearch: roommateSearchValue }));
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
                        <span className="question">Are you looking for a roommate or housemates? <br /></span>
                        <span className="answer"><SelectButton value={BoolRoommate} onChange={handleRoommateBool} options={['Yes', 'No']} /></span>
                    </label>
                </div>


            </form>
        </>
    )


}
