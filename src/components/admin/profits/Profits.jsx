import React,{ useState } from "react";
// import TempNd from "../../tempNoDelete/TempNd";
import "./profits.css";
import {UserData} from "./darta"
import GraphicsBar from "./graphics/graphicsBar/GraphicsBar.jsx"
import GraphicsCake from "./graphics/graphicsCake/GraphicsCake.jsx"
import GraphicsLine from "./graphics/graphicsLine/GraphicsLine.jsx"
const Profits = () => {
	const [graphicsView, setGraphicsView] = useState(false);
	const [typeGraphics, setTypeGraphics] = useState("");
	const [userData , setUserData] = useState({
		labels:UserData.map((item)=>item.year),
		datasets:[{
			label:"User Gain",
			data : UserData.map((item)=>item.userGain),
			backgroundColor:["red", "blue", "green", "yellow", "pink", "orange"],
			options:{
				indexAxis:"y",
			}
		}]

	})

	const seeGraphis = (e) => {
		setGraphicsView(true);
		setTypeGraphics(e.target.value);
	};

	const  hideGraphis = () => {
		setGraphicsView(false);
		setTypeGraphics("");
	};



	return (
		<div className="profitsDivC">
			{/* <TempNd /> */}
			<div className="top-sellers">
				<div className="top-sellers-title-page"><h1> Sales magnament report</h1></div>
				<div className="top-sellers-div1"><h1>image1</h1></div>
				<div className="top-sellers-div2"><h1>image2</h1></div>
				<div className="top-sellers-div3"><h1>image3</h1></div>
			</div>
				{ graphicsView  && typeGraphics === "barras" ? <div><button onClick={hideGraphis}>salida</button> 
				<GraphicsBar charData={userData} /></div>
				: graphicsView && typeGraphics === "torta" ? <div><button onClick={hideGraphis}>salida</button> 
				<GraphicsCake charData={userData}/> </div> 
				: graphicsView && typeGraphics === "line" ? <div><button onClick={hideGraphis}>salida</button>
				<GraphicsLine charData={userData}/> </div>
				:
				<div className="graphics-visualization">
				<div className="graphic-line" > <button onClick={seeGraphis} value="line" className="line">line</button></div>
				<div className="graphic-torta" > <button onClick={seeGraphis} value="torta" className="torta">torta</button></div>
				<div className="graphic-barras" > <button onClick={seeGraphis} value="barras" className="barras">barras</button></div>
			</div> }
			<div>
				   <h1>Total profits : </h1>

				
			</div>
		</div>
	);
};

export default Profits;
