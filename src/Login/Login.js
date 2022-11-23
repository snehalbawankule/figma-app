import React from "react";
//import shape from '../assets/images/shape.png';
import './Login.css';
import girl from '../assets/images/girl.png';
import Statusbar from '../assets/images/Statusbar.png';
const Login =()=>(
        <div className="container">
          <div className="shape">
                <img className="status" src={Statusbar} alt='status' />
                </div>
           <h1 className="welcome01">Welcome Back!</h1>
                <img className="girl" src={girl} alt='girl' />
                
             <form>
               <input type="password" id="pass1" name="password" placeholder="Enter Password" />
                <input type="password" id="pass2" name="password" placeholder="Confirm Password" />
                <h2><a className="forgot" href="/forgot.html">Forgot your password</a></h2>
              <input type="button" id="btn" defaultValue="Get Started" />
              <h4 className="have">Don't have an account? <a href="/registration.html"> Register</a></h4>
            </form>
          </div>
      
      );
      export default Login;