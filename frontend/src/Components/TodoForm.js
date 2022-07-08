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
					<p>Task</p>
					<Field name="title" type="text" />
					<ErrorMessage name="title" />
					<p>Description</p>
					<Field name="description" type="text" />
					<ErrorMessage name="description" />
					<div className="display-bool">
						<p>State</p>
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
