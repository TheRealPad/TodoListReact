import React, { useState, useEffect } from "react";
import axios from "axios";
import '../create/create-todo.component.css'
import StudentForm from "../TodoForm";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const EditTodo = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
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
			alert("Student successfully updated");
			props.history.push("/student-list");
		} else
			Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

useEffect(() => {
	axios
	.get(
		"http://localhost:4000/todos/update-todo/" + id
	)
	.then((res) => {
		const { title, description, rollno, finish } = res.data;
		setFormValues({ title, description, rollno, finish });
	})
	.catch((err) => console.log(err));
}, [id]);

return (
	<div className="create-student">
		<StudentForm
		initialValues={formValues}
		onSubmit={onSubmit}
		enableReinitialize
		>
		Update Student
		</StudentForm>
		<div className="redirection">
			<div>
				<Link to={"/"} 
            	    className="nav-link">
            	    <button type="button">
            	        Home
            	    </button>
        		</Link>
			</div>
			<div>
				<Link to={"/student-list"} 
            	    className="nav-link">
            	    <button type="button">
            	        View
            	    </button>
        		</Link>
			</div>
		</div>
	</div>
);
};

export default EditTodo;
