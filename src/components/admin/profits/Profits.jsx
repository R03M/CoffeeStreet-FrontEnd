import React,{ useState } from "react";
// import TempNd from "../../tempNoDelete/TempNd";
import "./profits.css";
const Profits = () => {
	const [graphicsView, setGraphicsView] = useState(false);


	const seeGraphis = () => {
		setGraphicsView(true);
	};

	const  hideGraphis = () => {
		setGraphicsView(false);
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
				{ graphicsView ? <button onClick={hideGraphis}>salida</button> : 
				<div className="graphics-visualization">
				<div className="graphic-top" > <div onClick={seeGraphis} className="top">top</div></div>
				<div className="graphic-torta" > <div onClick={seeGraphis} className="torta">torta</div></div>
				<div className="graphic-barras" > <div onClick={seeGraphis} className="barras">barras</div></div>
			</div> }
			<div>
				   <h1>Total profits : </h1>

				
			</div>
		</div>
	);
};

export default Profits;
