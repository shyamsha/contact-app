//db configuration

const mongoose = require("mongoose");
const CONNECTION_URI =
	process.env.MONGODB_URI ||
	"mongodb+srv://sHyaM:9849084994@cluster0-1hs0m.mongodb.net/test?retryWrites=true";

mongoose.Promise = global.Promise;
mongoose
	.connect(CONNECTION_URI, {
		useNewUrlParser: true
	})
	.then(() => {
		console.log("connected to db");
	})
	.catch(err => {
		console.log("Error connecting to DB", err);
	});
module.exports = {
	mongoose
};
