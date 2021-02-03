import React, { useState } from 'react';
import { SideMenu } from './SideMenu';
import { RESUME } from '../Data';
import "../App.css";
import { ResumeItem } from './ResumeItem';

export const MainContent = () => {
    // call state hook from here???
    // let menuChoice = "Education";
    let [ menuChoice, setMenuChoice ] = useState("Education");

    const handleChoice = (e) => {
        console.log(e.target.innerHTML);
        setMenuChoice(e.target.innerHTML);
    }

    return (
        <div className="mainBody">
            <SideMenu handleChoice={handleChoice} menuChoice={menuChoice}/>
            <div>
                {RESUME.filter(itm => (itm.itemType === menuChoice)).map((itm, idx) => (
                    <ResumeItem data={itm} key={idx}/>
                ))}
            </div>
        </div>
    )
}