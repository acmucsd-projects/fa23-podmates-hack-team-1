import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import SelectionPopUp from "../SelectionPopUp";
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import './ProfileSignUpForm.css'
import { Calendar } from 'primereact/calendar';
export default function ProfileSignUpForm({ user, setUser, setShowPopUp, setPopUpType }) {
    /*
        should ask for:
        password, make sure password strength is good
        name
        birthday
        pronouns
        gender
        .... bio
        .... images
    */

    /*
        need a google sign up button!
        we should get the user's email & birthday information from this! (if possible)
    */
    const [hidePassword, setHidePassword] = useState(true);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [characterCounter, setCharacterCounter] = useState(null);
    const [selectGender, setSelectGender] = useState('');
    const [selectPronouns, setSelectPronouns] = useState('');
    const [validBirthdayFeedback, setValidBirthdayFeedback] = useState('');
    
    let today = new Date();
    let minDate = new Date();
    let maxDate = new Date();
    let year = today.getFullYear();
    maxDate.setFullYear(year-18);
    minDate.setFullYear(year-100);

    const handlePasswordVisibility = (e) => {
        e.preventDefault();
        setHidePassword(!hidePassword);
    }
    console.log(user);

    const handleBioInput = (e) => {
        setUser({ ...user, bio: e.target.value });
        setCharacterCounter(200 - e.target.value.length);
    }

    const handleGenderSelection = (e) => {
        setSelectGender(e.value);
        if (e.value == 'More') {
            setShowPopUp(true);
            setPopUpType('gender');
        }
        else {
            setUser({ ...user, gender: { ...user.gender, value: e.value } });
        }
    }

    const handlePronounsSelection = (e) => {
        setSelectPronouns(e.value);
        if (e.value == 'More') {
            setShowPopUp(true);
            setPopUpType('pronouns');
        }
        else {
            setUser({ ...user, pronouns: { ...user.pronouns, value: e.value } });
        }
    }

    const handleBirthdayVerification = (e) => {
        if(e.value) {

        }
    }

    /*
    need to move about you section into a different section..... running out of room on here!
     */
    return (
        <>
        <p>Your current email is set to <b>{user.email}</b>.</p>
            <form>
                <div className='input-container'>
                    <label>
                        Name<br></br>
                        <input
                            type='text'
                            className='sign-up-input'
                            name='name'
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        Password <br />
                        <div className='password-input-container'>
                            <input
                                type={hidePassword ? "password" : "text"}
                                className='sign-up-input'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />

                            <button
                                type='toggle-btn'
                                className="visibility-btn"
                                onClick={handlePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size="xl" />
                            </button>
                        </div>
                    </label>
                </div>

                <div className='input-container'>
                    <label>
                        Confirm password <br />
                        <div className='password-input-container'>
                            <input
                                type="password"
                                className='sign-up-input'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </label>
                </div>

                <div className="input-container">
                    <label>
                        Birthday
                        <p className={!user.birthday ? 'red' : null}>{!user.birthday ? '* User must be at least 18 years old. ': null}</p>
                        <Calendar className={!user.birthday ? 'p-invalid' : null} value={user.birthday} onChange={(e) => setUser({...user, birthday: e.value})} maxDate={maxDate} showIcon />
                    </label>
                </div>

                {/* <div className="input-container">
                    <label>
                        About you <br/>
                        <textarea 
                            name="bio" 
                            className="sign-up-textarea"
                            value={user.bio}
                            onChange={handleBioInput}
                            maxLength={200}
                            rows={5} 
                            cols={40} 
                        />
                        <div className="char-counter">{characterCounter}</div>
                    </label>
                </div> */}

                <div className="input-container">
                    <label>
                        Gender <br />
                        <SelectButton value={selectGender} onChange={handleGenderSelection} options={['Man', 'Woman', 'More']} />
                    </label>
                    <label>
                        <Checkbox onChange={(e) => (console.log(e.target.value), setUser({ ...user, gender: { ...user.gender, isVisible: !user.gender.isVisible } }))} value={user.gender.isVisible} checked={user.gender.isVisible}></Checkbox>
                        Show on profile?
                    </label>
                </div>

                <div className="input-container">
                    <label>
                        Pronouns <br />
                        <SelectButton className="pronouns-btnset" value={selectPronouns} onChange={handlePronounsSelection} options={['he/him', 'she/her', 'they/them', 'More']} />
                    </label>
                    <label>
                        <Checkbox onChange={(e) => (console.log(e.target.value), setUser({ ...user, pronouns: { ...user.pronouns, isVisible: !user.pronouns.isVisible } }))} value={user.pronouns.isVisible} checked={user.pronouns.isVisible}></Checkbox>
                        Show on profile?
                    </label>
                </div>
            </form>
        </>
    );
}