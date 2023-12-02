import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
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



    const handleHousingSelection = (e) => {
        setSelectHousing(e.value);
        setUser({})
    }

    const handleCollegeSelection = (e) => {
        setSelectHousing(e.value);
        setUser({})
    }

    return (
        <>
            <form>
                <div className='input-container'>
                    <label>
                        Housing Type<br />
                        <SelectButton value={selectHousing} onChange={handleHousingSelection} options={['Resiance Hall', 'Apartment']} />
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        College <br />
                        {/* <Dropdown value={selectCollege} onChange={handleCollegeSelection} options={colleges} optionLabel="name"
                            placeholder="Select a College" className="w-full md:w-14rem" /> */}
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        Are you looking for a roommate or housemates? <br />
                        <input
                            type='text'
                            className='sign-up-input'
                            name='name'

                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </label>
                </div>

            </form>
        </>
    )


}
