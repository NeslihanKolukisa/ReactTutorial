import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";

import User from "./components/User";


function App() {
    return (
    <div className="container">
        <Navbar title="User App 2" />
        <hr />
        <User
            name = "Neslihan KOLUKISA"
            salary = "0 TL"
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
