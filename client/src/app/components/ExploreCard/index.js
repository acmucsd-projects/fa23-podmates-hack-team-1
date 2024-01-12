import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './ExploreCard.css'
import 'primeicons/primeicons.css';
import { PrimeIcons } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import { useState } from 'react';
export default function ExploreCard({user}) {
    const [isLiked, setIsLiked] = useState(false);

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button onClick={handleLike} icon={isLiked ? 'pi pi-heart-filled' : 'pi pi-heart'} />
        </>
    );

    const handleLike = (e) => {
        e.preventDefault();
        setIsLiked(true);
        // update logged in user as liked received
    }
    return(
        <div>
            <Card title={user.name} subTitle={`${user.gender}, ${user.pronouns}`} footer={footer} header={header}>
                <p className="m-0">
                    Insert bio here
                </p>
            </Card>
        </div>
    );
}