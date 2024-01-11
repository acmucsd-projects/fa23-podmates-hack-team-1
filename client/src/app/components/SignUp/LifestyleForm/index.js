import { useState, useRef } from "react";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { SelectButton } from "primereact/selectbutton";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from "primereact/button";
import './LifestyleForm.css';

export default function LifestyleForm({ user, setUser, previousStep, handleSubmitForm }) {
    const toast = useRef(null);
    const [rating, setRating] = useState(user.lifestyle.cleanliness);
    const [chronotype, setChronotype] = useState(user.lifestyle.Chronotype);


    const handleCleanliness = (e) => {
        const newValue = e.value;
        setRating(newValue);
        setUser({...user, lifestyle: {...user.lifestyle, cleanliness: newValue}});
    }

    const handleChronotype = (e) => {
        const newValue = e.value;
        setChronotype(newValue);
        setUser({...user, lifestyle: {...user.lifestyle, Chronotype: newValue}});
    }
    // thinking about excluding image uploading for now since we have to figure out how it works on the backend too
    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
    return(
        <div>
            <form>
                <div className="input-container">
                    <label className='label'>
                        Upload Profile Picture
                    </label>
                    <Toast ref={toast}></Toast>
                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
                </div>
                <div className='input-container'>
                    <label className='label'>
                        How is your cleanliness?
                    </label>
                    <Rating value={rating} onChange={handleCleanliness} stars={5} />
                </div>
                <div className='input-container'>
                    <label className='label'>
                        Are you a morning person or a night owl?
                    </label>
                    <SelectButton className="selectbutton" value={chronotype} onChange={handleChronotype} options={['Morning', 'Night']}/>
                </div>
                <div className='input-container'>
                    <label className='label'>
                        Describe yourself
                    </label>
                    <InputTextarea autoResize value={user.bio} onChange={(e) => setUser({...user, bio: e.target.value})} rows={5} cols={30} />
                </div>
                <Button label="Submit" onClick={handleSubmitForm}/>
                <div>
                    <button type='button' onClick={previousStep} className='movement-btn'>{`<`} Back</button>
                </div>
            </form>
        </div>
    );
}