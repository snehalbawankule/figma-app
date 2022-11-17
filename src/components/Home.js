import React from "react";
import '../css/Home.css';
import Checkbox from './Checkbox';
import profile from '../assets/images/profile.png';
import shape1 from '../assets/images/shape1.png';
import Statusbar from '../assets/images/Statusbar.png';
import clock from '../assets/images/clock.jpg';
import rect from '../assets/images/rect.png';
import rect1 from '../assets/images/rect1.png';

function Home() {
  return (
      <><div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home</title>
      <div className="container">
    
      <img className="img4" src={rect} alt='rect' />
      <img  className="img0" src={shape1} alt='shape' />
      <img className="img1" src={Statusbar} alt='status' />
      
     
    <img id="img2" src={profile} alt='pic' />
    <p className="ts2">Welcome Back Olivia</p>
    </div> 
    <p className="ts3">Good Afternoon</p>
    <img className="img3" src={clock} alt='clock' />
    <form>
        <p className="ts1">Tasks List</p>
        
        <img className="img5" src={rect1} alt='rect1' />
        <h6>Daily tasks</h6>
        <div>
        <div className="task01" />
        <Checkbox/>
      </div>
      </form>
      </div>
    
      </>
     );
  }
  export default Home;