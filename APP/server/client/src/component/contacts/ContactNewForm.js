import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import axios from "../../config/config";

class ContactNewForm extends Component {
	handleSubmit = formData => {
		axios
			.post("/contacts", formData, {
				headers: { "x-auth": localStorage.getItem("token") }
			})
			.then(responce => {})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<h5>Add Form</h5>
				<ContactForm handleSubmit={this.handleSubmit} />
				<Link to="/contacts">Back</Link>
			</div>
		);
	}
}

export default ContactNewForm;
