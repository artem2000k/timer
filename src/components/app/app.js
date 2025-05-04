import React, { useState, useEffect } from 'react';
import './app.css';
import AppHeader from "../app-header";
import Timers from '../timers';
import Footer from '../footer';

const App = () => {
  const [visibleComponents, setVisibleComponents] = useState({
    header: false,
    timer: false,
    footer: false,
  });

  useEffect(() => {
    setTimeout(() => setVisibleComponents(v => ({ ...v, header: true })), 200);
    setTimeout(() => setVisibleComponents(v => ({ ...v, timer: true })), 800);
    setTimeout(() => setVisibleComponents(v => ({ ...v, footer: true })), 1200);
  }, []);

  const [selectedSubject, setSelectedSubject] = useState('Математика');

  return (
    <div className="app">
      <AppHeader
        className={`fade-in ${visibleComponents.header ? 'visible' : ''}`}
        selected={selectedSubject}
        onSelect={setSelectedSubject}
      />
      <Timers
        className={`fade-in ${visibleComponents.timer ? 'visible' : ''}`}
        subject={selectedSubject}
      />
      <Footer
        className={`fade-in ${visibleComponents.footer ? 'visible' : ''}`}
      />
    </div>
  );
};

export default App;
