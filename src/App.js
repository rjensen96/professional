import React from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
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
      <MainContent />
    </div>
  );
}

export default App;
