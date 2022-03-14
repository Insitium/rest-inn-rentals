import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SignupForm = (props) => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[fName, setfName]= useState("");
    const [lName, setlName]=useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const[errorPassword, setErrorPassword] = useState("");
    const[errorfName, setErrorfName]= useState("");
    const [errorlName, setErrorlName]=useState("");

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
            if(password.length<6 && password.length>20){
                setErrorPassword("You must enter a valid password")
                isValidated = false;
            }else{
                setErrorPassword("");
            }
            if(fName === ""){
                setErrorfName("You must enter first name");
                isValidated=false;
            }else{
                setErrorfName("");
            }
            if(lName===""){
                setErrorlName("You must enter last name")
                isValidated = false;
            }else{
                setErrorlName("");
            }
            return isValidated;
    }
  return (
    <section>
    <div id ='signup-heading'>
    <h1>Create an Account</h1>
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
        <div >
            <label htmlFor="password">Password</label>
            <br/><br/>
            <input className="signup-form-box" type="text" id="password" value={password} onChange={(event)=>{
                setPassword(event.target.value)
            }}/>
            
            <p><h6>6 to 20 letters with atleast 1 number</h6></p>
            <br/>
            <span id="error-msg">{errorPassword}</span>
        </div>
        <div >
            <label htmlFor="firstName">First Name</label>
            <br/><br/>
            <input className="signup-form-box" type="text" id="email" value={fName} onChange={(event)=>{
                setfName(event.target.value)
            }} />
            <br/>
            <span id="error-msg">{errorfName}</span>
        </div>
        <div >
            <label htmlFor="lastName">Last Name</label>
            <br/><br/>
            <input className="signup-form-box" type="text" id="email" value={lName} onChange={(event)=>{
                setlName(event.target.value)
            }} />
            <br/>
            <span id= "error-msg">{errorlName}</span>
        </div>
        <div>
            <input type="radio" id="remainsignup" name="form-btn" value="true"/>
            <label htmlFor="remainsignup">Keep me signed in</label>
            <br/>
            <input type="radio" id="couponsChecker" name="form-btn" value="true"/>
            <label htmlFor="couponsChecker">    Send me exclusive coupons</label>
            </div>
            <div>By Signing up you accept the <Link to="/signup">Terms and Conditions</Link> and <Link to="/signup">Privacy Statement</Link></div>
            <div className="submit-btn">
                <button className="btn" type="submit" onClick={()=>{
                    validateForm();
                }} >Create Account</button>
                <br/>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        <div>

        </div>

    </form>
    </div>

    </section>
  )
}

export default SignupForm;