import React from 'react';
import NavBar from '../navbar/Navbar.jsx';
import "./logIn.css"

const LogIn = () => {
    return (
        <div className="logInDiv">
            <NavBar/>
            <h1 style={{color:"white", fontSize: "3rem"}}>Proximamente... Log In</h1>
        </div>
    );
}

export default LogIn;
