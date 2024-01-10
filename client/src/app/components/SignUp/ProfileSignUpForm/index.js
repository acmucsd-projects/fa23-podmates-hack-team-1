import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from 'primereact/checkbox';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import './ProfileSignUpForm.css'
import { Calendar } from 'primereact/calendar';
export default function ProfileSignUpForm({ user, setUser, setShowPopUp, setPopUpType, currentStep, nextStep, previousStep }) {
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
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
    const [newPassword, setNewPassword] = useState(user.password);
    const [confirmPassword, setConfirmPassword] = useState(user.password);
    const [selectGender, setSelectGender] = useState(user.gender.value);
    const [selectPronouns, setSelectPronouns] = useState(user.pronouns.value);
    const [validBirthdayFeedback, setValidBirthdayFeedback] = useState('');
    const [newPasswordFeedback, setNewPasswordFeedback] = useState('* Password must be at least 8 characters long.');
    const [confirmPasswordFeedback, setConfirmPasswordFeedback] = useState('* Password does not match. Please try again.');
    const [nameFeedback, setNameFeedback] = useState('');
    const [genderFeedback, setGenderFeedback] = useState('');
    const [pronounsFeedback, setPronounsFeedback] = useState('');
    
    let today = new Date();
    let minDate = new Date();
    let maxDate = new Date();
    let year = today.getFullYear();
    maxDate.setFullYear(year-18);
    minDate.setFullYear(year-100);

    const handleNameChange = (e) => {
        if(e.target.value.trim() === '') {
            setNameFeedback('* Name cannot be empty.');
        }
        else {
            setNameFeedback('');
        }
        setUser({...user, name: e.target.value});
    }

    const handlePasswordVisibility = (e, changeNew, changeConfirm) => {
        e.preventDefault();
        if(changeNew) {
            setHidePassword(!hidePassword);
        }
        else if(changeConfirm) {
            setHideConfirmPassword(!hideConfirmPassword);
        }
    }
    
    const handleNewPassword = (e) => {
        if(e.target.value.length < 8) {
            setNewPasswordFeedback('* Password must be at least 8 characters long.');
            setNewPassword(e.target.value);
        }
        else {
            setNewPasswordFeedback('');
            setNewPassword(e.target.value);
        }
    }
    const handleConfirmPassword = (e) => {
        if(e.target.value != newPassword) {
            setConfirmPasswordFeedback('* Password does not match. Please try again.');
            setConfirmPassword(e.target.value);
        }
        else {
            setConfirmPasswordFeedback('');
            setConfirmPassword(e.target.value);
            setUser({...user, password: e.target.value});
        }
    }

    const handleGenderSelection = (e) => {
        setSelectGender(e.value);
        if(!e.value) {
            setGenderFeedback('* Gender cannot be empty. ');
            return;
        }
        if (e.value == 'More') {
            setShowPopUp(true);
            setPopUpType('gender');
            setGenderFeedback('');
        }
        else {
            setUser({ ...user, gender: { ...user.gender, value: e.value } });
            setGenderFeedback('');
        }
    }

    const handlePronounsSelection = (e) => {
        setSelectPronouns(e.value);
        if(!e.value) {
            setPronounsFeedback('* Pronouns cannot be empty. ');
            return;
        }
        if (e.value == 'More') {
            setShowPopUp(true);
            setPopUpType('pronouns');
            setPronounsFeedback('');
        }
        else {
            setPronounsFeedback('');
            setUser({ ...user, pronouns: { ...user.pronouns, value: e.value } });
        }
    }

    const handleBirthdayVerification = (e) => {
        if(e.value) {
            setValidBirthdayFeedback('');
            setUser({ ...user, birthday: e.value });
        }
        else {
            setValidBirthdayFeedback('* User must be at least 18 years old. ');
        }
    }

    const verifyFormValidity = () => {
        if(user.name.trim() == '') {
            return false;
        }
        if(!user.birthday) {
            return false;
        }
        // checking for birthday!!..if birthday year ==
        let minAge = 18;
        let userAge = today.getFullYear() - user.birthday.getFullYear();
        let monthDiff = today.getMonth() - user.birthday.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < user.birthday.getDate())) {
            userAge--;
        }
        if(userAge < minAge) {
            return false;
        }
        if(newPassword.length < 8) {
            return false;
        }
        if(confirmPassword !== newPassword) {
            return false;
        }
        if(!selectPronouns) {
            return false;
        }
        if(!user.birthday) {
            return false;
        }
        if(!selectGender) {
            return false;
        }
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (verifyFormValidity()) {
            nextStep();
        }
        else {
            alert("Please correct the highlighted fields before proceeding.");
        }
    }

    return (
        <div className="centered-container">
            <p>Your current email is set to <b>{user.email}</b>.</p>
            <div className="sign-up-form-container">
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label className="sign-up-label">
                            Name
                        </label>
                        <input
                            type='text'
                            className='sign-up-input'
                            name='name'
                            value={user.name}
                            onChange={handleNameChange}
                        />
                        <p className={nameFeedback === '' ? null : 'feedback'}>{nameFeedback}</p>
                    </div>

                    <div className='input-container'>
                        <label className="sign-up-label">
                            Password
                        </label>
                        <div className='password-input-container'>
                            <input
                                type={hidePassword ? "password" : "text"}
                                className='sign-up-input'
                                value={newPassword}
                                onChange={handleNewPassword}
                            />

                            <button
                                type='toggle-btn'
                                className="visibility-btn"
                                onClick={(e) => handlePasswordVisibility(e,true,false)}
                            >
                                <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size="xl" />
                            </button>
                        </div>
                        <p className={newPasswordFeedback === '' ? null : 'feedback'}>{newPasswordFeedback === '' ? null : newPasswordFeedback}</p>
                    </div>

                    <div className='input-container'>
                        <label className="sign-up-label">
                            Confirm Password
                        </label>
                        <div className='password-input-container'>
                            <input
                                type={hideConfirmPassword ? "password" : "text"}
                                className='sign-up-input'
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                            />
                            <button
                                type='toggle-btn'
                                className="visibility-btn"
                                onClick={(e) => handlePasswordVisibility(e,false,true)}
                            >
                                <FontAwesomeIcon icon={hideConfirmPassword ? faEye : faEyeSlash} size="xl" />
                            </button>
                        </div>
                        <p className={confirmPasswordFeedback === '' ? null : 'feedback'}>{confirmPasswordFeedback === '' ? null : confirmPasswordFeedback}</p>
                    </div>
                    <div className="birthday-container">
                        <label className="sign-up-label">
                            Birthday (mm/dd/yyyy)
                        </label>
                        <Calendar value={user.birthday} onChange={handleBirthdayVerification} maxDate={maxDate} showIcon />
                        <p className='feedback'>{validBirthdayFeedback !== '' ? '* User must be at least 18 years old. ': null}</p>
                    </div>

                    <div className="gender-container">
                        <label className="sign-up-label">
                            Gender
                        </label>
                        <SelectButton value={selectGender} onChange={handleGenderSelection} options={['Man', 'Woman', 'More']} />
                        <p className={genderFeedback != '' ? 'feedback' : null}>{genderFeedback}</p>
                        <label>
                        <Checkbox onChange={(e) => (console.log(e.target.value), setUser({ ...user, gender: { ...user.gender, isVisible: !user.gender.isVisible } }))} value={user.gender.isVisible} checked={user.gender.isVisible}></Checkbox>
                            Show on profile?
                        </label>
                    </div>

                    <div className="pronouns-container">
                        <label className="sign-up-label">
                            Pronouns
                        </label>
                        <SelectButton className="pronouns-btnset" value={selectPronouns} onChange={handlePronounsSelection} options={['he/him', 'she/her', 'they/them', 'More']} />
                        <p className='feedback'>{pronounsFeedback}</p>
                        <label>
                        <Checkbox onChange={(e) => (console.log(e.target.value), setUser({ ...user, pronouns: { ...user.pronouns, isVisible: !user.pronouns.isVisible } }))} value={user.pronouns.isVisible} checked={user.pronouns.isVisible}></Checkbox>
                            Show on profile?
                        </label>
                    </div>
                    <div>
                        <button type='button' onClick={previousStep}className='profile-next'>{`<`} Back</button>
                        <button type='submit' className="profile-next">Next {`>`}</button>
                    </div>

                </form>
            </div>
        </div>
    );
}