import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
		<Form className="display-form">
			<div>
					<p className="info-form">Task</p>
					<Field name="title" type="text" />
					<ErrorMessage name="title" />
					<p className="info-form">Description</p>
					<Field name="description" type="text" />
					<ErrorMessage name="description" />
				<div className="display-bool">
					<p className="info-form">State</p>
					<Field name="finish" type="checkbox" />
					<ErrorMessage name="finish" />
				</div>
			</div>
			<div>
				<button className="button-send">
					{props.children}
				</button>
			</div>
		</Form>
	</Formik>
	</div>
);
};

export default TodoForm;
