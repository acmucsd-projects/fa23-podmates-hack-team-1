import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from 'primereact/calendar';
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
    const [selectLookingForResident, setLookingForResident] = useState('');
    const [selectLeaseStart, setSelectLeaseStart] = useState('');
    const [selectLeaseEnd, setSelectLeaseEnd] = useState('');



    const handleBudgetSelection = (e) => {
        setSelectBudget(e.value);
        setUser(e => ({ ...user, budget: e.value }))
    }

    const handleDistanceSelection = (e) => {
        setSelectDistance(e.value);
        setUser(e => ({ ...user, distanceFromCampus: e.value }))
    }

    const handleGroupTypeSelection = (e) => {
        setSelectGroupType(e.value);
        const creatingGroupValue = e.value === 'Yes';
        setUser(e => ({ ...user, creatingGroup: creatingGroupValue }))
    }

    const handleLookingForResident = (e) => {
        setLookingForResident(e.value);
        const lookingForResidentValue = e.value === 'Yes';
        setUser(e => ({ ...user, lookingForResident: lookingForResidentValue }))
    }

    const handleLeaseStartSelection = (e) => {
        setSelectLeaseStart(e.value);
        setUser(e => ({ ...user, leaseStart: e.value }))
    }

    const handleLeaseEndSelection = (e) => {
        setSelectLeaseEnd(e.value);
        setUser(e => ({ ...user, leaseEnd: e.value }))
    }

    return (
        <>
            <form>
                <div className='input-container'>
                    <label>
                        <span className="question">Budget<br /></span>
                        <span className="answer"><Dropdown value={selectBudget} onChange={handleBudgetSelection} options={
                            ['Below $800',
                                '$800 - $1000',
                                '$1000 - $1200',
                                '$1200 - $1400',
                                '$1400 - $1600',
                                'Above $1600']
                        } placeholder="Select a preferred budget range" className="w-full md:w-14rem" /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Distance from Campus <br /></span>
                        <span className="answer"><Dropdown value={selectDistance} onChange={handleDistanceSelection} options={
                            ['Below 1 mile',
                                '1 - 3 miles',
                                '3 - 5 miles',
                                '5 - 7 miles',
                                '7 - 9 miles',
                                'Above 9 miles']
                        }
                            placeholder="Select a preferred distance range" className="w-full md:w-14rem" /></span>
                    </label>
                </div>

                {/* <Dropdown value={selectCollege} onChange={handleCollegeSelection} options={colleges} optionLabel="name"
                            placeholder="Select a College" className="w-full md:w-14rem" /> */}

                <div className='input-container'>
                    <label>
                        <span className="question">Are you trying to join/create a group? <br /></span>
                        <span className="answer"><SelectButton className="selectbutton" value={selectGroupType} onChange={handleGroupTypeSelection} options={['Yes', 'No']} /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Are you looking for Resident to live with? <br /></span>
                        <span className="answer"><SelectButton className="selectbutton" value={selectLookingForResident} onChange={handleLookingForResident} options={['Yes', 'No']} /></span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Lease Start Date <br /></span>
                        <span className="answer"><Calendar value={selectLeaseStart} onChange={handleLeaseStartSelection} view="month" dateFormat="mm/yy" placeholder="Select the Start Month" className="w-full md:w-14rem" /></span>
                    </label>

                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Lease End Date <br /></span>
                        <span className="answer"><Calendar value={selectLeaseEnd} onChange={handleLeaseEndSelection} view="month" dateFormat="mm/yy" placeholder="Select the End Month" className="w-full md:w-14rem" /></span>
                    </label>
                </div>

            </form>
        </>
    )


}
