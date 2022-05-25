import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentTableRow from "./TodoTableRow";
import './todo-list.component.css';
import { Link } from "react-router-dom";
import { FaHome, FaDatabase } from 'react-icons/fa';

const TodoList = () => {
const [students, setStudents] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/todos/")
	.then(({ data }) => {
		setStudents(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return students.map((res, i) => {
	return <StudentTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
		<tbody className="tables">{DataTable()}</tbody>
		<div className="redirection">
			<Link to={"/"}>
    		    <button className="btnHome" type="button">
    		        <FaHome/> Home
    		    </button>
    		</Link>
			<Link to={"/create-student"}>
    		    <button className="btnCreate" type="button">
    		        <FaDatabase/> Create
    		    </button>
    		</Link>
		</div>
	</div>
);
};

export default TodoList;
