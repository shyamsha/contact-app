import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name ? props.name : "",
			email: props.email ? props.email : "",
			mobile: props.mobile ? props.mobile : "",
			redirectContacts: false
		};
		this.nameHandle = this.nameHandle.bind(this); //this is anthor way of binding of this
	}
	nameHandle(e) {
		e.persist();
		this.setState(() => ({ name: e.target.value }));
	}
	emailHandle = e => {
		e.persist();
		this.setState(() => ({ email: e.target.value }));
	};
	mobileHandle = e => {
		e.persist();
		this.setState(() => ({ mobile: e.target.value }));
	};
	handleSubmit = e => {
		e.preventDefault();
		const formData = {
			name: this.state.name,
			email: this.state.email,
			mobile: this.state.mobile
		};
		this.props.handleSubmit(formData);
		this.setState(() => ({
			name: "",
			email: "",
			mobile: "",
			redirectContacts: true
		}));
	};

	render() {
		console.log(this.props);
		if (this.state.redirectContacts) {
			return <Redirect to="/Contacts" />;
		}
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.nameHandle}
						/>
					</label>
					<br />
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.emailHandle}
						/>
					</label>
					<br />
					<label>
						Mobile:
						<input
							type="text"
							name="mobile"
							value={this.state.mobile}
							onChange={this.mobileHandle}
						/>
					</label>
					<br />
					<input type="submit" onChange={this.handleSubmit} />
				</form>
			</div>
		);
	}
}

export default ContactForm;
