import React from "react";
import "./Registration.css";
import Statusbar from '../assets/images/Statusbar.png';
const Registration=()=> {
  return (
  <><div class='container'>
   <div className="shape">
                <img className="status" src={Statusbar} alt='status' />
              </div>
            
    <h1 className="welcome">Welcome Onboard!</h1>
    <h2 className="help">Let's help you meet up your tasks.</h2>
    <form>
    <input type="text" id="name" name="name" placeholder="Enter your full name" />
    <input type="email" id="email" name="email" placeholder="Enter your email" />
    <input type="password" id="pass10" name="password"  placeholder="Enter Password"/>
    <input type="password" id="pass20" name="password" placeholder="Confirm Password" />
    <input type="button" id="btn1" defaultValue="Get Started" />
    <h4 className="already">Already have an account?<a href="/Login.html">Login</a></h4>
  </form>
  </div></>
              );
  }
              export default Registration;