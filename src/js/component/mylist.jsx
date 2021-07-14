import React, { useEffect, useState, Fragment } from "react";

function List() {
	const newURL = "https://assets.breatheco.de/apis/fake/todos/user/";
	const [myList, setmyList] = useState([]);
	const [pintedList, setPintedList] = useState("");
	const [bool, setBool] = useState(true);

	const deleteList = indexToDelete => {
		console.log(myList);
		console.log(indexToDelete);

		//const result = myList.filter(elementToDelete => indexToDelete);
		const filterDelete = myList.filter((_, index) => {
			console.log(index);
			return index !== indexToDelete;
		});
		console.log(filterDelete);
		setmyList(filterDelete);
		setBool(!bool);
		return;
	};

	// mapeo de la lista de datos
	useEffect(() => {
		setPintedList(
			myList.map((element, index) => {
				return (
					// element.done no lo muestra por que es un bolean y no muestra eso pinta txt
					<li key={index.toString()}>
						{element.label}
						<button
							className="todo-button"
							onClick={event => {
								{
									event.preventDefault();
									/*setmyList([
										...myList,
										{
											label: event.target.value,
											done: false
										}
									]);*/
									deleteList(index);
								}
							}}>
							❌
						</button>
					</li>
				);
			})
		);
	}, [myList]);
	return (
		<div className="card container todo-list">
			<div className="input-box">
				<input
					className="todo-imput"
					type="text"
					placeholder="New Task ✏"
					onKeyPress={event => {
						// if (event.key === "");
						if (event.key === "Enter") {
							event.preventDefault();
							setmyList([
								...myList,
								{ label: event.target.value, done: false }
							]);
							setBool(!bool);
							event.target.value = "";
						}
					}}
				/>
			</div>

			<div className="task-box">
				<h5 className="card-title">Things to do 🗒:</h5>
				<div className="print">{pintedList}</div>
			</div>
		</div>
	);
}
export default List;
