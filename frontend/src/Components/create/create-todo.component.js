import React, { useState } from "react";
import axios from 'axios';
import TodoForm from "../TodoForm";
import './create-todo.component.css'
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

const CreateTodo = () => {
const [formValues] =
	useState({ title: '', description: '', finish: false })
const onSubmit = studentObject => {
	axios.post(
'http://localhost:4000/todos/create-todo',
	studentObject)
	.then(res => {
		if (res.status === 200)
			window.location.replace("/")
		else
			Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}

return(
	<div className="create-student">
		<h1>New Todo</h1>
		<TodoForm initialValues={formValues}
		onSubmit={onSubmit}
		enableReinitialize>
		Create Student
		</TodoForm>
		<div className="redirection">
			<div>
				<Link to={"/"} 
            	    className="nav-link">
            	    <button type="button" className="button-home">
            	        <FaHome/> Home
            	    </button>
        		</Link>
			</div>
		</div>
	</div>
)
}

// Export CreateTodo Component
export default CreateTodo
