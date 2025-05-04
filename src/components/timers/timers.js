import React, { useEffect, useState } from 'react';
import './timers.css';

const examDates = {
  Математика: new Date('2025-05-26T10:00:00'),
  Русский: new Date('2025-05-29T10:00:00'),
  Информатика: new Date('2025-06-10T10:00:00'),
};

const getTimeLeft = (date) => {
  const now = new Date();
  const diff = date - now;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы от 0 до 11
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} в ${hours}:${minutes}`;
};

const Timers = ({ subject }) => {
  const examDate = examDates[subject];
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(examDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(examDate));
    }, 100);

    return () => clearInterval(timer);
  }, [subject]);

const padZero = (value) => String(value).padStart(2, '0');

  return (
    <div className="timer-container">
      <p className="timer_text">Тебе осталось</p>
      <p className="timer">
      {padZero(timeLeft.days)} {padZero(timeLeft.hours)} {padZero(timeLeft.minutes)} {padZero(timeLeft.seconds)} 
      </p>
      <p className="timer_text">Дата экзамена: {formatDate(examDate)}</p>
    </div>
  );
};

export default Timers;