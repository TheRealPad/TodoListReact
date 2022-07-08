import React, { useState, useEffect } from "react";
import axios from "axios";
import '../create/create-todo.component.css'
import StudentForm from "../TodoForm";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaHome, FaExchangeAlt } from 'react-icons/fa';
import Header from "./../header/header.component";

const EditTodo = (props) => {
const [formValues, setFormValues] = useState({
	title: "",
	description: "",
	finish: "",
});

const {id} = useParams();

const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:4000/todos/update-todo/" + id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
			window.location.replace("/")
		} else
			Promise.reject();
	})
	.catch((err) => alert(err));
};

useEffect(() => {
	axios
	.get(
		"http://localhost:4000/todos/update-todo/" + id
	)
	.then((res) => {
		const { title, description, rollno, finish } = res.data;
		setFormValues({ title, description, rollno, finish });
		formValues.title = title;
		formValues.description = description;
		formValues.finish = finish;
	})
	.catch((err) => console.log(err));
});

return (
	<div>
		<Header/>
		<div className="create-todo">
			<h1>Update Todo</h1>
			<StudentForm initialValues={formValues}
			onSubmit={onSubmit}>
				<FaExchangeAlt/> Update todo
			</StudentForm>
			<div className="redirection">
				<Link to={"/"} 
    	            className="nav-link">
    	            <button className="button-home">
    	                <FaHome/> Home
    	            </button>
    	    	</Link>
			</div>
		</div>
	</div>
);
};

export default EditTodo;
