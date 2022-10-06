import Navbar from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import duck from "../media/duckJs2.png"
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src= {duck} alt= "duckJs"/>
      <Home/>
    </div>
  );
}

export default App;
