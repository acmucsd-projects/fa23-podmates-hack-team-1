import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
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
        setUser({})
    }

    const handleCollegeSelection = (e) => {
        setSelectCollege(e.value);
        setUser({})
    }

    const handleRoommateBool = (e) => {
        setBoolRoommate(e.value);
        setUser({})
    }

    return (
        <>
            <form>
                <div className='input-container'>
                    <label>
                        Housing Type<br />
                        <SelectButton value={selectHousing} onChange={handleHousingSelection} options={['Residence Hall', 'Apartment']} />
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        College <br />
                        <Dropdown value={selectCollege} onChange={handleCollegeSelection} options={Colleges}
                            placeholder="Select a College" className="w-full md:w-14rem" />
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        Are you looking for a roommate or housemates? <br />
                        <SelectButton value={BoolRoommate} onChange={handleRoommateBool} options={['Yes', 'No']} />
                    </label>
                </div>

            </form>
        </>
    )


}
