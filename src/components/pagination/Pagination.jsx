import React, { useState , useEffect } from "react";

import "./pagination.css";

const Pagination = ({ currentPage, setPage, max }) => {
	const [input, setInput] = useState(1);
	let min = 1


	const netPage = () => {
		setInput(parseInt(input) + 1);
		setPage(parseInt(currentPage) + 1);
	};

	const prevPage = () => {
		setInput(parseInt(input) - 1);
		setPage(parseInt(currentPage) - 1);
	};
	

	const onKeyDown = e => {
		if (e.keyCode === 13) {
			if (e.target.value  < 1||
				e.target.value > max ||
				isNaN(parseInt(e.target.value))
			) {
				setPage(1);
				setInput(1);
			} else {
				setPage(parseInt(e.target.value));
			}
		}
	};



	const onChange = e => {
		if(e.target.value > 0 && e.target.value <= max) {
			setPage(parseInt(e.target.value));
		}


		setInput(e.target.value);
	};
	console.log("input", input);
	console.log("currentPage", currentPage);


	return (
		<div className="pagination">
			<button
				disabled={currentPage === 1 || currentPage < 1 || input > max || input  == 0|| input < 0 || isNaN(parseInt(input))}
				onClick={prevPage}
				className="btnNP"
			>
				Previous
			</button>
			<input
				id="inputPage"
				onChange={e => onChange(e)}
				onKeyDown={e => onKeyDown(e)}
				autoComplete="off"
				value={input}
				className="inputPag"
				
			/>
			<p className="pPagesPagination"> Pages of {max} </p>

			<button disabled={currentPage === max || input > max ||currentPage < 1 || input == 0 || input < 0 || isNaN(parseInt(input))} onClick={netPage} className="btnNP">
			
				Next
			</button>
		</div>
	);
};

export default Pagination;
