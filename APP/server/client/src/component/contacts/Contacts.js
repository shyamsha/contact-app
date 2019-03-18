import React, { Component } from "react";
import axios from "../../config/config";
import { Link } from "react-router-dom";
class Contact extends Component {
	constructor() {
		super();
		this.state = {
			contacts: []
		};
	}
	componentDidMount() {
		axios
			.get("/contacts", {
				headers: {
					"x-auth": localStorage.getItem("token")
				}
			})
			.then(response => {
				const contacts = response.data;

				this.setState(() => ({ contacts }));
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<h3>Listing All Contacts={this.state.contacts.length}</h3>
				<ul>
					{this.state.contacts.map(contact => {
						return (
							<li key={contact._id}>
								<br />
								<header>
									Name:{" "}
									<Link to={`/contacts/${contact._id}`}>{contact.name}</Link>
								</header>
								Email: {contact.email}
								<br />
								Phone: {contact.mobile}
							</li>
						);
					})}
				</ul>
				<Link to="contacts/new">Add Contact</Link>
			</div>
		);
	}
}

export default Contact;
