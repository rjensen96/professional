import React from 'react';
import '../App.css';

export const MenuOption = (props) => {
    let styleName = '';

    if(props.selected) {
        styleName = 'selected';
    }

    return (
        <li className={styleName} onClick={props.onClick}>{props.label}</li>
    )
}