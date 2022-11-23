import React from "react";
import './Home.css';
import Checkbox01 from '../Checkbox/Checkbox';
import profile from '../assets/images/profile.png';
import Statusbar from '../assets/images/Statusbar.png';
import clock from '../assets/images/clock.jpg';

function Home() {
  return (
      <>
     
      <div className="container">
        <div className="top">
             <img className="status" src={Statusbar} alt='status' />
             <img className="profile" src={profile} alt='pic'/>
             <p className="ts2">Welcome Back Olivia</p>
        </div>
          <p className="ts3">Good Afternoon</p>
          <img className="clock" src={clock} alt='clock' />
           
           <div>
           <p className="ts1">Tasks list</p>
           <div className="box">
            <p className="daily">Daily Tasks</p>
           <Checkbox01/>
           </div>
           </div>
        </div>
    
      </>
     );
  }
  export default Home;