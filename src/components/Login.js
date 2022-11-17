import React from "react";
import shape from '../assets/images/shape.png';
import '../css/Login.css';
import girl from '../assets/images/girl.png';
import Statusbar from '../assets/images/Statusbar.png';
const Login =()=>(
        <div className="container">
          <img className="img0" src={shape} alt='shape' />
           <img className="img1" src={Statusbar} alt='status' />
             <form>
                <p className="welcome01">Welcome Back!</p>
                <img className="img2" src={girl} alt='girl' />
                <input type="password" id="pass1" name="password" placeholder="Enter Password" />
                <input type="password" id="pass2" name="password" placeholder="Confirm Password" />
                <p className="forgot"><a href="/forgot.html">Forgot your password</a></p>
              <input type="button" id="btn" defaultValue="Get Started" />
              <h4>Don't have an account? <a href="/registration.html"> Register</a></h4>
            </form>
          </div>
      
      );
      export default Login;