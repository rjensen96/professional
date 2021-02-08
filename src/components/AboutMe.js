import { Paper } from "@material-ui/core";
import React from "react";
import "../Content.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

// get paths for collage photos
const pics = [];
for (let i = 1; i < 17; i++) {
  pics.push("/collage/col" + i + ".jpg");
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
  return (
    <section className="mainCard">
      <ImageGridList />
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: "auto",
  },
}));

const ImageGridList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={4}>
        {pics.map((tile, idx) => (
          <GridListTile key={idx} cols={tile.cols || 1}>
            <img src={process.env.PUBLIC_URL + tile} alt={"image " + idx} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

// also, would be cool to have a list of adjectives that describe...
// the adjectives "type themselves" as user scrolls down the page.
