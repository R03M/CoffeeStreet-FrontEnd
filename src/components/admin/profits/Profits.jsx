import React,{ useState } from "react";
// import TempNd from "../../tempNoDelete/TempNd";
import "./profits.css";
import GraphicsLine from "./graphics/graphicsLine/GraphicsLine.jsx"
import { useSelector } from "react-redux";


const Profits = () => {
	const [graphicsView, setGraphicsView] = useState(false);
	const [typeGraphics, setTypeGraphics] = useState("");
	const ordenes = useSelector((state) => state.ordenes);

	const [userData , setUserData] = useState({
		labels:ordenes.map((item)=>item.date),
		datasets:[{
			label:"User Gain",
			data : ordenes.map((item)=>item.total),
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
				{graphicsView && typeGraphics === "line" ? <div className="graphic-Line"><button onClick={hideGraphis}>salida</button>
				<GraphicsLine charData={userData} /> </div>
				:
				<div className="graphics-visualization">
				<div className="graphic-line" > <button onClick={seeGraphis} value="line" className="line">line</button></div>

			</div> }
			<div>
				  <h1>Total profits : </h1>
			</div>
		</div>
	);
};

export default Profits;
