import React from "react";
import './Splash.css';
import { useNavigate } from "react-router";
import Statusbar from '../assets/images/Statusbar.png';
import boy from '../assets/images/boy.png';
const Splash =()=> {
  const navigate = useNavigate();
  const navRegistration = () => {
  navigate('/Registration');
  };
    return (
          <>  
            <div className="container">
              <div className="shape">
                <img className="status-bar" src={Statusbar} alt='status' />
              </div>
              <img className="boy" src={boy} alt='boy' />
          <h3 className="cls-Noto" style={{paddingTop:67}}>Get things done with todo</h3>
          <h3 className="cls-Robo" style = {{ width : 284, height : 132, paddingLeft:65}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum neque ut consquat.</h3>
          <input type="button"  className="btn01" value="Get Started" onClick={navRegistration}></input>
        </div></>
      );};
export default Splash;