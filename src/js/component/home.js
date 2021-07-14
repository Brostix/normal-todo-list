import React from "react";
import MyList from "./mylist.jsx";

export function Home() {
	return (
		<div className="container todo-box">
			<h1 className="todo-title">To Do List</h1>
			<MyList />
		</div>
	);
}
