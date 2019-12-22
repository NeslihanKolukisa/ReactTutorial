import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";

import User from "./components/User";


function App() {
    return (
    <div className="container">
        <Navbar/>
        <hr />
        <User
            name = "Neslihan KOLUKISA"
            department = "KKST"
        />

        <User
            name = "Oğuz Artıran"
            salary = "60000 TL"
            department = "Bilişim"
        />
    </div>
  );
}

export default App;
