import { useEffect, useState } from 'react';
import styles from './DigitalClock.module.css';

const DigitalClock = () => {
  // let .toLocaleTimeString(); .padStart(2, '0')
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    // let [hours, minutes, seconds] = time.split(':');
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    
    function padZero(number) {
        return number < 10 ? "0" + number : number;
    }

  return (
    <div className={styles.clockContainer}>
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;