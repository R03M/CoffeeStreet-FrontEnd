import React, { useState } from "react";
import "./pagination.css";

const Pagination = ({ currentPage, setPage, max }) => {
	const [input, setInput] = useState(1);

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
			setPage(parseInt(e.target.value));

			if (
				parseInt(e.target.value < 1) ||
				e.target.value > max ||
				isNaN(parseInt(e.target.value))
			) {
				console.log("error");
				setPage(1);
				setInput(1);
			} else {
				setPage(parseInt(e.target.value));
			}
		}
	};

	const onChange = e => {
		setInput(e.target.value);
		console.log("input", input);
	};

	return (
		<div className="pagination">
			<button
				disabled={currentPage === 1 || currentPage < 1}
				onClick={prevPage}
				className="btnNP"
			>
				Previus
			</button>
			<input
				onChange={e => onChange(e)}
				onKeyDown={e => onKeyDown(e)}
				autoComplete="off"
				value={input}
				className="inputPag"
			/>
			<p className="btnNP"> Pages of {max} </p>

			<button disabled={currentPage === max} onClick={netPage} className="btnNP">

				Next
			</button>
		</div>
	);
};

export default Pagination;
