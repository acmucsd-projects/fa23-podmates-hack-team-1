import { useState, useEffect } from "react";
import genderIdentities from "./genders";
import pronouns from "./pronouns";
import './SelectionPopUp.css'
import { ListBox } from 'primereact/listbox';
import { Checkbox } from 'primereact/checkbox';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
// import 'primeflex/primeflex.css';                                   // css utility
// import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';        
export default function SelectionPopUp( { type, user, setUser, setShowPopUp } ) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredList, setFilteredList] = useState(type == 'gender' ? genderIdentities : pronouns);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedTypeVisibility, setSelectedTypeVisibility] = useState(type == 'gender' ? user.gender.isVisible : user.pronouns.isVisible)

    const handleSelect = (e) => {
        setSelectedItem(e.target.value);
        if(type == 'gender') {
            setUser({...user, gender: {...user.gender, value: e.target.value}})
        }
        else {
            setUser({...user, pronouns: {...user.pronouns, value: e.target.value}})
        }
    }

    const handleVisibility = (e) => {
        setSelectedTypeVisibility(!e.target.value);
        if(type == 'gender') {
            setUser({...user, gender: {...user.gender, isVisible: !e.target.value}})
        }
        else {
            setUser({...user, pronouns: {...user.pronouns, isVisible: !e.target.value}})
        }
    }

    useEffect(()=>{
        const filtered = searchTerm
        ? filteredList.filter(type =>
            type.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : filteredList;

        setFilteredList(filtered);
    }, [searchTerm, filteredList]);
    return(
        <div className="pop-up-container">
            <h1>What {type == 'gender' ? 'is' : 'are'} your {type}?</h1>
            <ListBox filter value={selectedItem} onChange={handleSelect} options={filteredList} 
            className="w-full md:w-14rem" virtualScrollerOptions={{ itemSize: 38 }} listStyle={{ height: '250px' }} />
            <form>
                <label>
                    <Checkbox onChange={handleVisibility} value={selectedTypeVisibility} checked={selectedTypeVisibility}></Checkbox>
                    Show on profile?
                </label>
                <button
                    type='submit'
                    className="btn"
                    disabled={selectedItem != '' && selectedItem ? false : true}
                    onClick={(e) => (e.preventDefault(), setShowPopUp(false))}
                >
                    Continue
                </button>
            </form>
        </div>
    );
}