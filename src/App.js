import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import { SideMenu } from './components/SideMenu';
import { MainContent } from './components/MainContent';

// DEPLOYMENT:

// npm run deploy

// git add .
// git commit -m "Your awesome message"
// git push origin master


function App() {
  
  
  return (
    <div className="App container">
      <Navbar />
      {/* <SideMenu /> */}
      <MainContent />
    </div>
  );
}

export default App;
