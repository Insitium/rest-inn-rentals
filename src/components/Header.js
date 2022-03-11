import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {


  return(
  
  <header>
    <div className="container">
    
            <nav>
            
                <ul>
                    <li><a className = "logo" href="/"><span>REST</span>-INN</a></li>
                    <li><textarea className = "post-form-box"  name ="createPost" rows ="1" cols="50" ></textarea></li>
                    <a className="header-icon">
                    <li >
                        <Link to="/vacation-properties">Vacation Properites</Link>
            
                       <button className="dropbtn">d</button>
                    
                    </li>
                   
                    </a>

                    {/* <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/resorts">Resort Listing</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li> */}
                </ul>
            </nav>
    </div>
</header>)
};

export default Header;
