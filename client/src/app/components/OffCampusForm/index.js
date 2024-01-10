import { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import { Dropdown } from 'primereact/dropdown';
import './OffCampusForm.css';


export default function OffCmpusForm({ user, setUser, previousStep, nextStep}) {

    const [selectBudget, setSelectBudget] = useState(user.offCampus.budget);
    const [selectDistance, setSelectDistance] = useState(user.offCampus.distanceFromCampus);
    const [selectGroupType, setSelectGroupType] = useState(user.offCampus.creatingGroup);
    const [selectLookingForResident, setLookingForResident] = useState(user.offCampus.lookingForResident);
    const [selectLeaseStart, setSelectLeaseStart] = useState(user.offCampus.leaseStart);
    const [selectLeaseEnd, setSelectLeaseEnd] = useState(user.offCampus.leaseEnd);
    const [budgetFeedback, setBudgetFeedback] = useState('');
    const [distanceFeedback, setDistanceFeedback] = useState('');
    const [groupFeedback, setGroupFeedback] = useState('');
    const [residentFeedback, setResidentFeedback]= useState('');

    const handleBudgetSelection = (e) => {
        const newValue = e.value;
        setSelectBudget(newValue);
        setBudgetFeedback(newValue ? null : '* Budget must be selected.');
        setUser(user => ({ ...user, offCampus: { ...user.offCampus, budget: newValue }}))
    }

    const handleDistanceSelection = (e) => {
        const newValue = e.value;
        setSelectDistance(newValue);
        setDistanceFeedback(newValue ? null : '* Distance must be selected.');
        setUser(user => ({ ...user, offCampus: {...user.offCampus, distanceFromCampus: newValue }}))
    }    

    const handleGroupTypeSelection = (e) => {
        const newValue = e.value;
        setSelectGroupType(newValue);
        setGroupFeedback(newValue ? null : '* Group type must be selected.');
        const creatingGroupValue = newValue === 'Yes';
        setUser(user => ({ ...user, offCampus: {...user.offCampus, creatingGroup: creatingGroupValue }}))
    }
    

    const handleLookingForResident = (e) => {
        const newValue = e.value;
        setLookingForResident(newValue);
        setResidentFeedback(newValue ? null : '* Decision on looking for a member must be made.');
        setUser(user => ({ ...user, offCampus: {...user.offCampus, lookingForResident: newValue }}))
    }
    

    const handleLeaseStartSelection = (e) => {
        const newValue = e.value;
        setSelectLeaseStart(newValue);
        setUser(user => ({ ...user, offCampus: {...user.offCampus, leaseStart: newValue }}))
    }
    

    const handleLeaseEndSelection = (e) => {
        const newValue = e.value;
        setSelectLeaseEnd(newValue);
        setUser(user => ({ ...user, offCampus: {...user.offCampus, leaseEnd: newValue }}))
    }    

    const isValid = () => {
        if(user.offCampus.budget && user.offCampus.distanceFromCampus && user.offCampus.creatingGroup && user.offCampus.lookingForResident) {
            return true;
        }
        return false;
    }

    const handleNext = (e) => {
        e.preventDefault();
        if(isValid()) {
            nextStep();
        }
        else {
            alert("Please ensure all fields have been answered.");
        }
    }

    return (
        <>
            <form>
                <div className='input-container'>
                    <label>
                        <span className="question">Budget<br /></span>
                        {/* i'm pretty sure budget is supposed to be a number value... */}
                        <span className="answer">
                            <Dropdown value={selectBudget} onChange={handleBudgetSelection} options={['Below $800', '$800 - $1000', '$1000 - $1200', '$1200 - $1400', '$1400 - $1600', 'Above $1600']} placeholder="Select a preferred budget range" className="w-full md:w-14rem" />
                        </span>
                        {budgetFeedback && <p className='feedback'>{budgetFeedback}</p>}
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Distance from Campus <br /></span>
                        <span className="answer">
                            <Dropdown value={selectDistance} onChange={handleDistanceSelection} options={['Below 1 mile', '1 - 3 miles', '3 - 5 miles', '5 - 7 miles', '7 - 9 miles', 'Above 9 miles']} placeholder="Select a preferred distance range" className="w-full md:w-14rem" />
                        </span>
                        {distanceFeedback && <p className='feedback'>{distanceFeedback}</p>}
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Are you looking to join/create an apartment group? <br /></span>
                        <span className="answer">
                            <SelectButton className="selectbutton" value={selectGroupType} onChange={handleGroupTypeSelection} options={['Yes', 'No']} />
                        </span>
                        {groupFeedback && <p className='feedback'>{groupFeedback}</p>}
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Are you looking for a roommate or a housemate to live with? <br /></span>
                        <span className="answer">
                            <SelectButton className="selectbutton" value={selectLookingForResident} onChange={handleLookingForResident} options={['Roommate', 'Housemate']} />
                        </span>
                        {residentFeedback && <p className='feedback'>{residentFeedback}</p>}
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Potential Lease Start Date (mm/yy) <br /></span>
                        <span className="answer">
                            <Calendar value={selectLeaseStart} onChange={handleLeaseStartSelection} view="month" dateFormat="mm/yy" placeholder="Select the Start Month" className="w-full md:w-14rem" />
                        </span>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Potential Lease End Date (mm/yy) <br /></span>
                        <span className="answer">
                            <Calendar value={selectLeaseEnd} onChange={handleLeaseEndSelection} view="month" dateFormat="mm/yy" placeholder="Select the End Month" className="w-full md:w-14rem" />
                        </span>
                    </label>
                </div>

                <div>
                    <button type='button' onClick={previousStep} className="movement-btn">{`<`} Back</button>
                    <button type='button' onClick={handleNext} className="movement-btn">Next {`>`} </button> 
                </div>
            </form>
        </>
    )
}
