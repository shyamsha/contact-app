import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import ContactForm from "./ContactForm";
import axios from "../../config/config";

class ContactEdit extends Component {
	constructor() {
		super();
		this.state = {
			contact: {},
			isLoaded: false
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

				this.setState(() => ({ contact, isLoaded: true }));
			})
			.catch(err => {
				console.log(err);
			});
	}
	handleSubmit = formData => {
		axios
			.put(`/contacts/${this.state.contact._id}`, formData, {
				headers: {
					"x-auth": localStorage.getItem("token")
				}
			})
			.then(responce => {
				console.log(responce.data);
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				{this.state.isLoaded && (
					<ContactForm
						name={this.state.contact.name}
						mobile={this.state.contact.mobile}
						email={this.state.contact.email}
						handleSubmit={this.handleSubmit}
					/>
				)}
			</div>
		);
	}
}

export default ContactEdit;
