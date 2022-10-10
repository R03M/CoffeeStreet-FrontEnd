import Navbar from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import duck from "../media/duckJs2.png"
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import './App.css';


function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Navbar/>
      <img src= {duck} alt= "duckJs"/>
      <Home/>
    </div>
  );
}

export default App;
