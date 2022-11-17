import React from "react";
import shape from '../assets/images/shape.png';
import "../css/Registration.css";
import Statusbar from '../assets/images/Statusbar.png';
const Registration=()=> {
  return (
  <><img className="img1" src={Statusbar} alt='status' /><form>
    <img className="img0" src={shape} alt='shape' />
    <h1>Welcome Onboard!</h1>
    <h2>Let's help you meet up your tasks.</h2>
    <input type="text" id="name" name="name" placeholder="Enter your full name" />
    <input type="text" id="email" name="email" placeholder="Enter your email" />
    <input type="password" id="pass1" name="password" placeholder="Enter Password" />
    <input type="password" id="pass2" name="password" placeholder="Confirm Password" />
    <input type="button" id="btn" defaultValue="Get Started" />
    <h4>Already have an account?<a href="/login.html">Login</a></h4>
  </form></>
              );
  }
              export default Registration;