import './style.scss';
import React, { useState, useEffect } from 'react';
import pfp from './assets/profile.svg';
function Header(){
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const year = time.getFullYear();
  const month = months[time.getMonth()];
  const day = days[time.getDay()];
  const date = time.getDate();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
    return(
        <div id='Header'>
            <div className='logo'>
                <p>Parul University's</p>
                <span>PU TIMES</span>
            </div>
            <div className="timeline">
                <div className='line'></div>
                <div className='container'>
                    <span>{hours}: {minutes}: {seconds}</span>
                    <span>{day}, {date} {month} {year}</span>
                    <a href=''><span>paruluniversity.ac.in</span></a>
                </div>
            </div>
            <nav className="navbar">
                <p>Agriculture</p>
                <p>Applied Science</p>
                <p>Architecture</p>
                <p>Design</p>
                <p>Engineering</p>
                <p>General</p>
                <p>Homeopathy</p>
                <p>Management</p>
                <p>Nursing</p>
                <p>Pharmacy</p>
                <p>Placement Cell</p>
                <img src={pfp}/>
            </nav>
        </div>
    )
}

export default Header;