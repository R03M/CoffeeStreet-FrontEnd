import React,{ useEffect, useState } from "react";
// import TempNd from "../../tempNoDelete/TempNd";
import "./profits.css";
import GraphicsLine from "./graphics/graphicsLine/GraphicsLine.jsx"
import GraphicsTorta from "./graphics/graphicsTorta/GraphicsTorta.jsx"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders} from "../../../redux/action";


const Profits = () => {
	const [graphicsView, setGraphicsView] = useState(false);
	const [typeGraphics, setTypeGraphics] = useState("");
	const [sumaTotal, setSumaTotal] = useState(0);
	const [datosGraphicsLine, setDatosGraphicsLine] = useState([]);
	const [datosGraphicsLine2, setDatosGraphicsLine2] = useState([]);
	const [datosGraphicsTorta, setDatosGraphicsTorta] = useState([]);
	const [datosGraphicsTorta2, setDatosGraphicsTorta2] = useState([]);
	const ordenes = useSelector((state) => state.ordenes);
	// const products = useSelector((state) => state.products);
	let suma = 0;
	const dispatch = useDispatch();
	
	// tengo 1 array de objetos [ {} , {} , {}]
	// cada objeto tiene 1 propiedad llamada date
	// si un objeto tiene el mismo date que otro, sumarle la cantidad de ese objeto al otro
	// si no tiene el mismo date, agregarlo al array
	// [{date: 2021-01-01, cantidad: 10}, {date: 2021-01-02, cantidad: 20}]

	// quiero que me devuelva un array [{} , {} , {} ]
	// [{nombre : black }]


console.log("ordenes desde profints",ordenes)


useEffect(() => {
	dispatch(getAllOrders());

	
	
	
}, [dispatch]);


// useEffect(() => {
	
	// 	}
	
	// 	, [ordenes]);
	
	
	useEffect(() => {
		// let suma = 0;
		setSumaTotal(ordenes.reduce((a, b) => a + b.total, 0));
		setDatosGraphicsLine(ordenes.map((e)=>{return {date: e.date.slice(0,10), cantidad: e.total }}))
		setDatosGraphicsTorta(ordenes.map((e)=>{return {products:e.order_product.reduce( (a,b)=>{return a + b.quantity}, 0), name : e.order_product.reduce( (a,b)=>{return a + b.product.name}, 0)}}))


	}, [ordenes]);

// setDatosGraphicsTorta(ordenes.map((e)=>{return {products:e.order_product.map((e)=>{return {name : e.product.name , quantity: e.quantity } })}}))


	useEffect(() => {

		setDatosGraphicsLine2(datosGraphicsLine.reduce((a, b) => {
			if (a.some((e) => e.date === b.date)) {
				a.find((e) => e.date === b.date).cantidad += b.cantidad;
			} else {
				a.push(b);
			}
			return a;
		}, []));

		setDatosGraphicsTorta2(datosGraphicsTorta.reduce((a, b) => {
			if (a.some((e) => e.name === b.name)) {
				a.find((e) => e.name === b.name).products += b.products;
			} else {
				a.push(b);
			}
			return a;
		}
		, []));

		
	}, [datosGraphicsLine]);

		


	
	
	
	const [dataGraphics, setDataGraphics] = useState({
		labels:"",
		datasets:[{
			label:"",
			data:"",
			backgroundColor:"",
		}]
	})
	
	
	const seeGraphis =  (e) => {
		if(e.target.value === "line"){
			setDataGraphics({
				labels:[...datosGraphicsLine2.map((e)=>{return e.date})],
				datasets:[{                                         
					label:"sales in the month",
					data : [...datosGraphicsLine2.map((e)=>{return e.cantidad})],
					backgroundColor:["red", "blue", "green", "yellow", "pink", "orange"],
				}]
			})
		} else if(e.target.value === "torta"){
			setDataGraphics({
				labels: [...datosGraphicsTorta2.map((e)=>{return e.name})],
				datasets:[{
					label:"holaa",
					data: [...datosGraphicsTorta2.map((e)=>{return e.products})],
					backgroundColor:["red", "blue", "green", "yellow", "pink", "orange"],
					options:{
						indexAxis:"y",
					}
				}]
			})
		}
		setGraphicsView(true);
		setTypeGraphics(e.target.value);
	};
	
	const  hideGraphis = () => {
		setGraphicsView(false);
		setTypeGraphics("");
	};
	
	
	// console.log("ordenes", ordenes)
	// console.log("sumaTotal", sumaTotal)
	// console.log("datosOrdenes", datosGraphicsLine)
	console.log("datosOrdenes2", datosGraphicsLine2)
	console.log("datosGraphicsTorta", datosGraphicsTorta)
	console.log("datosGraphicsTorta2", datosGraphicsTorta2)

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
				<GraphicsLine charData={dataGraphics} /></div>
				: graphicsView && typeGraphics === "torta" ? <div className="graphic-Bar"><button onClick={hideGraphis}>salida</button>
				<GraphicsTorta charData={dataGraphics} /></div>
				:
				<div className="graphics-visualization">
				<div className="graphic-line" > <button onClick={seeGraphis} value="line" className="line">line</button></div>
				<div className="graphic-torta" > <button onClick={seeGraphis} value="torta" className="torta">torta</button></div>

			</div> }
			<div>
				  <h1>Total profits :  { Math.round(sumaTotal) } $ </h1>
			</div>
		</div>
	);
};

export default Profits;
