import React from 'react';
import '../App.css';
import { MenuOption } from './MenuOption';

const menuItems = ['Education', 'Experience', 'Skills', 'About Me', 'For Fun']

export const SideMenu = (props) => {

    return (
        <nav>
            <ul className="menu">
                {menuItems.map(itm => (
                    <MenuOption 
                        label={itm}
                        selected={itm===props.menuChoice}
                        onClick={props.handleChoice}
                        key={itm} 
                    />
                ))}
            </ul>
        </nav>
    )
}