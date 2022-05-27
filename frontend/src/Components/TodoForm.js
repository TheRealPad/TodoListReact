import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import './TodoForm.css';

const TodoForm = (props) => {
const validationSchema = Yup.object().shape({
	title: Yup.string().required("Required"),
	description: Yup.string(),
	finish: Yup.boolean(),
});

return (
	<div className="box-form">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<p className="info-form">Task</p>
			<Field name="title" type="text"
				className="form-control" />
			<ErrorMessage
			name="title"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<p className="info-form">Description</p>
			<Field name="description" type="text"
				className="form-control" />
			<ErrorMessage
			name="description"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<p className="info-form">State</p>
			<Field name="finish" type="checkbox"
				className="form-control" />
			<ErrorMessage
			name="finish"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button className="button-send" variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default TodoForm;
