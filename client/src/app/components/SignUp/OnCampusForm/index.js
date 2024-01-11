import { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import './OnCampusForm.css';
import './OnCampusForm.css'


export default function OnCmpusForm({ user, setUser, nextStep, previousStep }) {

    const [selectHousing, setSelectHousing] = useState(user.onCampus.buildingPref);
    const [selectCollege, setSelectCollege] = useState(user.onCampus.ucsdCollege);
    const [selectRoomType, setSelectRoomType] = useState(user.onCampus.roomType);
    const [housemateType, setHousemateType] = useState(user.onCampus.roommateType);
    const [housingFeedback, setHousingFeedback] = useState('');
    const [collegeFeedback, setCollegeFeedback] = useState('');
    const [roomFeedback, setRoomFeedback] = useState('');
    const [housemateFeedback, setHousemateFeedback] = useState('');

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
        const newValue = e.value;
        setSelectHousing(newValue);
        setHousingFeedback(newValue ? '' : '* Must select a housing type.');
        setUser(user => ({ ...user, onCampus: {...user.onCampus, buildingPref: newValue} }));
    }
    
    const handleCollegeSelection = (e) => {
        const newValue = e.value;
        setSelectCollege(newValue);
        setCollegeFeedback(newValue ? '' : '* Must select a college.');
        setUser(user => ({ ...user, onCampus: {...user.onCampus, ucsdCollege: newValue }}));
    }
    
    const handleRoomTypeSelection = (e) => {
        const newValue = e.value;
        setSelectRoomType(newValue);
        setRoomFeedback(newValue ? '' : '* Must select a room type.');
        setUser(user => ({ ...user, onCampus: {...user.onCampus, roomType: newValue }}));
    }
    
    const handleHousemateType = (e) => {
        const newValue = e.value;
        setHousemateType(newValue);
        setHousemateFeedback(newValue ? '' : '* Must select a housemate type.');
        setUser(user => ({ ...user, onCampus: {...user.onCampus, roommateType: newValue }}));
    }    

    const isValid = () => {
        if(user.onCampus.buildingPref && user.onCampus.ucsdCollege && user.onCampus.roomType && user.onCampus.roommateType) {
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
                        <span className="question">Housing Type<br /></span>
                        <span className="answer"><SelectButton className="selectbutton" value={selectHousing} onChange={handleHousingSelection} options={['Residence Hall', 'Apartment']} /></span>
                        
                    </label>
                    {housingFeedback ? <p className='feedback'>{housingFeedback}</p> : null}
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">College <br /></span>
                        <span className="answer"><Dropdown value={selectCollege} onChange={handleCollegeSelection} options={Colleges}
                            placeholder="Select a College" className="w-full md:w-14rem" /></span>
                        
                    </label>
                    {collegeFeedback ? <p className='feedback'>{collegeFeedback}</p> : null}
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Room Type<br /></span>
                        <span className="answer"><Dropdown value={selectRoomType} onChange={handleRoomTypeSelection} options={['Double', 'Single', 'Triple', 'Mini Double']}
                            placeholder="Select a Room Type" className="w-full md:w-14rem" /></span>
                    </label>
                    {roomFeedback ? <p className='feedback'>{roomFeedback}</p> : null}
                </div>

                <div className='input-container'>
                    <label>
                        <span className="question">Are you looking for suitemates or roommates? <br /></span>
                        <span className="answer"><SelectButton value={housemateType} onChange={handleHousemateType} options={['Suitemates', 'Roommates']} /></span>
                    </label>
                    {housemateFeedback ? <p className='feedback'>{housemateFeedback}</p> : null}
                </div>

                <div>
                    <button type='button' onClick={previousStep} className="movement-btn">{`<`} Back</button>
                    <button type='button' onClick={handleNext} className="movement-btn">Next {`>`} </button> 
                </div>
            </form>
        </>
    )
}
