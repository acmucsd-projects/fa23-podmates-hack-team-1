import { SelectButton } from 'primereact/selectbutton';
import { useState } from 'react';
import './OffOrOnCampusForm.css'
export default function OffOrOnCampusForm({ user, setUser, setIsOnCampus, previousStep, nextStep }) {
    const [locationType, setLocationType] = useState('');
    const [locationFeedback, setLocationFeedback] = useState('* Location cannot be empty.');
    const handleLocationSelection = (e) => {
        setLocationType(e.value);
        if(!e.value) {
            setLocationFeedback('* Location cannot be empty.');
        }
        else {
            setLocationFeedback('');
        }
        // makes sure the one not chosen is reset
        if(e.value == 'On Campus') {
            setIsOnCampus(true);
            setUser({...user, offCampus: {        
                budget: null,
                distanceFromCampus: null,
                creatingGroup: null,
                lookingForResident: null,
                leaseStart: null,
                leaseEnd: null
            }, location: 'On Campus'});
        }
        else {
            setIsOnCampus(false);
            setUser({...user, onCampus: { 
                buildingPref: '',
                ucsdCollege: '',
                roomType: '',
                roommateType: ''
            }, location: 'Off Campus'});
        }
    }
    const handleNext = (e) => {
        e.preventDefault();
        if(locationType) {
            nextStep();
        }
    }
    return(
        <div>
            <form>
                <label>
                    Are you living <b>on campus</b> or <b>off campus</b>?
                </label>
                <SelectButton value={locationType} onChange={handleLocationSelection} options={['On Campus', 'Off Campus']}/>
                {locationFeedback ? <p className='feedback'>{locationFeedback}</p> : null}
                <div>
                    <button type='button' onClick={previousStep} className='movement-btn'>{`<`} Back</button>
                    <button type='button' onClick={handleNext} className="movement-btn">Next {`>`}</button>
                </div>
            </form>
        </div>
    );
}