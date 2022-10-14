import React from 'react';
import NavBar from '../navbar/Navbar.jsx';
import FormS from './formS/FormS.jsx';
import "./signUp.css"

const SignUp = () => {
    return (
        <div className="signUpDiv">
            <NavBar/>
            <h1 style={{color: "white", fontSize: "3rem"}}>Proximamente... Sign Up</h1>

						<div>
							<FormS />
						</div>
        </div>
    );
}

export default SignUp;
