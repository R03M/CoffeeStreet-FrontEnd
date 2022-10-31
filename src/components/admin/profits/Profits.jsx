import React,{ useEffect, useState } from "react";
// import TempNd from "../../tempNoDelete/TempNd";
import "./profits.css";
import GraphicsLine from "./graphics/graphicsLine/GraphicsLine.jsx"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders} from "../../../redux/action";


const Profits = () => {
	
	const [sumaTotal, setSumaTotal] = useState(0);
	const [datosGraphicsLine, setDatosGraphicsLine] = useState([]);
	const [datosGraphicsLine2, setDatosGraphicsLine2] = useState([]);
	const ordenes = useSelector((state) => state.ordenes);
	const dispatch = useDispatch();
	const [dataGraphics, setDataGraphics] = useState({
		labels:"",
		datasets:[{
			label:"",
			data:"",
			backgroundColor:"",
		}]
	})
	
	
	
useEffect(() => {
	dispatch(getAllOrders());

}, [dispatch]);

	
	useEffect(() => {
	
		setSumaTotal(ordenes.reduce((a, b) => a + b.total, 0));
		setDatosGraphicsLine(ordenes.map((e)=>{return {date: e.date.slice(0,10), cantidad: e.total }}))

	}, [ordenes]);

	useEffect(() => {

		setDatosGraphicsLine2(datosGraphicsLine.reduce((a, b) => {
			if (a.some((e) => e.date === b.date)) {
				a.find((e) => e.date === b.date).cantidad += b.cantidad;
			} else {
				a.push(b);
			}
			return a;
		}, []));

	}, [datosGraphicsLine]);


	
	useEffect (()=>{
		setDataGraphics({
			labels:[...datosGraphicsLine2.map((e)=>{return e.date})],
			datasets:[{                                         
				label:"sales in the month",
				data : [...datosGraphicsLine2.map((e)=>{return e.cantidad})],
				backgroundColor:["red", "blue", "green", "yellow", "pink", "orange"],
			}]
		})
	}
	,[datosGraphicsLine2])
	
	
	return (
		<div className="profitsDivC">
			{/* <TempNd /> */}
			<div className="top-sellers">
				<div className="top-sellers-title-page"><h1> Sales magnament report</h1></div>
				<div className="top-sellers-div1"><></></div>
				<div className="top-sellers-div2"><></></div>
				<div className="top-sellers-div3"><></></div>
			</div>
			<div >
				<GraphicsLine whith={600} charData={dataGraphics} />
			</div>
			<div>
				  <h1>Total profits :  { Math.round(sumaTotal) } $ </h1>
			</div>
		</div>
	);
};

export default Profits;
