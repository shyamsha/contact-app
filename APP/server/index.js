const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(cors());
const mongoose = require("./config/dB_config");
const { urls } = require("./app/controllers/contact_controller");
const { Usersrouter } = require("./app/controllers/user_controller");

app.get("/", (req, res) => {
	res.send("welcome to contact manager");
});

app.use("/", urls);
app.use("/users", Usersrouter);
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, function() {
	console.log("listening request from", port);
});
