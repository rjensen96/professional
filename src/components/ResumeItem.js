import { Paper } from "@material-ui/core";
import React from "react";
import "../Content.css";
import { RESUME, COURSEWORK } from "../Data";

const ResumeItem = (props) => {
  return (
    <article>
      <Paper elevation={1} borderRadius={7}>
        <div className="mainCard">
          <header>
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + props.data.image}
                alt={props.data.title}
                height={50}
                width={50}
              ></img>
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

          <ul>
            {props.data.listItems.map((itm, idx) => (
              <li key={idx}>{itm}</li>
            ))}
          </ul>

          {/* {props.data.itemType === "Education" ? <Coursework /> : <div />} */}
        </div>
      </Paper>
    </article>
  );
};

// I don't love this yet. Haven't styled it yet but it's a lot of data.
const Coursework = (props) => {
  return (
    <section>
      {COURSEWORK.map((course) => (
        <section>
          <h1>{course.category}</h1>
          {course.courses.map((schoolClass) => (
            <div>
              <h2>
                {schoolClass.name}: {schoolClass.about}
              </h2>
              {/* <p>{schoolClass.about}</p> */}
              <p>{schoolClass.skills}</p>
            </div>
          ))}
        </section>
      ))}
    </section>
  );
};

export const ResumeList = (props) => {
  return RESUME.filter(
    (itm) => itm.itemType === props.itemType
  ).map((itm, idx) => <ResumeItem data={itm} key={idx} />);
};
