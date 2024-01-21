import React, { useState, useEffect } from 'react'

function Footer() {
const [currentTime, setCurrentTime] = useState('');

useEffect(() => {

  const updateTime = () => {
    const today = new Date();
    const formattedTime = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12: true, });
    setCurrentTime(formattedTime);
  };

  updateTime();

  const intervalId = setInterval(updateTime, 1000);

  return () => clearInterval(intervalId);
}, []);


  return (
    <div>
        <div className="footer">
        <div className="footer-left">
            <div className="footer-top">Connect</div>
            <div className="footer-bottom"><a href="https://instagram.com/believersgg" target='_blank'>Instagram</a></div>
        </div>

        <div className="footer-right">
            <div className="footer-top">Local time</div>
            <div className="footer-bottom">{currentTime}</div>
        </div>
        </div>
        <div className="footer-foot">
            <div className="footer-top">Believers © Developed by Ahmed Bahij</div>
        </div>

    </div>
  )
}

export default Footer