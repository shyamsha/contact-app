import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Register from "./component/users/Register";
import Login from "./component/users/Login";
import Contacts from "./component/contacts/Contacts";
import ContactNewForm from "./component/contacts/ContactNewForm";
import ContactShow from "./component/contacts/ContactShow";
import ContactEdit from "./component/contacts/ContactEdit";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				{/* TODO */}
				<div>
					<h2>Contat Manager</h2>
					<Link to="/user/register">Register</Link> |{" "}
					<Link to="/user/login">Login</Link> |{" "}
					<Link to="/contacts">Contacts</Link> |{" "}
					<Switch>
						<Route path="/user/register" component={Register} />
						<Route path="/user/login" component={Login} />
						<Route path="/contacts" component={Contacts} exact={true} />
						<Route
							path="/contacts/new"
							component={ContactNewForm}
							exact={true}
						/>
						<Route path="/contacts/:id" component={ContactShow} exact={true} />
						<Route
							path="/contacts/edit/:id"
							component={ContactEdit}
							exact={true}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
