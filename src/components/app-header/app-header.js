import React, { useState } from 'react';
import './app-header.css'

const subjects = ['Математика', 'Русский', 'Информатика'];

const AppHeader = ({ selected, onSelect, className = '' }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelect = (subject) => {
    onSelect(subject);
    setModalOpen(false);
  };

  return (
    <>
      <header className={`app-header ${className}`}>
        <h1 className="title" onClick={() => setModalOpen(true)}>
          {selected}
          <span className="icon">▼</span>
        </h1>
      </header>

      {isModalOpen && (
        <>
          <div className="modal-backdrop" onClick={() => setModalOpen(false)} />
          <div className="modal">
            <ul className="subject-list">
              {['Математика', 'Русский', 'Информатика'].map((subject) => (
                <li key={subject} onClick={() => handleSelect(subject)}>
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};


export default AppHeader;