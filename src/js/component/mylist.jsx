import React, { useState } from "react";
import Fragment from "react";
import Task from "./task.jsx";
import PropTypes from "prop-types";

function MyList() {
	const [theList, setTheList] = useState([]);
	// yo agregaria un map que es la manera de crear varias listas

	let taskMap = theList.map((item, index) => {
		return <Task taskValue={item} key={item} />;
	});

	return (
		<input
			type="text"
			placeholder="Your tasks here :)"
			onKeyPress={event => {
				if (event.key === "Enter") {
					setTheList(event.target.value);
				}
			}}
		/>
	);
}

export default MyList;
