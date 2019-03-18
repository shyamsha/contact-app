import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../config/config";

class ContactShow extends Component {
	constructor() {
		super();
		this.state = {
			contact: {}
		};
	}

	componentDidMount() {
		const id = this.props.match.params.id;

		axios
			.get(`contacts/${id}`, {
				headers: {
					"x-auth": localStorage.getItem("token")
				}
			})
			.then(response => {
				const contact = response.data;

				this.setState(() => ({ contact }));
			})
			.catch(err => {
				console.log(err);
			});
	}
	handleDelete = () => {
		const alert = window.confirm("Are You Sure");
		const id = this.props.match.params.id;
		if (alert) {
			axios
				.delete(`contacts/${id}`, {
					headers: {
						"x-auth": localStorage.getItem("token")
					}
				})
				.then(response => {
					this.props.history.push("/contacts"); // this anthor way of redireact
				})
				.catch(err => {
					console.log(err);
				});
		}
	};
	// handleLogout = () => {
	// 	const alert = window.confirm("Are You Sure");
	// 	const id = this.props.match.params.id;
	// 	if (alert) {
	// 		axios
	// 			.delete(`contacts/${id}`, {
	// 				headers: {
	// 					"x-auth": localStorage.getItem("token")
	// 				}
	// 			})
	// 			.then(response => {
	// 				this.props.history.push("/contacts"); // this anthor way of redireact
	// 			})
	// 			.catch(err => {
	// 				console.log(err);
	// 			});
	// 	}
	// };
	render() {
		return (
			<div>
				<ul>
					<li>
						<header>Name: {this.state.contact.name}</header>
						Email: {this.state.contact.email} <br /> Phone:{" "}
						{this.state.contact.mobile}
					</li>
				</ul>
				<Link to={`contacts/edit/${this.state.contact._id}`}>Edit</Link> |{" "}
				<button onClick={this.handleDelete}>Delete</button> |{" "}
				<button onClick={this.handleLogout}>Logout</button> |{" "}
				<Link to="/contacts">Back</Link>
			</div>
		);
	}
}

export default ContactShow;
