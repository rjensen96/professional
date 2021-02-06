import { Paper } from '@material-ui/core';
import React from 'react';
import '../Content.css';

// get paths for collage photos
const pics = [];
for (let i = 1; i < 17; i++) {
    pics.push("/collage/col" + i + ".jpg")
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffle(pics);

export const AboutMe = () => {
    shuffle(pics);
    return(
        <section className="mainCard">
            <Paper>
                <div className="collageContainer">
                    {pics.map(imgName => (
                        <img src={process.env.PUBLIC_URL + imgName} alt="At Thor's Hideout" className="profileImage"></img>        
                    ))}
                </div>
                <h1>Ryan Jensen</h1>
            </Paper>
        </section>
    )
}

// would be cool here to have a collage of square images, you can click on one to expand it to take up more of the grid.
// also, would be cool to have a list of adjectives that describe...
// the adjectives "type themselves" as user scrolls down the page. 