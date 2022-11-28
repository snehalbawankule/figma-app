import React, { useEffect } from "react";
import './Home.css';
//import Checked from "../checked/checked";
import Checkbox001 from '../Checkbox/checkbox001';
import profile from '../assets/images/profile.png';
import Statusbar from '../assets/images/Statusbar.png';
import clock from '../assets/images/clock.jpg';

function Home() {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
   })
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
           <Checkbox001/>
           </div>
           </div>
        </div>
    
      </>
     );
  }
  export default Home;