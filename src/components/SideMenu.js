import React, { useState } from 'react';
import '../App.css';
import { MenuOption } from './MenuOption';

const menuItems = ['Education', 'Experience', 'Skills', 'About Me', 'For Fun']

export const SideMenu = (props) => {
    
    let [ menuChoice, setMenuChoice ] = useState("Education");

    const handleChange = (e) => {
        console.log(e.target.innerHTML);
        setMenuChoice(e.target.innerHTML);
    }

    return (
        <ul className="menu">
            {menuItems.map(itm => (
                <MenuOption 
                    label={itm}
                    selected={itm===menuChoice}
                    onClick={handleChange} 
                />
            ))}
        </ul>
    )
}