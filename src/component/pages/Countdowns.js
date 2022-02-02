import React,{useState,useEffect} from 'react'

export default function Countdowns() {
  
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`02/17/${year}`) - +new Date();
      
        let timeLeft = {};
      
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      
        return timeLeft;
      }
     
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

        useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
        });

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <div className='timer-sec' key={interval}>
      {timeLeft[interval]} <span>:</span> <div className='timer-text'>{interval}</div>{" "}
    </div>
  );
});
    return (
        <React.Fragment>
         {timerComponents.length ? timerComponents : <span>Time's up!</span>}     
        </React.Fragment>
    )
}
