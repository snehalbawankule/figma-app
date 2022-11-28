import React from "react";
import './Splash.css';
import { useNavigate } from "react-router";
import Statusbar from '../assets/images/Statusbar.png';
//import shape from '../assets/images/shape.png';
import boy from '../assets/images/boy.png';
  const Splash =()=> {
    const navigate = useNavigate();
  const navRegistration = () => {
    navigate('/Registration');
  };
    return (
          <>  <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Splash</title>
            <div className="container">
              <div className="shape">
                <img className="status" src={Statusbar} alt='status' />
              </div>
            
          <div>
           <img className="boy" src={boy} alt='boy' />
          <h3 className="cls02">Get things done with todo</h3>
          <h3 className="cls03">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum neque ut consquat.</h3>
          
          <input type="button" id="btn01" value="Get Started" onClick={navRegistration}></input>
          
          </div>
        </div></>
      );
    };
export default Splash;