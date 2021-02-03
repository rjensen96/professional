import { Paper } from '@material-ui/core';
import React from 'react';
import '../Content.css';

export const ResumeItem = (props) => {
    return (
        <article>
            <Paper>
                <div className="mainCard">
                    <header>
                        <div className="logo">
                            <img src={process.env.PUBLIC_URL + props.data.image} alt="BYU" height={50} width={50}></img>    
                        </div>
                        <div className="title">
                            <h1>{props.data.title}</h1>
                            <h2>{props.data.subtitle}</h2>
                        </div>
                        <div className="locationTime">
                            <h2>{props.data.location}</h2>
                            <h2>{props.data.date}</h2>
                        </div>
                    </header>
                    
                    <div>
                        {props.data.listItems.map((itm, idx) => (
                            <p key={idx}>{itm}</p>
                        ))}
                    </div>

                </div>
            </Paper>
        </article>
    )
}