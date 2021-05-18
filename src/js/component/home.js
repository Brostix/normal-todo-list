import React from "react";
import MyList from "./mylist.jsx";

export function Home() {
	return (
		<div className="container">
			<h1>To Do List</h1>
			<MyList />
		</div>
	);
}
