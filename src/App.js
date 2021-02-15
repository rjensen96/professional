import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { MainContent } from "./components/MainContent";
import { DisplayContext } from "./DisplayContext";

// DEPLOYMENT:

// npm run deploy

// git add .
// git commit -m "Message here"
// git push origin master

function App() {
  let [menuChoice, setMenuChoice] = useState("Education");

  return (
    <div className="App container">
      <Navbar />
      <DisplayContext.Provider value={{ menuChoice, setMenuChoice }}>
        <MainContent />
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
