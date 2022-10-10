import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home.jsx";
import SignUp from "../components/signUp/SignUp.jsx";
import LogIn from "../components/logIn/LogIn.jsx";
import Landing from "../components/Landing/Landing.jsx";
import './App.css';


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Sign Up" element={<SignUp/>}/>
            <Route path="/Log In" element={<LogIn/>}/>
          </Routes>
        </div>

  );
}

export default App;
