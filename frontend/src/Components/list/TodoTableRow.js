import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './TodoTableRow.css'
import { FaTrash, FaPenNib, FaRegThumbsUp, FaRegThumbsDown } from	'react-icons/fa'

function Padou(props) {
	const finish = props.finish;
	if (finish) {
		return <p className="finish-task">Finish <FaRegThumbsUp/></p>
	}
	return <p className="not-finish-task">Not finish <FaRegThumbsDown/></p>
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
					<p className="elem-title">Task</p>
					<td className="loooool">{title}</td>
					<p className="elem-title">description</p>
					<td>{description}</td>
				</div>
				<div>
					<Padou finish={finish}/>
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
