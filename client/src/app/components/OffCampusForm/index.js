import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import { Dropdown } from 'primereact/dropdown';
import { useRouter } from 'next/navigation';
import './OffCampusForm.css';
import axios from 'axios';
import Login from "../GoogleSignIn/Login";
//import { redirect } from "next/dist/server/api-utils";
import './OffCampusForm.css'


export default function OffCmpusForm({ user, setUser, setShowPopUp, setPopUpType }) {
    /*
    should ask for:
    budget
    distance from campus
    join group or find people
    lease start date
    lease end date  
    */

    const [selectBudget, setSelectBudget] = useState('');
    const [selectDistance, setSelectDistance] = useState('');
    const [selectGroupType, setSelectGroupType] = useState('');
    const [selectLeaseStart, setSelectLeaseStart] = useState('');
    const [selectLeaseEnd, setSelectLeaseEnd] = useState('');



    const handleBudgetSelection = (e) => {
        setSelectBudget(e.value);
        setUser({})
    }

    const handleDistanceSelection = (e) => {
        setSelectDistance(e.value);
        setUser({})
    }

    const handleGroupTypeSelection = (e) => {
        setSelectGroupType(e.value);
        setUser({})
    }

    const handleLeaseStartSelection = (e) => {
        setSelectLeaseStart(e.value);
        setUser({})
    }

    const handleLeaseEndSelection = (e) => {
        setSelectLeaseEnd(e.value);
        setUser({})
    }

    return (
        <>
            <form>
                <div className='input-container'>
                    <label>
                        Budget<br />
                        <Dropdown value={selectBudget} onChange={handleBudgetSelection} options={
                            ['Below $800',
                                '$800 - $1000',
                                '$1000 - $1200',
                                '$1200 - $1400',
                                '$1400 - $1600',
                                'Above $1600']
                        } placeholder="Select a preferred budget range" className="w-full md:w-14rem" />
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        Distance from Campus <br />
                        <Dropdown value={selectDistance} onChange={handleDistanceSelection} options={
                            ['Below 1 mile',
                                '1 - 3 miles',
                                '3 - 5 miles',
                                '5 - 7 miles',
                                '7 - 9 miles',
                                'Above 9 miles']
                        }
                            placeholder="Select a preferred distance range" className="w-full md:w-14rem" />
                    </label>
                </div>

                {/* <Dropdown value={selectCollege} onChange={handleCollegeSelection} options={colleges} optionLabel="name"
                            placeholder="Select a College" className="w-full md:w-14rem" /> */}

                <div className='input-container'>
                    <label>
                        Are you trying to join/create a group or find someone to fill a space? <br />
                        <input
                            type='text'
                            className='sign-up-input'
                            name='name'

                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        Lease Start Date <br />
                        {/* maybe import a calendar?*/}
                    </label>

                </div>

                <div className='input-container'>
                    <label>
                        Lease End Date <br />
                        {/* maybe import a calendar?*/}
                    </label>

                </div>

            </form>
        </>
    )


}
