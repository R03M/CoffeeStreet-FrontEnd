import React, { useState } from "react";
import "./pagination.css";

const Pagination = ({ currentPage, setPage, max }) => {
	const [input, setInput] = useState(currentPage);
	let pages = [];

	for (let i = 0; i < max; i++) {
		pages.push(i + 1);
	}

	const netPage = () => {
		setInput(parseInt(input) + 1);
		setPage(parseInt(currentPage) + 1);
	};

	const prevPage = () => {
		setInput(parseInt(input) - 1);
		setPage(parseInt(currentPage) - 1);
	};

	return (
		<div className="pagination">
			<button
				disabled={currentPage === 1 || currentPage < 1}
				onClick={prevPage}
				className="btnNP"
			>
				Previous
			</button>

			{pages.map(page => {
				return (
					<button
						key={page}
						onClick={() => {
							setPage(page);
							setInput(page);
						}}
						className={page === currentPage ? "btnPageActive" : "btnPage"}
					>
						{page}
					</button>
				);
			})}
			<button
				disabled={currentPage === max || currentPage < 1}
				onClick={netPage}
				className="btnNP"
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
