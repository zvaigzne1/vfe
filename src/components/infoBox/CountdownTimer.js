import './CountdownTimer.scss';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const CountdownTimer = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  let interval = useRef();

  // const countdownDate = Date.parse("2021-05-18T20:37:15+02:00");
  const product = useSelector(state => state.getProduct.product);  
  const countdownDateFromState = product.discount.end_date
  const countdownDate = Date.parse(countdownDateFromState);

  const startTimer = () => {
    interval = setInterval(() => {

      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000)
  };

  useEffect(() => {
    let warningFix = interval.current;
    startTimer();
    return () => {
      clearInterval(warningFix);
    }
  });

  // In useEffect we call startTimer that sets interval and updates state, when state is updated we rerender component. Before useEffect runs again it returns clearInterval (from "old/prerender" useEffect) that clears old interval. Only than "new" useEffect runs and cycle begins.

  return (
    <section className="countdown-timer">
      <div className="countdown-timer__days">
        {timerDays}d:
      </div>
      <div className="countdown-timer__hours">
        { timerHours >= 10 
          ? timerHours
          : timerHours < 10 && timerHours > 0
            ? `0${timerHours}`
            : '00'
        }h:
      </div>
      <div className="countdown-timer__minutes">
        { timerMinutes >= 10 
          ? timerMinutes
          : timerMinutes < 10 && timerMinutes > 0
            ? `0${timerMinutes}`
            : '00' 
        }m:
      </div>
      <div className="countdown-timerseconds">
        { timerSeconds >= 10
          ? timerSeconds
          : timerSeconds < 10 && timerSeconds > 0
            ? `0${timerSeconds}`
            : '00'
          }
      </div>
    </section>
  );
};

export default CountdownTimer;
