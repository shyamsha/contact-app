import React, { Component } from "react";
import axios from "../../config/config";
import { Redirect } from "react-router-dom";
class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			redirectContacts: false
		};
		//this.passwordHandle.bind(this)
	}
	emailHandle = e => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};
	passwordHandle(e) {
		e.persist(); //when ever u read diractely in setState use event.persist() must
		this.setState(() => ({ password: e.target.value }));
	}
	handleSubmit = e => {
		e.preventDefault();
		const formData = {
			email: this.state.email,
			password: this.state.password,
			redirectContacts: false
		};

		//valdition
		axios
			.post("/users/login", formData)
			.then(responce => {
				const token = responce.data;
				localStorage.setItem("token", token);
				this.setState(() => ({
					email: "",
					password: "",
					redirectContacts: true
				}));
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		if (this.state.redirectContacts) {
			return <Redirect to="/Contacts" />;
		}
		return (
			<div>
				<h3>Login</h3>
				<form onSubmit={this.handleSubmit}>
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
						Password:
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.passwordHandle.bind(this)}
						/>
					</label>
					<br />

					<input type="submit" onSubmit={this.handleSubmit} />
				</form>
			</div>
		);
	}
}

export default Login;
