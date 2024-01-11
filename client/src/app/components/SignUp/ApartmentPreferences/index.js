
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme from Jake 
import { useState } from "react";
import './ApartmentPreferencesForm.css';
import { Dropdown } from 'primereact/dropdown';


export default function ApartmentPreferencesForm({user, setUser, nextStep, previousStep}) {
    /** Manages the state of various form fields */
    const[numberOfDesiredRoomates, setNumberOfDesiredRoomates] = useState(user.apartmentPreferences.numberOfDesiredRoommates);
    const[pets, setPets] = useState(user.apartmentPreferences.pets);
    const[alcoholUsage, setAlcoholUsage] = useState(user.apartmentPreferences.alcoholUsage);
    const[drugUsage, setDrugUsage] = useState(user.apartmentPreferences.drugUsage);
    const[smokingUsage, setSmokingUsage] = useState(user.apartmentPreferences.smokingUsage);
    const[LBGTQfriendly, setLGBTQfriendly] = useState(user.apartmentPreferences.LBGTQfriendly);
    const[religion, setReligionfriendly] = useState(user.apartmentPreferences.religion); 
    const[politics, setPolitics] = useState(user.apartmentPreferences.politics);
    const[socialActiveness, setSocialActiveness] = useState(user.apartmentPreferences.socialActiveness);
    const[genderInclusiveHousing, setGenderInclusiveHousing] = useState(user.apartmentPreferences.genderInclusiveHousing);

    const handleNumberOfDesiredRoomatesSelection = (e) => {
        let newValue = e.value;
        setNumberOfDesiredRoomates(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, numberOfDesiredRoommates: newValue}});
    }
    const handlePets = (e) => {
        let newValue = e.value;
        setPets(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, pets: newValue}});
    }
    const handledrugUsage = (e) => {
        let newValue = e.value;
        setDrugUsage(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, drugUsage: newValue}});
    }

    const handleSmokingUsage = (e) => {
        let newValue = e.value;
        setSmokingUsage(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, smokingUsage: newValue}});
    }

    const handleLBGTQFriendly = (e) => {
        let newValue = e.value;
        setLGBTQfriendly(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, LBGTQfriendly: newValue}});
    }

    const handleAlcohol = (e) => {
        let newValue = e.value;
        setAlcoholUsage(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, alcoholUsage: newValue}});
    }
    const handleSmoking = (e) => {
        let newValue = e.value;
        setSmokingUsage(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, smokingUsage: newValue}});
    }


    const handleReligion = (e) => {
        let newValue = e.value;
        setReligionfriendly(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, religion: newValue}});
    }
    const handlePolitics = (e) => {
        let newValue = e.value;
        setPolitics(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, politics: newValue}});
    }

    const handleSocialActiveness = (e) => {
        let newValue = e.value;
        setSocialActiveness(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, socialActiveness: newValue}});
    }
    const handleGenderInclusive = (e) => {
        let newValue = e.value;
        setGenderInclusiveHousing(newValue);
        setUser({...user, apartmentPreferences: {...user.apartmentPreferences, genderInclusiveHousing: newValue}});
    }

    // need to add feedback on the required fields....but lol too lazy right now
    const handleNext = (e) => {
        if(numberOfDesiredRoomates && pets && alcoholUsage && drugUsage && smokingUsage && genderInclusiveHousing) {
            nextStep();
        }
        else {
            alert('Make sure all items in required section are filled out. ')
        }
    }
    return (
        <form className='flex-container'>

            <p className='section'>Required Section</p>

            {/* Number of Desired Roommates */}
            <div className='input-container'>
                <label>
                    Number Of Desired Roommates<br />
                    <Dropdown 
                        value={numberOfDesiredRoomates} 
                        onChange={handleNumberOfDesiredRoomatesSelection} 
                        options={['1', '2', '3+']}
                        placeholder='Select the desired number of roommates' 
                        className="w-full md:w-14rem" 
                    />
                </label>
            </div>
    
            {/* Pets Dropdown */}
            <div className='input-container'>
                <label>
                    Any Pets?<br />
                    <Dropdown 
                        value={pets} 
                        onChange={handlePets} 
                        options={['yes', 'no', 'do not mind']}
                        placeholder='Select a preferred pet preference' 
                        className="w-full md:w-14rem" 
                    />
                </label>
            </div>
    
            {/* Alcohol Usage Dropdown */}
            <div className='input-container'>
                <label>
                    Alcohol Usage<br />
                    <Dropdown 
                        value={alcoholUsage} 
                        onChange={handleAlcohol} 
                        options={['yes', 'no', 'do not mind']}
                        placeholder='Select a preferred alcohol preference' 
                        className="alcohol-pref" 
                    />
                </label>
            </div>
    
            {/* Drug Usage Dropdown */}
            <div className='input-container'>
                <label>
                    Drug Usage<br />
                    <Dropdown 
                        value={drugUsage} 
                        onChange={handledrugUsage} 
                        options={['yes', 'no', 'do not mind']}
                        placeholder='Select a preferred drug preference' 
                        className="drug-pref" 
                    />
                </label>
            </div>
    
            {/* Smoking Usage Dropdown */}
            <div className='input-container'>
                <label>
                    Smoking Usage<br />
                    <Dropdown 
                        value={smokingUsage} 
                        onChange={handleSmokingUsage} 
                        options={['yes', 'no', 'do not mind']}
                        placeholder='Select a preferred smoking preference' 
                        className="smoking-pref" 
                    />
                </label>
            </div>
    
            {/* Gender Inclusive Housing Dropdown */}
            <div className='input-container'>
                <label>
                    Gender Inclusive Housing<br />
                    <Dropdown 
                        value={genderInclusiveHousing} 
                        onChange={handleGenderInclusive} 
                        options={['yes', 'no', 'do not mind']}
                        placeholder='Select a preferred gender-inclusivity preference' 
                        className="gender-inclusivity-pref" 
                    />
                </label>
            </div>

            <p className='section'>Optional Section</p>
    
            {/* LBGTQ Friendly Dropdown */}
            <div className='input-container'>
                <label>
                    LBGTQ Friendly<br />
                    <Dropdown 
                        value={LBGTQfriendly} 
                        onChange={handleLBGTQFriendly} 
                        options={['yes', 'no', 'do not mind']}
                        placeholder='Select a preferred LGBTQ preference' 
                        className="lgbtq-pref" 
                    />
                </label>
            </div>
    
            {/* Religion Dropdown */}
            <div className='input-container'>
                <label>
                    Religion<br />
                    <Dropdown 
                        value={religion} 
                        onChange={handleReligion} 
                        options={['non-religious', 'Christian', 'Buddhist', 'Muslim', 'Islamic', 'Other']}
                        placeholder='Select a preferred religion preference' 
                        className="religion-pref" 
                    />
                </label>
            </div>
    
            {/* Politics Dropdown */}
            <div className='input-container'>
                <label>
                    Politics<br />
                    <Dropdown 
                        value={politics} 
                        onChange={handlePolitics} 
                        options={['Republican', 'Democratic', 'Apolitical', 'do not mind']}
                        placeholder='Select a preferred politic preference' 
                        className="politic-pref" 
                    />
                </label>
            </div>
    
            {/* Social Activeness Dropdown */}
            <div className='input-container'>
                <label>
                    Social Activeness<br />
                    <Dropdown 
                        value={socialActiveness} 
                        onChange={handleSocialActiveness} 
                        options={['yes', 'no', 'do not mind']}
                        placeholder='Select a preferred social-activeness preference' 
                        className="social-activeness-pref" 
                    />
                </label>
            </div>
                <div>
                    <button type='button' onClick={previousStep} className="movement-btn">{`<`} Back</button>
                    <button type='button' onClick={handleNext} className="movement-btn">Next {`>`} </button> 
                </div>
        </form>
    );

}
