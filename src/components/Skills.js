import React from "react";
import { SKILL_ICONS, SKILL_CLASSES } from "../Data";

const style = {
  margin: "10px",
};

export const Skills = (props) => {
  return (
    <section className="iconSet">
      {SKILL_CLASSES.map((itm) => (
        <div className="iconWrapper">
          <i class={itm.class}></i>
        </div>
      ))}
    </section>
  );
};
