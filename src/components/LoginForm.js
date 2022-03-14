import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SignupForm = (props) => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const [errorEmail, setErrorEmail] = useState("");
    const[errorPassword, setErrorPassword] = useState("");
 

    const submitCheck = (event) => {
        event.preventDefault();
      }

    const validateForm=()=>{
        let isValidated = true;
            if(email ===""){
                setErrorEmail("You must enter email")
                isValidated = false;
            }else if(!(email.includes("@"))){
                setErrorEmail("You must enter valid email address")
                isValidated = false;
            }
            else{
                setErrorEmail("");
            }
            if(password===""){
                setErrorPassword("You must enter password");
                isValidated= false;
            }
            else if(password.length<6 && password.length>20){
                setErrorPassword("You must enter a valid password")
                isValidated = false;
            }else{
                setErrorPassword("");
            }
            
            return isValidated;
    }
  return (
    <section>
    <div id ='signup-heading'>
    <h1>Log In</h1>
    <br/>
    <br/>
    <form id="signup-elements" action="" onSubmit={submitCheck}>
        <div >
            <label htmlFor="email">Email address</label>
            <br/><br/>
            <input className="signup-form-box" type="text" id="email" value={email} onChange={(event)=>{
                setEmail(event.target.value)
            }} />
            <br/>
            <span id="error-msg">{errorEmail}</span>
        </div>
        <div>
            <input type="radio" id="remainsignup" name="form-btn" value="true"/>
            <label htmlFor="remainsignup">Sign me automatically</label>
        </div>
        <div >
            <label htmlFor="password">Password</label>
            <br/><br/>
            <input className="signup-form-box" type="text" id="password" value={password} onChange={(event)=>{
                setPassword(event.target.value)
            }}/>
            <br/>
            <br/>
            <p><h6><Link to='/login'>Forgot Your Password?</Link></h6></p>
            <br/>
            <span id="error-msg">{errorPassword}</span>
        </div>
        
        
           <div/>
            <div className="submit-btn">
                <button className="btn" type="submit" onClick={()=>{
                    validateForm();
                }} >Create Account</button>
                <br/>
                <p>Don't have an account? <Link to='/signup'> Sign up</Link></p>
            </div>
        <div>

        </div>

    </form>
    </div>

    </section>
  )
}

export default SignupForm;