import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './TodoTableRow.css'
import { FaTrash, FaPenNib, FaRegThumbsUp, FaRegThumbsDown } from	'react-icons/fa'

function Finish(props) {
	const finish = props.finish;
	if (finish) {
		return <p className="finish-task"><FaRegThumbsUp/></p>
	}
	return <p className="not-finish-task"><FaRegThumbsDown/></p>
}

const TodoTableRow = (props) => {
	const { _id, title, description, finish } = props.obj;

	const deleteStudent = () => {
		axios
		.delete(
	"http://localhost:4000/todos/delete-todo/" + _id)
		.then((res) => {
			if (res.status === 200) {
				window.location.reload();
			} else
				Promise.reject();
		})
		.catch((err) => alert("Something went wrong"));
	};

	return (
		<tr className="box-elem">
			<div className="data-elem">
				<div>
					<td className="elem-title">{title}</td>
					<br/>
					<div className="elem-end">
						<td>{description}</td>
						<Finish finish={finish}/>
					</div>
					<br/>
				</div>
			</div>
			<div className="button-elem">
				<div>
					<Link to={"/edit-todo/" + _id}>
						<Button className="edit-link">
							<FaPenNib/> Edit
						</Button>
					</Link>
				</div>
				<div>
					<Button className="btn-delete" onClick={deleteStudent}>
						<FaTrash/> Delete
					</Button>
				</div>
			</div>
		</tr>
	);
};

export default TodoTableRow;
