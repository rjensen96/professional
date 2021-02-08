import React, { useContext } from "react";
import { SideMenu } from "./SideMenu";
import "../App.css";
import { ResumeList } from "./ResumeItem";
import { DisplayContext } from "../DisplayContext";
import { AboutMe } from "./AboutMe";
import { SnakeGame } from "./SnakeGame";
import { Skills } from "./Skills";

const contentOptions = {
  Education: <ResumeList itemType="Education" />,
  Experience: (
    <div>
      <ResumeList itemType="Experience" />
      <Skills />
    </div>
  ),
  // Skills: <Skills />,
  "About Me": <AboutMe />,
  "For Fun": <SnakeGame />,
};

// in AboutMe, try using an imagelist to display those images. Preformatted and gapped.
// in SnakeGame, add a colorpicker thing to let user choose colors for snake.

export const MainContent = () => {
  let { menuChoice, setMenuChoice } = useContext(DisplayContext);

  const handleChoice = (e) => {
    console.log(e.target.innerHTML);
    setMenuChoice(e.target.innerHTML);
  };

  return (
    <div className="mainBody">
      <SideMenu handleChoice={handleChoice} menuChoice={menuChoice} />
      <div>{contentOptions[menuChoice]}</div>
    </div>
  );
};
