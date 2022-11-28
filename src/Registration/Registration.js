import React, {useEffect, useState} from "react";
import "./Registration.css";
import {useNavigate } from 'react-router-dom';
import { formValidate } from "../validate/formValidate";
import Statusbar from '../assets/images/Statusbar.png';
// import axios, { Axios } from 'axios';
const Registration=()=> {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
    setUserInfo({ name: "", email: "", password: "" });
  };



  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  
  const navigate = useNavigate();
  const navLogin = () => {
    navigate('/login');
  };
  return (
  <><div className='container'>
   <div className="shape">
                <img className="status" src={Statusbar} alt='status' />
              </div>
            
    <h1 className="welcome">Welcome Onboard!</h1>
    <h2 className="help">Let's help you meet up your tasks.</h2>
    <form onSubmit={handleSubmit}>
    <input type="text" id="name" name="name" placeholder="Enter your full name"   onChange={handleChange} value={userInfo.name} minLength='5' maxLength='10' required/>
    <input type="email" id="email" name="email" placeholder="Enter your email"  onChange={handleChange} value={userInfo.email} required />
    <input type="password" id="pass10" name="password" value={userInfo.password}  onChange={handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Enter Password" required/>
    <input type="password" id="pass20" name="password1"  placeholder="Confirm Password" required/>
    <input type="submit" id="btn1" value="Get Started" onClick={formValidate} />
    <h4 className="already">Already have an account? <input type="button" id="a" value="Login" onClick={navLogin}></input></h4>
  </form>
  </div></>
     );
  }
 
 export default Registration;