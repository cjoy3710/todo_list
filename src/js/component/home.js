import React, { useState } from "react";

//create your first component
export function Home() {
	//create todo list

	const [toDoList, setToDoList] = useState([{ text: "" }]);

	//create input value
	const [value, setValue] = useState("");

	//handle submission
	const handleSubmit = e => {
		e.preventDefault();
		addToDo(value);
		setValue("");
	};

	//add todo
	const addToDo = text => {
		const updatedToDoList = [...toDoList, { text }];
		setToDoList(updatedToDoList);
	};

	//delete todo
	const handleDelete = todo => {
		const filteredToDoList = toDoList.filter(
			currentToDoListValue => currentToDoListValue !== todo
		);
		setToDoList(filteredToDoList);
	};

	return (
		<div className="container mt-5 to-do-container">
			<h1 className="text-center">Todos</h1>

			<div className="container to-do-input">
				<form onSubmit={handleSubmit}>
					<div className="row justify-content-center">
						<input
							placeholder="Add Todo"
							onChange={keyboardStroke =>
								setValue(keyboardStroke.target.value)
							}
							value={value}
							type="text"
							className="form-control"
							id="addTodo"
							aria-describedby="addTodo"
						/>
						<ul>
							<li>buy milk</li>
							<li>buy socks</li>
						</ul>

						<div className="container to-do-list">
							{toDoList.map((todo, index) => (
								<div key={index}>
									<span>{todo.text}</span>
									<button onClick={() => handleDelete(todo)}>
										X
									</button>
								</div>
							))}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
