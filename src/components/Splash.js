import React from "react";
import '../css/Splash.css';
import Statusbar from '../assets/images/Statusbar.png';
import shape from '../assets/images/shape.png';
import boy from '../assets/images/boy.png';
//import Registration from "./Registration";
  const Splash =()=> {
    return (
      <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Splash</title>
            <div className="container">
            <img className="img0" src={shape} alt='shape' />
              <img className="img1" src={Statusbar} alt='status' />
           
           
           <img className="img2" src={boy} alt='boy' />
        <div className="cls01">
          <p className="cls02">Get things done with todo</p>
          <p className="cls03">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum neque ut
            consequat.</p>
          <input type="button" id="btn" Value="Get Started" ></input>
          </div>
        </div>
        </div>
      );
    };
export default Splash;