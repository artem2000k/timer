import React, { useState } from 'react';
import './app.css';
import AppHeader from "../app-header";
import Timers from '../timers';
import Footer from '../footer';

const App = () => {
    const [selectedSubject, setSelectedSubject] = useState('Математика');

    return (
    <div className="app">
      <AppHeader selected={selectedSubject} onSelect={setSelectedSubject} />
      <Timers subject={selectedSubject} />
      <Footer />
    </div>
    )
}

export default App;