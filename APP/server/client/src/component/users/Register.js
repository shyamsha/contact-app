import React from "react";
import axios from "../../config/config";
class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			//same properties have to be here when i create in mongoose
			username: "",
			email: "",
			password: ""
		};
	}
	usernameHandle = e => {
		const username = e.target.value;
		this.setState(() => ({ username }));
	};
	emailHandle = e => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};
	passwordHandle(e) {
		const password = e.target.value;
		this.setState(() => ({ password }));
	}
	handleSubmit = e => {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		};
		//valdition
		axios
			.post("/users/register", formData)
			.then(responce => {
				this.setState(() => ({
					username: "",
					email: "",
					password: ""
				}));
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<h3>Register with us</h3>
				<form onSubmit={this.handleSubmit}>
					<label>
						UserName:
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.usernameHandle}
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
						Password:
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.passwordHandle.bind(this)}
						/>
					</label>
					<br />
					{/* PasswordConform:
				<label>
					<input type="password" name="password" />
				</label> */}
					<input type="submit" onChange={this.handleSubmit} />
				</form>
			</div>
		);
	}
}

export default Register;
